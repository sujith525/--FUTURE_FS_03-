"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <header className="flex items-center justify-between p-4 bg-primary text-white">
        <Image src="/java-logo-small.png" alt="Java Logo" width={40} height={40} />
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-accent">Home</a></li>
            <li><a href="#" className="hover:text-accent">About</a></li>
            <li><a href="#" className="hover:text-accent">Downloads</a></li>
            <li><a href="#" className="hover:text-accent">Community</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="text-center py-20 bg-bg">
          <h1 className="text-5xl font-bold text-primary mb-4">Welcome to Rebranded Java</h1>
          <p className="text-xl mb-6 text-textMuted">
            Reimagining Java for the future. A fresh brand, a modern website, and a powerful developer experience.
          </p>
          <div>
            <button className="bg-primary text-white px-6 py-3 rounded mr-4 hover:bg-accent transition">
              Get Started
            </button>
            <button className="border border-primary px-6 py-3 rounded hover:bg-primary hover:text-white transition">
              Learn More
            </button>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-3">Modern UI</h2>
            <p>Clean, sleek, and responsive design powered by Next.js and Tailwind CSS.</p>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-3">AI Generated Branding</h2>
            <p>Logos and colors crafted using AI tools for a fresh new look.</p>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-3">Developer Friendly</h2>
            <p>Optimized for performance, SEO, and mobile devices for the best experience.</p>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white text-center py-6">
        <p>&copy; 2025 Rebranded Java. All rights reserved.</p>
      </footer>
    </>
  );
}
