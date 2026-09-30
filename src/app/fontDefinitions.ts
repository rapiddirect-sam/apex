import localFont from "next/font/local";

export const inter = localFont({
  src: [
    { path: "./fonts/Inter-Variable.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/Inter-VariableItalic.woff2", weight: "100 900", style: "italic" },
  ],
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: "Arial",
  variable: "--font-inter",
});

export const playfair = localFont({
  src: [
    { path: "./fonts/PlayfairDisplay-Variable.woff2", weight: "400 900", style: "normal" },
    { path: "./fonts/PlayfairDisplay-VariableItalic.woff2", weight: "400 900", style: "italic" },
  ],
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: "Times New Roman",
  preload: false,
  variable: "--font-playfair",
});
