type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow ? (
        <p className="text-sm text-gray-500 mb-2">{eyebrow}</p>
      ) : null}

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
        {title}
      </h2>

      {description ? (
        <p className="text-gray-600 mt-3 leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
