interface SectionHeadingProps {
  number: string;
  title: string;
  badge?: string;
}

export default function SectionHeading({ number, title, badge }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="font-mono text-sm text-[#FF5C00] whitespace-nowrap">
        {number}. <span className="text-[#E5E5E5] font-outfit font-medium text-sm tracking-wide">{title}</span>
      </h2>
      <div className="flex-1 h-px bg-[#222222]" />
      {badge && (
        <span className="font-mono text-[10px] text-[#525252] tracking-[0.12em] uppercase whitespace-nowrap">
          {badge}
        </span>
      )}
    </div>
  );
}
