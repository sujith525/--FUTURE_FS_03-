// src/app/layout.js

import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Rebranded Java",
  description: "Modernized Java Brand using Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-bg text-textMain font-sans">
        <header className="text-center py-6 bg-white shadow-md">
          <img
            src="/logo.png"
            alt="Java Logo"
            className="mx-auto w-5 h-5 mb-2" 
             style={{ width: '150px', height: '150px' }}// ← smaller logo
          />
          <h1 className="text-3xl font-bold">Rebranded Java</h1>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
