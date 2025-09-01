/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            primary1: "#202020",
            primary2: "#2C2C2C",
            primary3: "#363636",
            primary4: "#383838",
            primary5: "#515151",
            secondary1: "#9F9F9F",

            // Keep Tailwind defaults available
            white: "#ffffff",
            black: "#000000",
            transparent: "transparent",
            current: "currentColor",
        },
    },
    plugins: [],
}
