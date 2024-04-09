import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fake blog",
  description:
    "Simulates a simple fake blog interface that fetches posts from the JSONPlaceholder API and allows users to add new posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-auto flex max-w-4xl flex-col items-center gap-4 py-10 px-5">
        {children}
      </body>
    </html>
  );
}
