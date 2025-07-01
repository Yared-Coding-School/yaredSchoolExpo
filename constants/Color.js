/**
 * Centralized color tokens for light and dark themes.
 * Usage: import { Colors } from './colors';
 *        const bg = Colors.light.background.DEFAULT;
 */
export const Colors = {
    // Light theme now uses the previous dark palette
    light: {
        primary: {
            light: "#1E40AF", // blue-800
            DEFAULT: "#1E3A8A", // blue-900
            dark: "#172554", // blue-950
        },
        secondary: {
            light: "#0F766E", // teal-700
            DEFAULT: "#0D4F4B", // teal-900
            dark: "#0B3F3D", // teal-950
        },
        accent: {
            light: "#D97706", // yellow-600
            DEFAULT: "#92400E", // yellow-800
            dark: "#78350A", // yellow-900
        },
        background: {
            light: "#111827", // gray-900
            DEFAULT: "#0F172A", // gray-950
            dark: "#0A0F1A", // gray-975
        },
        surface: {
            light: "#374151", // gray-700
            DEFAULT: "#1F2937", // gray-800
            dark: "#0B111E", // gray-900
        },
        text: {
            light: "#D1D5DB", // gray-300
            DEFAULT: "#F3F4F6", // gray-100
            dark: "#FFFFFF", // white
        },
    },

    // Dark theme with even deeper, richer tones
    dark: {
        primary: {
            light: "#12263F", // deeper blue-950
            DEFAULT: "#0E1B33", // custom navy
            dark: "#0A1126", // nearly black blue
        },
        secondary: {
            light: "#0A3F3D", // deep teal
            DEFAULT: "#072F2D", // darker teal
            dark: "#041E1C", // almost black teal
        },
        accent: {
            light: "#92400E", // yellow-800
            DEFAULT: "#78350A", // yellow-900
            dark: "#5F2808", // darker amber
        },
        background: {
            light: "#0A0F1A", // gray-975
            DEFAULT: "#04060C", // near black
            dark: "#000000", // true black
        },
        surface: {
            light: "#1B2430", // dark slate
            DEFAULT: "#0F1723", // richer dark gray
            dark: "#05090F", // nearly black surface
        },
        text: {
            light: "#B0B7C3", // light gray text
            DEFAULT: "#DCE1E8", // off-white
            dark: "#FFFFFF", // white
        },
    },
};
