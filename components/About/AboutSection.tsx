import SectionHeading from "@/components/Common/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about">
      <SectionHeading number="01" title="About Me" />
      <div className="mt-12 w-full">
        <p className="font-outfit text-lg text-[#A3A3A3] leading-[1.75] text-justify">
          I'm an aspiring Software Engineer currently pursuing my Bachelor of Engineering in IT at{" "}
          <span className="text-[#E5E5E5] font-medium">PICT, Pune</span>. I specialize in{" "}
          <span className="text-[#E5E5E5] font-medium">backend development</span>,{" "}
          <span className="text-[#E5E5E5] font-medium">AI integrations</span>, and building high-performance systems. My recent work includes architecting AI-powered repository intelligence platforms and real-time hallucination detection systems.
        </p>
      </div>
    </section>
  );
}
