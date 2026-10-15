import Link from "next/link";
import Image from "next/image";
import type { Profile } from "@/types/content";

type HeroProps = {
  profileData: Profile;
};

export default function Hero({ profileData }: HeroProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
        <div className="max-w-2xl flex-1">
          <p className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-6">
            {profileData.heroLabel}
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            {profileData.heroTitle}
            <span className="block text-gray-500">
              {profileData.heroHighlight}
            </span>
          </h1>

          <p className="mt-8 text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
            {profileData.heroDescription}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition text-center font-medium"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-500 transition text-center font-medium"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] shrink-0">
          <picture>
            <source srcSet="/profile.webp" type="image/webp" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt={profileData.name}
              width={1200}
              height={1500}
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto rounded-2xl shadow-xl border border-gray-200"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
