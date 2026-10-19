interface SectionHeadingProps {
  children: string;
  className?: string;
}

export default function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-text text-2xl tracking-[0.15em] uppercase ${className}`}
    >
      {children}
    </h2>
  );
}
