import { createConfig } from "@tailwindcss/v4-config";

export default createConfig({
  content: [
    "./apps/**/*.{js,ts,jsx,tsx}",
    "./packages/**/*.{js,ts,jsx,tsx}",
    "./apps/mobile/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
});
