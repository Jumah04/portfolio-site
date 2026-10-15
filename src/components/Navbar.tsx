import Link from "next/link";
import { getProfile } from "@/lib/portfolio";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default async function Navbar() {
  const profile = await getProfile();

  return (
    <header className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold tracking-tight text-gray-900 text-sm md:text-base"
        >
          {profile.name}
        </Link>

        <nav className="flex items-center gap-3 md:gap-6 text-xs md:text-sm text-gray-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-gray-900 transition"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/projects"
            className="hidden md:inline-block ml-2 px-4 py-2 rounded-md bg-gray-900 text-white text-xs hover:bg-gray-800 transition"
          >
            View Work
          </Link>
        </nav>
      </div>
    </header>
  );
}
