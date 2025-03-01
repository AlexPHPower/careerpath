import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        homepagegradient1: "hsl(var(--homepage-gradient-1))",
        homepagegradient2: "hsl(var(--homepage-gradient-2))",
        homepageprimary: "hsl(var(--homepage-primary))",
        homepageprimaryforeground: "hsl(var(--homepage-primary-foreground))",
        homepagebackground: "hsl(var(--homepage-background))",
        homepageforeground: "hsl(var(--homepage-foreground))",
        homepagelightsection: "hsl(var(--homepage-lightsection))",
        periwinkle: "hsl(var(--homepage-periwinkle))",
        periwinkledark: "hsl(var(--homepage-periwinkle-dark))",
        homepagesecondary: "hsl(var(--homepage-secondary))",
        homepagecardforeground: "hsl(var(--homepage-card-foreground))",
        homepagecard: "hsl(var(--homepage-card))",
        homepagesecondaryforeground:
          "hsl(var(--homepage-secondary-foreground))",
        homepageaccent: "hsl(var(--homepage-accent))",
        homepageaccentforeground: "hsl(var(--homepage-accent-foreground))",
        homepagedestructive: "hsl(var(--homepage-destructive))",
        homepagedestructiveforeground:
          "hsl(var(--homepage-destructive-foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
