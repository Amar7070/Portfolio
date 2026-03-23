import axios from "axios";

// Absolute backend URL for cross-domain support (Render backend)
const BACKEND_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000' 
    : 'https://portfolio-ewq8.onrender.com';

// Configure axial base
const api = axios.create({
    baseURL: BACKEND_URL
});

// LeetCode basic stats API
export const getLeetCode = async (username) => {
    try {
        // Try the GraphQL API first via our server proxy
        const response = await api.post('/api/leetcode', { username });

        const user = response.data.data.matchedUser;
        if (!user) throw new Error('User not found');

        const stats = user.submitStats.acSubmissionNum;
        // Use the "All" count directly instead of summing all difficulties (which includes "All")
        const totalSolved = stats.find(s => s.difficulty === 'All')?.count || 0;
        const easySolved = stats.find(s => s.difficulty === 'Easy')?.count || 0;
        const mediumSolved = stats.find(s => s.difficulty === 'Medium')?.count || 0;
        const hardSolved = stats.find(s => s.difficulty === 'Hard')?.count || 0;

        return {
            data: {
                totalSolved,
                easySolved,
                mediumSolved,
                hardSolved,
                ranking: user.profile.ranking,
                realName: user.profile.realName,
                avatar: user.profile.userAvatar
            }
        };
    } catch (err) {
        console.warn('LeetCode GraphQL failed, trying alternative API:', err.message);
        // Fallback to the heroku API via proxy
        try {
            const res = await api.get(`/api/leetcode-stats/${username}`);
            return { data: res.data };
        } catch (fallbackErr) {
            console.error('LeetCode fallback API also failed:', fallbackErr.message);
            return { data: null };
        }
    }
};

// LeetCode Activity - Get real active days from submissions
export const getLeetCodeActivity = async (username) => {
    try {
        const response = await api.post('/api/leetcode-activity', { username });
        return { data: response.data };
    } catch (err) {
        console.error('LeetCode Activity API error:', err.message);
        return { data: null };
    }
};

// LeetCode Contest History API
export const getLeetCodeContests = async (username) => {
    try {
        const response = await api.post('/api/leetcode-contests', { username });

        if (response.status !== 200) {
            throw new Error(`LeetCode API returned status ${response.status}`);
        }

        const data = response.data.data;
        if (!data || !data.userContestRanking) {
            console.warn('No contest data found for user:', username);
            return { data: null };
        }

        // Process contest history for the last 6 contests
        const contestHistory = data.userContestRankingHistory
            .slice(-6)
            .map(contest => ({
                name: contest.contest.title.split(' ').pop(),
                rating: Math.round(contest.rating),
                date: new Date(contest.contest.startTime * 1000).toLocaleDateString()
            }))
            .reverse();

        return {
            data: {
                currentRating: Math.round(data.userContestRanking.rating),
                globalRanking: data.userContestRanking.globalRanking,
                attendedContests: data.userContestRanking.attendedContestsCount,
                contestHistory
            }
        };
    } catch (err) {
        console.error('LeetCode contest API error:', err.message);
        return { data: null };
    }
};

// GitHub API - Enhanced with contribution data
export const getGithub = async (username) => {
    try {
        const response = await api.get(`/api/github/${username}`);
        return { data: response.data };
    } catch (err) {
        console.error('GitHub API error:', err.message);
        return { data: null };
    }
};

// CodeChef API - Using alternative endpoint
export const getCodeChef = async (username) => {
    try {
        // Try the Vercel API first via proxy
        const response = await api.get(`/api/codechef/${username}`);
        return { data: response.data };
    } catch (err) {
        console.warn('CodeChef Vercel API failed:', err.message);
        return { data: null };
    }
};

// GeeksForGeeks API
export const getGFG = async (username) => {
    try {
        const response = await api.get(`/api/gfg/${username}`);
        return { data: response.data };
    } catch (err) {
        console.error('GFG API error:', err.message);
        return { data: null };
    }
};



// HackerRank API
export const getHackerRank = async (username) => {
    try {
        const response = await api.get(`/api/hackerrank/${username}`);
        return { data: response.data };
    } catch (err) {
        console.error('HackerRank API error:', err.message);
        return { data: null };
    }
};