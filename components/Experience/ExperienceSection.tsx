import SectionHeading from "@/components/Common/SectionHeading";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  mode?: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    period: "Jan 2026 — Mar 2026",
    title: "Software Engineering Intern",
    company: "Ajinkya Infotech",
    companyUrl: "#",
    mode: "Hybrid",
    description:
      "Developed a multilingual AI chatbot, performed end-to-end API testing, and resolved critical backend integration issues.",
  },
];

function ExperienceItem({ item }: { item: ExperienceItem }) {
  return (
    <div className="relative flex gap-8 pb-12 last:pb-0">
      {/* Left timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#222222]" />

      {/* Timeline dot */}
      <div className="relative">
        <div className="absolute -left-[6px] top-1 w-3 h-3 rounded-sm bg-[#111111] border border-[#FF5C00]/60" />
      </div>

      {/* Content */}
      <div className="pl-5 min-w-0">
        <p className="font-mono text-[11px] text-[#525252] tracking-widest uppercase mb-2">
          {item.period}
        </p>
        <h3 className="font-outfit font-semibold text-xl text-[#E5E5E5] mb-1">
          {item.title}{" "}
          <a
            href={item.companyUrl}
            className="text-[#FF5C00] hover:text-[#FF7A2E] transition-colors"
          >
            @ {item.company}
          </a>
        </h3>
        
        {item.mode && (
          <div className="mb-2">
            <span className="font-mono text-[11px] text-[#525252] tracking-wider uppercase">
              {"//"} {item.mode}
            </span>
          </div>
        )}

        <p className="font-outfit text-sm text-[#A3A3A3] leading-relaxed max-w-[600px]">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHeading number="03" title="Experience" />

      <div className="mt-8 ml-4">
        {experiences.map((item) => (
          <ExperienceItem key={item.company} item={item} />
        ))}
      </div>
    </section>
  );
}
