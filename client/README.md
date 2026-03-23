# Portfolio Client

A modern React portfolio website with real-time coding statistics dashboard.

## Features

- **Real-time Coding Dashboard**: Displays live statistics from LeetCode, GitHub, CodeChef, GeeksForGeeks, and HackerRank
- **Responsive Design**: Built with Tailwind CSS for mobile-first design
- **Interactive Components**: Animated charts and statistics with Framer Motion
- **Auto-refresh**: Data updates every 5 minutes with manual refresh option

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure your coding platform usernames by creating a `.env` file:
   ```bash
   cp .env.example .env
   ```

   Edit the `.env` file with your usernames:
   ```
   VITE_LEETCODE_USERNAME=your_leetcode_username
   VITE_GITHUB_USERNAME=your_github_username
   VITE_CODECHEF_USERNAME=your_codechef_username
   VITE_GFG_USERNAME=your_gfg_username
   VITE_HACKERRANK_USERNAME=your_hackerrank_username
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## API Sources

The dashboard fetches data from the following APIs:

- **LeetCode**: Official GraphQL API with fallback to leetcode-stats-api
- **GitHub**: GitHub REST API v3
- **CodeChef**: CodeChef API via Vercel
- **GeeksForGeeks**: GFG Stats API via Vercel
- **HackerRank**: HackerRank Stats API via Vercel

## Environment Variables

All usernames are configured via environment variables prefixed with `VITE_` to be accessible in the browser.

## Development

- Uses Vite for fast development and building
- ESLint for code quality
- Tailwind CSS for styling
- Framer Motion for animations

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.