import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--background)",
        secondary: "#111111",
      },
      boxShadow : {
        '3xl' : '25px 35px 50px -15px rgba(0,0,0,0.3)',
        '4xl' : '10px 10px 10px -5px gray' 
      },
      textShadow : {
        '3xl' : '25px 35px 50px -15px rgba(0,0,0,0.3)',
        '4xl' : '10px 10px 10px -5px white' 
      }
    },
  },
  plugins: [],
};
export default config;
