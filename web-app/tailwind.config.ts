import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1a1a1a",
          muted: "#4a4a4a",
          subtle: "#737373"
        },
        paper: {
          DEFAULT: "#fafaf7",
          card: "#ffffff"
        },
        accent: {
          DEFAULT: "#a5462b",
          muted: "#c46a52"
        },
        night: {
          DEFAULT: "#0f0f0f",
          card: "#1a1a1a",
          muted: "#262626"
        }
      },
      fontFamily: {
        serif: [
          '"Source Han Serif SC"',
          '"Noto Serif SC"',
          '"Songti SC"',
          '"Times New Roman"',
          "Georgia",
          "serif"
        ],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          "system-ui",
          "sans-serif"
        ],
        mono: [
          '"JetBrains Mono"',
          '"SF Mono"',
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace"
        ]
      },
      typography: ({ theme }: any) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.ink.DEFAULT"),
            "--tw-prose-headings": theme("colors.ink.DEFAULT"),
            "--tw-prose-links": theme("colors.accent.DEFAULT"),
            "--tw-prose-bold": theme("colors.ink.DEFAULT"),
            "--tw-prose-quotes": theme("colors.ink.muted"),
            "--tw-prose-quote-borders": theme("colors.accent.DEFAULT"),
            "--tw-prose-code": theme("colors.ink.DEFAULT"),
            "--tw-prose-th-borders": theme("colors.ink.subtle"),
            "--tw-prose-td-borders": "#e5e5e2",
            maxWidth: "none",
            fontFamily: theme("fontFamily.serif").join(", "),
            "h1, h2, h3, h4": {
              fontFamily: theme("fontFamily.sans").join(", "),
              fontWeight: "600",
              letterSpacing: "-0.01em"
            },
            "h2": {
              borderBottom: "1px solid #e5e5e2",
              paddingBottom: "0.4em"
            },
            "a": {
              textDecoration: "none",
              borderBottom: "1px solid rgba(165, 70, 43, 0.3)",
              transition: "border-color 0.15s",
              "&:hover": {
                borderBottomColor: theme("colors.accent.DEFAULT")
              }
            },
            "code": {
              fontWeight: "500",
              backgroundColor: "#f0eee8",
              padding: "0.15em 0.4em",
              borderRadius: "0.25rem",
              fontSize: "0.88em"
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            "blockquote": {
              fontStyle: "normal",
              borderLeftWidth: "3px",
              paddingLeft: "1.2em"
            },
            "blockquote p:first-of-type::before": { content: '""' },
            "blockquote p:last-of-type::after": { content: '""' },
            "table": {
              fontSize: "0.92em",
              fontFamily: theme("fontFamily.sans").join(", ")
            }
          }
        },
        invert: {
          css: {
            "--tw-prose-body": "#d4d4d4",
            "--tw-prose-headings": "#fafafa",
            "--tw-prose-links": theme("colors.accent.muted"),
            "--tw-prose-bold": "#fafafa",
            "--tw-prose-quotes": "#a3a3a3",
            "--tw-prose-quote-borders": theme("colors.accent.muted"),
            "--tw-prose-code": "#fafafa",
            "--tw-prose-th-borders": "#525252",
            "--tw-prose-td-borders": "#262626",
            "h2": {
              borderBottomColor: "#262626"
            },
            "code": {
              backgroundColor: "#262626"
            },
            "a": {
              borderBottomColor: "rgba(196, 106, 82, 0.35)",
              "&:hover": {
                borderBottomColor: theme("colors.accent.muted")
              }
            }
          }
        }
      })
    }
  },
  plugins: [typography]
};

export default config;
