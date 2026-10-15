import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProfile } from "@/lib/portfolio";

export async function generateMetadata(): Promise<Metadata> {
  const profile = await getProfile();

  return {
    title: `${profile.name} | ${profile.role} Portfolio`,
    description:
      "Portfolio of Jumah Abdulmojeed, a data scientist with a chemical engineering background focused on analytics, machine learning, dashboards, and practical business insights.",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10 min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
