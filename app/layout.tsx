import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import "../global.css";

export const metadata: Metadata = {
  title: {
    default: "Mohammed Bahumaish",
    template: "%s | Mohammed Bahumaish",
  },
  description:
    "Mohammed Bahumaish, a front-end developer with knowledge of backend and DevOps technologies.",
  openGraph: {
    title: "Mohammed Bahumaish",
    description:
      "Mohammed Bahumaish, a front-end developer with knowledge of backend and DevOps technologies.",
    url: "",
    siteName: "Mohammed Bahumaish",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "prisma_editor",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body className={`bg-black`}>{children}</body>
    </html>
  );
}
