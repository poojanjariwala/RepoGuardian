import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Autonomous Code Architect",
  description: "AI-powered multi-agent code analysis and auto-fix for GitHub repositories",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-navy-950 text-slate-100 antialiased font-sans">
        <div className="grid-bg" />
        <div className="glow-radial" />
        {children}
      </body>
    </html>
  );
}
