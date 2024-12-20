import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wingman Dashboard",
  description: "This app is a SPA for the wingman, that showcase the dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <html lang="en">
        <body className="bg-white text-gray-800">{children}</body>
      </html>
    </html>
  );
}
