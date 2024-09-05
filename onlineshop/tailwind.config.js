import { nextui } from "@nextui-org/react";
import { Container } from "postcss";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    FontFamily: {
      Vazirmatn: ["Vazirmatn", "serif"],
    },
    Container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
};

export const darkMode = "class";
export const plugins = [nextui()];
