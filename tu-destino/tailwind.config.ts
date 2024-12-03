import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");
const { addDynamicIconSelectors } = require('@iconify/tailwind')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        TD: '#ff414d',
        secondary: '#2ecc71',
        backgroundYellow: '#fffdf1',
        text: '#333333',
      },
      fontSize:{
        'clamptext':'clamp(1.8rem, 2vw, 2.4rem)',
        'clamptitle': 'clamp(4rem, 5vw, 8rem)'
      }

    },
  },
  darkMode: "class",
  plugins: [nextui(),addDynamicIconSelectors()],
};
export default config;
