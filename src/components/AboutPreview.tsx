import Link from "next/link";
import type { Profile } from "@/types/content";

type AboutPreviewProps = {
  profileData: Profile;
};

export default function AboutPreview({
  profileData,
}: AboutPreviewProps) {
  return (
    <section className="py-24">
      <div className="bg-white border rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl">
          <p className="text-sm text-gray-500 mb-3">
            About Me
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
            {profileData.aboutHeadline}
          </h2>

          {profileData.aboutSummary.map((paragraph) => (
            <p key={paragraph} className="mt-6 text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}

          <Link
            href="/about"
            className="inline-block mt-8 px-5 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
