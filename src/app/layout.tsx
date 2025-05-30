import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "🧸Aiary - 에이어리",
  description: "챗봇과의 대화를 통해 당신만의 일기를 만들어 보세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
