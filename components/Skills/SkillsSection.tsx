import SectionHeading from "@/components/Common/SectionHeading";
import { Code2, Layers, Database, Bot, Wrench } from "lucide-react";

interface SkillCategory {
  icon: React.ReactNode;
  label: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    icon: <Code2 size={16} />,
    label: "Languages",
    skills: ["C++", "SQL", "Java"],
  },
  {
    icon: <Layers size={16} />,
    label: "Core",
    skills: ["OOP", "DSA", "DBMS", "OS", "CNS"],
  },
  {
    icon: <Database size={16} />,
    label: "Databases",
    skills: ["PostgreSQL", "Redis"],
  },
  {
    icon: <Bot size={16} />,
    label: "AI",
    skills: ["LLM", "RAG pipelines", "MCP", "Prompt Engineering"],
  },
  {
    icon: <Wrench size={16} />,
    label: "Tools",
    skills: ["Docker", "GitHub", "Antigravity"],
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center font-mono text-[11px] text-[#A3A3A3] bg-[#1a1a1a] border border-[#2a2a2a] rounded px-3 py-1 hover:text-[#FF5C00] hover:border-[#FF5C00]/30 transition-colors cursor-default">
      {label}
    </span>
  );
}

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="bg-[#111111] border border-[#222222] rounded-xl p-5 hover:border-[#333333] transition-all duration-200">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[#FF5C00]">{category.icon}</span>
        <span className="font-outfit font-medium text-sm text-[#E5E5E5]">{category.label}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Tag key={skill} label={skill} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  // Layout: 2 cards in first row (left), 3 cards in second row
  // But Figma shows: top row 2 full-width cards (Systems, Data), second row 3 (Cloud, AI, App)
  const topRow = categories.slice(0, 2);
  const bottomRow = categories.slice(2);

  return (
    <section id="skills">
      <SectionHeading number="05" title="Stack" />

      <div className="mt-8 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {topRow.map((cat) => (
            <SkillCard key={cat.label} category={cat} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {bottomRow.map((cat) => (
            <SkillCard key={cat.label} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
