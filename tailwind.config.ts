import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1f4a83",
          blue: "#214f8f",
          line: "#09b83e",
          pale: "#dbeaff"
        }
      },
      fontFamily: {
        sans: [
          "Noto Sans JP",
          "Hiragino Kaku Gothic ProN",
          "Yu Gothic",
          "Meiryo",
          "sans-serif"
        ]
      },
      boxShadow: {
        card: "0 6px 20px rgba(29, 61, 103, 0.14)"
      }
    }
  },
  plugins: []
} satisfies Config;
