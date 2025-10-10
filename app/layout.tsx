import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LazySaturday — Make small. Ship fast. Live slow.",
  description: "자동화로 주말을 되찾는 개발자. 작게 만들어, 꾸준히 배포하며, 천천히 사는 삶. 완벽함보다 반복을, 속도보다 지속을 선택하는 개발자의 생존법.",
  keywords: ["개발자", "자동화", "생산성", "시스템", "루틴", "브랜딩", "BuildOnce", "EarnForever"],
  authors: [{ name: "LazySaturday" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "LazySaturday — Make small. Ship fast. Live slow.",
    description: "자동화로 주말을 되찾는 개발자. 완벽함보다 반복을, 속도보다 지속을 선택하는 개발자의 생존법.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
