/*
 * @Author: zrDeng
 * @Date: 2023-08-27 10:13:39
 * @LastEditTime: 2023-08-27 17:31:02
 * @LastEditors: zrDeng
 * @Description: 
 * @FilePath: \threads\app\(auth)\layout.tsx
 */
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads Application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-slate-600 flex items-center justify-center h-full`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
