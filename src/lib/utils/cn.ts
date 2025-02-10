import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Must be kept in sync with tailwind.config.ts, it shouldn't
// be imported directly
const customTwMerge = extendTailwindMerge({
  override: {
    theme: {
      colors: [
        // Primary colors
        "primary",
        "primary-light",
        "primary-lighter",

        // Brand colors
        "brand-red",
        "brand-blue",
        "brand-yellow",

        // Accent colors
        "accent-orange",
        "accent-orange-light",
        "accent-red",
        "accent-yellow",
        "accent-yellow-dark",
        "accent-yellow-light",

        // Base colors
        "white",
        "black",

        // Neutral colors
        "neutral-50",
        "neutral-100",
        "neutral-200",
        "neutral-300",
        "neutral-400",
        "neutral-500",
        "neutral-600",
        "neutral-700",
        "neutral-800",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]): string {
  return customTwMerge(clsx(inputs));
}
