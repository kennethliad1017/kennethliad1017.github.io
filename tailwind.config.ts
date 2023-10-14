import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      blur: {
        xs: "2px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: {
      center: true,
    },
    fontSize: {
      overline: [
        "0.625rem",
        {
          letterSpacing: "0.094rem",
          fontWeight: 400,
        },
      ],
      caption: [
        "0.75rem",
        {
          letterSpacing: "0.025rem",
          fontWeight: 400,
        },
      ],
      button: [
        "0.875rem",
        {
          letterSpacing: "0.078rem",
          fontWeight: 500,
        },
      ],
      body2: [
        "0.875rem",
        {
          letterSpacing: "0.016rem",
          fontWeight: 400,
        },
      ],
      body1: [
        "1rem",
        {
          letterSpacing: "0.031rem",
          fontWeight: 400,
        },
      ],
      subtitle2: [
        "0.875rem",
        {
          letterSpacing: "0.006rem",
          fontWeight: 500,
        },
      ],
      subtitle1: [
        "1rem",
        {
          letterSpacing: "0.009rem",
          fontWeight: 400,
        },
      ],
      h6: [
        "1.188rem",
        {
          letterSpacing: "0.009rem",
          fontWeight: 500,
        },
      ],
      h5: [
        "1.438rem",
        {
          letterSpacing: "0rem",
          fontWeight: 400,
        },
      ],
      h4: [
        "2.063rem",
        {
          letterSpacing: "0.016rem",
          fontWeight: 400,
        },
      ],
      h3: [
        "2.938rem",
        {
          letterSpacing: "0rem",
          fontWeight: 400,
        },
      ],
      h2: [
        "3.625rem",
        {
          letterSpacing: "-0.031rem",
          fontWeight: 300,
        },
      ],
      h1: [
        "5.813rem",
        {
          letterSpacing: "-0.094rem",
          fontWeight: 300,
        },
      ],
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-animate")],
};
export default config;
