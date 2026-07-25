import SectionHeading from "@/components/Common/SectionHeading";
import { GraduationCap } from "lucide-react";

interface EducationItem {
  period: string;
  institution: string;
  degree: string;
  description: string;
}

const educationItems: EducationItem[] = [
  {
    period: "2023 — 2027",
    institution: "SCTR’s Pune Institute of Computer Technology",
    degree: "B.E. Information Technology",
    description:
      "Current CGPA: 9.375",
  },
  {
    period: "2021 — 2023",
    institution: "Babasaheb Utangale Jr. College",
    degree: "XII (12th Grade)",
    description:
      "Percentage: 77.8%",
  },
];

function EducationItemComponent({ item }: { item: EducationItem }) {
  return (
    <div className="relative flex gap-8 pb-12 last:pb-0">
      {/* Left timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#222222]" />

      {/* Timeline dot */}
      <div className="relative">
        <div className="absolute -left-[6px] top-1 w-3 h-3 rounded-sm bg-[#111111] border border-[#FF5C00]/60 flex items-center justify-center">
          {/* Optional: Add a tiny dot or leave empty like experience */}
        </div>
      </div>

      {/* Content */}
      <div className="pl-5 min-w-0">
        <p className="font-mono text-[11px] text-[#525252] tracking-widest uppercase mb-2">
          {item.period}
        </p>
        <h3 className="font-outfit font-semibold text-xl text-[#FF5C00] mb-1">
          {item.institution}
        </h3>
        <p className="font-outfit text-base text-[#E5E5E5] mb-2">
          {item.degree}
        </p>
        <p className="font-outfit text-sm text-[#A3A3A3] leading-relaxed max-w-[600px]">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24">
      <SectionHeading number="06" title="Education" />

      <div className="mt-8 ml-4">
        {educationItems.map((item) => (
          <EducationItemComponent key={item.institution} item={item} />
        ))}
      </div>
    </section>
  );
}
