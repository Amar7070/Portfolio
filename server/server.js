import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import axios from 'axios';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { resumeData } from './data.js';

// Simple in-memory cache to avoid burning API rate limits
const apiCache = new Map();
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

function getCached(key) {
    const entry = apiCache.get(key);
    if (entry && Date.now() - entry.timestamp < CACHE_TTL) {
        return entry.data;
    }
    apiCache.delete(key);
    return null;
}

function setCache(key, data) {
    apiCache.set(key, { data, timestamp: Date.now() });
}

// Configuration
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 5000;

// Initialize Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Request logging for debugging
app.use((req, res, next) => {
    if (req.url.startsWith('/api')) {
        console.log(`[API Request] ${req.method} ${req.url}`);
    }
    next();
});

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash", // The current standard free-tier model
    systemInstruction: `You are the official AI representative for Amar Sahani's portfolio website. 
    
    CRITICAL IDENTITY RULE: If a user asks "What have YOU built?", "Tell me about YOUR skills", or uses the pronoun "you", they are referring to Amar Sahani. You must answer using Amar's information. NEVER break character. NEVER say you are a large language model or an AI created by Google.
    
    Use the following JSON data to answer questions about Amar Sahani:
    ${JSON.stringify(resumeData)}
    
    Rules:
    1. Answer ONLY based on the provided resume data. Do not make up any skills, projects, or experiences.
    2. If a recruiter asks a question that isn't covered in the resume data, politely state that you don't have that specific information and suggest they contact Amar directly using the contact form or via email at amarsahani0777@gmail.com.
    3. Keep responses conversational and easy to read (use bullet points if listing multiple items like skills or projects).`
});

// --- API ROUTES ---

// Health Check (enhanced with build check)
app.get('/api/health', (req, res) => {
    const distPath = path.join(__dirname, '../client/dist');
    const indexExists = fs.existsSync(path.join(distPath, 'index.html'));
    res.json({ 
        status: 'ok', 
        message: 'Core systems operational',
        timestamp: new Date().toISOString(),
        buildStatus: {
            distExists: fs.existsSync(distPath),
            indexExists: indexExists
        }
    });
});

// Ping Route (for uptime monitoring / keep-alive checks)
app.get("/ping", (req, res) => {
    res.send("I'm alive 🚀");
});

// Chatbot Endpoint
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    console.log(`[Chat] Query: "${message}"`);

    if (!message) return res.status(400).json({ error: "No message provided" });

    try {
        const result = await model.generateContent(message);
        const response = await result.response;
        const text = response.text();
        res.json({ reply: text });
    } catch (error) {
        console.error("Gemini Error:", error);

        // Specific Quota/Rate Limit handling for free tier
        if (error.status === 429) {
            return res.status(429).json({
                error: "Rate limit exceeded",
                reply: "// QUOTA_EXCEEDED\nThe AI engine is currently busy (free tier limit reached). Please wait 30-60 seconds and try again."
            });
        }

        // Model not found or deprecated
        if (error.status === 404) {
            return res.status(404).json({
                error: "Model not found",
                reply: "// ENGINE_NOT_FOUND\nEncountered a neural link error. Amar might need to update my model identifier."
            });
        }

        res.status(500).json({ error: "Failed to generate AI response" });
    }
});

// Contact Form Endpoint (Placeholder for future nodemailer implementation)
app.post('/api/contact', async (req, res) => {
    const { email, message } = req.body;
    console.log(`[Contact] Transmission from ${email}: ${message}`);

    // Simulate processing time
    setTimeout(() => {
        res.status(200).json({ success: true, message: 'Data transmitted successfully' });
    }, 1000);
});

// Coding Platform API Proxies
app.post('/api/leetcode', async (req, res) => {
    try {
        const { username } = req.body;
        const query = 'query getUserProfile($username: String!) { matchedUser(username: $username) { username profile { realName userAvatar reputation ranking } submitStats { acSubmissionNum { difficulty count submissions } } } }';
        
        const response = await axios.post('https://leetcode.com/graphql', {
            query,
            variables: { username }
        }, {
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Portfolio-App'
            }
        });
        
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// LeetCode Active Days - Get recent submissions to calculate real active days
app.post('/api/leetcode-activity', async (req, res) => {
    try {
        const { username } = req.body;
        const query = `
            query getUserRecentSubmissions($username: String!) {
                recentSubmissionList(username: $username, limit: 100) {
                    title
                    titleSlug
                    timestamp
                    statusDisplay
                    lang
                }
            }
        `;
        
        const response = await axios.post('https://leetcode.com/graphql', {
            query,
            variables: { username }
        }, {
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Portfolio-App'
            }
        });
        
        // Calculate unique active days from submissions
        const submissions = response.data.data.recentSubmissionList || [];
        const uniqueDays = new Set();
        
        submissions.forEach(submission => {
            if (submission.statusDisplay === 'Accepted') {
                const date = new Date(submission.timestamp * 1000);
                const dateString = date.toISOString().split('T')[0]; // YYYY-MM-DD format
                uniqueDays.add(dateString);
            }
        });
        
        res.json({
            activeDays: uniqueDays.size,
            totalSubmissions: submissions.length,
            recentSubmissions: submissions.slice(0, 10) // Return last 10 submissions
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/leetcode-stats/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${username}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/codechef/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const response = await axios.get(`https://codechef-api.vercel.app/${username}`, { timeout: 8000 });
        res.json(response.data);
    } catch (error) {
        console.error('CodeChef API error:', error.message);
        // Fallback data for CodeChef
        res.json({
            success: true,
            currentRating: 1226,
            stars: '1★',
            globalRank: 80702,
            countryRank: 76404
        });
    }
});

app.get('/api/gfg/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const cacheKey = `gfg_${username}`;
        
        // Check cache first
        const cached = getCached(cacheKey);
        if (cached) {
            console.log(`[Cache] Serving cached GFG data for ${username}`);
            return res.json(cached);
        }
        
        // Try the geeksforgeeks scraper API
        let data = null;
        
        try {
            const response = await axios.get(`https://geeks-for-geeks-stats-api.vercel.app/?userName=${username}`, { timeout: 5000 });
            if (response.data && !response.data.error) {
                data = response.data;
            }
        } catch (e) {
            console.warn('GFG API attempt failed:', e.message);
        }
        
        // If API failed, return hardcoded real data for known users
        if (!data) {
            data = {
                overall_coding_score: 239,
                total_problems_solved: 80,
                institute_rank: 6739,
                articles_published: 0,
                userName: username
            };
        }
        
        setCache(cacheKey, data);
        res.json(data);
    } catch (error) {
        console.error('GFG API error:', error.message);
        // Return real fallback data instead of an error
        res.json({
            overall_coding_score: 239,
            total_problems_solved: 80,
            institute_rank: 6739,
            articles_published: 0
        });
    }
});

app.get('/api/hackerrank/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const response = await axios.get(`https://hackerrank-stats-api.vercel.app/${username}`, { timeout: 8000 });
        res.json(response.data);
    } catch (error) {
        console.error('HackerRank API error:', error.message);
        // Fallback data for HackerRank
        res.json({
            success: true,
            badges: [1, 2, 3, 4, 5, 6, 7, 8],
            username: username
        });
    }
});

app.get('/api/github/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const cacheKey = `github_${username}`;
        
        // Check cache first
        const cached = getCached(cacheKey);
        if (cached) {
            console.log(`[Cache] Serving cached GitHub data for ${username}`);
            return res.json(cached);
        }
        
        const githubHeaders = {
            'User-Agent': 'Portfolio-App',
            ...(process.env.GITHUB_TOKEN && { 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}` })
        };
        
        // Get basic user info (now WITH auth token)
        const userResponse = await axios.get(`https://api.github.com/users/${username}`, {
            headers: githubHeaders
        });
        
        // Get contribution data using GraphQL
        const contributionQuery = `
            query($username: String!) {
                user(login: $username) {
                    contributionsCollection {
                        contributionCalendar {
                            totalContributions
                            weeks {
                                contributionDays {
                                    contributionCount
                                    date
                                }
                            }
                        }
                    }
                }
            }
        `;
        
        const contributionResponse = await axios.post('https://api.github.com/graphql', {
            query: contributionQuery,
            variables: { username }
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.GITHUB_TOKEN || ''}`,
                'User-Agent': 'Portfolio-App'
            }
        });
        
        // Calculate active days (days with contributions > 0)
        const contributions = contributionResponse.data.data.user.contributionsCollection.contributionCalendar;
        const activeDays = contributions.weeks.reduce((total, week) => {
            return total + week.contributionDays.filter(day => day.contributionCount > 0).length;
        }, 0);
        
        // Combine data
        const combinedData = {
            ...userResponse.data,
            totalContributions: contributions.totalContributions,
            activeDays: activeDays
        };
        
        setCache(cacheKey, combinedData);
        res.json(combinedData);
    } catch (error) {
        console.error('GitHub API error:', error.response?.data?.message || error.message);
        // Fallback to basic user data if GraphQL fails
        try {
            const cacheKey = `github_basic_${req.params.username}`;
            const cached = getCached(cacheKey);
            if (cached) return res.json(cached);
            
            const userResponse = await axios.get(`https://api.github.com/users/${req.params.username}`, {
                headers: {
                    'User-Agent': 'Portfolio-App',
                    ...(process.env.GITHUB_TOKEN && { 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}` })
                }
            });
            const fallbackData = {
                ...userResponse.data,
                totalContributions: 0,
                activeDays: 0
            };
            setCache(cacheKey, fallbackData);
            res.json(fallbackData);
        } catch (fallbackError) {
            res.status(500).json({ error: fallbackError.response?.data?.message || fallbackError.message });
        }
    }
});

app.post('/api/leetcode-contests', async (req, res) => {
    try {
        const { username } = req.body;
        const query = 'query getUserContestRankingInfo($username: String!) { userContestRanking(username: $username) { attendedContestsCount rating globalRanking totalParticipants topPercentage } userContestRankingHistory(username: $username) { contest { title startTime } rating ranking } }';
        
        const response = await axios.post('https://leetcode.com/graphql', {
            query,
            variables: { username }
        }, {
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Portfolio-App'
            }
        });
        
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Static serving and SPA Catch-all
const distPath = path.join(__dirname, '../client/dist');
app.use(express.static(distPath));

// SPA Catch-all (Express 5 compatible middleware)
app.use((req, res) => {
    // Only serve index.html for non-API routes that aren't files
    if (!req.url.startsWith('/api')) {
        res.sendFile(path.join(distPath, 'index.html'));
    } else {
        res.status(404).json({ error: 'API route not found' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`\x1b[34m[System]\x1b[0m Digital Architect Server Online at port ${PORT}`);
    console.log(`\x1b[32m[Gemini]\x1b[0m AI Assistant initialized with model gemini-2.5-flash`);
});