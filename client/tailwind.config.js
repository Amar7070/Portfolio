/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
                heading: ['"Poppins"', 'sans-serif'],
            },
            colors: {
                primary: '#00d0ff', // Neon Cyan
                secondary: '#bd34fe', // Neon Purple
                dark: '#0a192f', // Dark Navy
                surface: '#112240', // Light Navy
                textPrimary: '#ccd6f6',
                textSecondary: '#8892b0'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(to right bottom, #0a192f, #112240, #0a192f)',
            },
            animation: {
                'marquee': 'marquee 25s linear infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
