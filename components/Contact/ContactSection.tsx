import SectionHeading from "@/components/Common/SectionHeading";
import { ExternalLink } from "lucide-react";
import ShakingHand from "./ShakingHand";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24">
      <SectionHeading number="07" title="Contact" />

      <div className="mt-12">
        {/* Full-width seamless CTA block */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="max-w-2xl flex-1">
            <h3 className="font-outfit font-semibold text-2xl sm:text-3xl text-[#E5E5E5] mb-6 leading-tight flex items-center">
              Let&apos;s connect <ShakingHand />
            </h3>
            <p className="font-outfit text-base text-[#A3A3A3] leading-relaxed">
              I am currently open to new opportunities and full-time software engineering roles. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pawarmanas8@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-outfit text-[#FF5C00] hover:text-[#FF7A2E] transition-colors group whitespace-nowrap"
          >
            <span>pawarmanas8@gmail.com</span>
            <ExternalLink
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
