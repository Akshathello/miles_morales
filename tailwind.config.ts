import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      // textStroke: {
      //   "serif-stroke": {
      //     "-webkit-text-stroke-width": "2px",
      //     "-webkit-text-fill-color": "transparent",
      //   },
      // },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        ping: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "75%, 75%": { transform: "scale(1.3)", opacity: "0" },
        },
        pingScale: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "90%": { transform: "Scale(1.5)", opacity: "0" },
        },
        pingScale1: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.35)", opacity: "0", x: "500px" },
        },
        pulse1: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeIn2: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        ping: "ping 2s cubic-bezier(.37,-0.93,.85,0) infinite",
        pingScale: "pingScale 3s cubic-bezier(.06,-1.27,.82,-0.96) infinite",
        pingScale1: "pingScale 2s cubic-bezier(.37,-0.93,.85,0) infinite",
        pulse1: "pulse 3s cubic-bezier(.79,.13,.87,.26) infinite",
        fadeIn: " fadeIn 2s ease-in-out forwards ",
        fadeIn2: " fadeIn 2s ease-in-out forwards ",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
