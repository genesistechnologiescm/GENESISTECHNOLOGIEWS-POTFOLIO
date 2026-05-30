import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flint — The Origin and direction of Your Digital Evolution.",
  description:
    "Custom software development, data science & analytics, AI automation, and technology consultancy. Flint builds systems that run your business at full intelligence.",
  keywords: [
    "custom software development",
    "data science",
    "AI automation",
    "technology consultancy",
    "fractional CTO",
    "web applications",
    "business intelligence",
    "workflow automation",
  ],
  authors: [{ name: "Flint" }],
  openGraph: {
    title: "Flint — The Origin and direction of Your Digital Evolution.",
    description:
      "We build systems that run your business better — measurably, reliably, and built to grow with you.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flint",
    description: "The Origin and direction of Your Digital Evolution.",
  },
};

// Inline script to prevent theme flash on load
const themeScript = `
(function() {
  try {
    var saved = localStorage.getItem('flint-theme');
    if (saved === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
