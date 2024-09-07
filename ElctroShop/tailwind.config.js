/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/theme";

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}", // Your source files
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Next UI components
];
export const theme = {
  extend: {},
};
export const darkMode = "class";
export const plugins = [nextui()];
