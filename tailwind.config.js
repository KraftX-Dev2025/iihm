/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#dc2626",
                secondary: "#1f2937",
                "secondary-hover": "#374151",
            },
        },
    },
    plugins: [],
};
