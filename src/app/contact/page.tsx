import SectionHeader from "@/components/SectionHeader";
import { getProfile } from "@/lib/portfolio";

export default async function ContactPage() {
  const profile = await getProfile();

  return (
    <section className="py-10 md:py-14">
      <SectionHeader
        eyebrow="Contact"
        title="Let's Connect"
        description="Interested in collaboration, data projects, research, or professional opportunities? Feel free to reach out."
      />

      <div className="bg-white border rounded-xl p-8 max-w-xl">
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <a
              href={`mailto:${profile.email}`}
              className="text-gray-900 font-medium hover:text-gray-600 transition"
            >
              {profile.email}
            </a>
          </div>

          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-gray-900 font-medium">{profile.location}</p>
          </div>

          {profile.socials.map((link) => (
            <div key={link.href}>
              <p className="text-sm text-gray-500">{link.label}</p>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-medium hover:text-gray-600 transition"
              >
                {link.href.replace("https://", "")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
