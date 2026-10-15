import { getProfile } from "@/lib/portfolio";

export default async function Footer() {
  const profile = await getProfile();

  return (
    <footer className="border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="text-sm text-gray-600">&copy; 2026 {profile.name}</p>
        </div>

        <div className="flex gap-6 text-sm text-gray-600">
          {profile?.socials?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition"
            >
              {link.label}
            </a>
          ))}

          <a
            href={`mailto:${profile.email}`}
            className="hover:text-gray-900 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
