/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app/*.{js,ts,jsx,tsx}',
        './components/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'sans': ['sans-serif'],
            }
        }
    },
    plugins: [],
}
