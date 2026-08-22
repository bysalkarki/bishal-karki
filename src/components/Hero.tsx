import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useReveal, Line, Label } from "@/components/report";

const socialLinks = [
  { href: "https://github.com/bysalkarki", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/bishal-karki-817a8a187/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:bishalkarki201@gmail.com", icon: Mail, label: "Email" },
];

const Hero = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="home"
      ref={ref}
      className="scroll-mt-16 border-b-2 rule-ink pt-24 pb-16 md:pt-32 md:pb-24"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Batch-job header */}
        <Line className="flex flex-wrap items-center gap-x-5 gap-y-1 border-y rule-soft py-2">
          <Label className="text-ink-soft">Job: Portfolio</Label>
          <Label className="text-ink-soft">Run Date: 2026</Label>
          <Label className="text-ink-soft hidden sm:inline">Operator: B. Karki</Label>
          <span className="ml-auto flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-ledger-red" aria-hidden="true" />
            <Label className="text-ledger-red">Open to 2026 projects</Label>
          </span>
        </Line>

        {/* Banner page — the name printed large */}
        <div className="mt-10 md:mt-14">
          <Line line={1} aria-hidden="true" className="mb-3 select-none overflow-hidden whitespace-nowrap text-ink/45">
            {"* ".repeat(40)}
          </Line>
          <Line line={2} as="h1" className="text-[clamp(2.75rem,11vw,7rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em] text-ink">
            Bishal Karki
          </Line>
          <Line line={3} aria-hidden="true" className="mt-3 select-none overflow-hidden whitespace-nowrap text-ink/45">
            {"* ".repeat(40)}
          </Line>

          <Line line={4} className="mt-6">
            <Label className="block text-sm text-ink sm:text-base">
              Backend Systems Engineer
            </Label>
            <Label className="mt-2 block text-ink-soft">
              PHP (Laravel) &middot; Node.js &middot; Kathmandu, NP
            </Label>
          </Line>
        </div>

        {/* Abstract / tagline */}
        <Line line={5} as="p" className="mt-8 max-w-[60ch] text-lg leading-relaxed text-ink/90">
          I architect high-performance backends with{" "}
          <span className="border-b-2 border-ledger-red font-bold">Laravel</span> &amp;{" "}
          <span className="border-b-2 border-ledger-red font-bold">Node.js</span> &mdash; the
          data models, APIs, queues, and caches that keep high-traffic, security-sensitive
          applications correct and fast under load.
        </Line>

        {/* Actions */}
        <Line line={6} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 border-2 border-ink bg-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-blueprint-blue hover:border-blueprint-blue"
          >
            View the Work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://drive.google.com/file/d/1nMh1tW8So7zGco7VP_H0E1ECXumhMFI7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-ink bg-paper px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Get Résumé
          </a>
        </Line>

        {/* Stamped footer row: social + printed barcode ID */}
        <Line line={7} className="mt-14 flex flex-wrap items-end justify-between gap-6 border-t rule-soft pt-5">
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-blueprint-blue"
              >
                <social.icon size={18} strokeWidth={1.75} />
                <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em]">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
          <div className="text-right">
            <div className="barcode h-9 w-40 max-w-[40vw]" aria-hidden="true" />
            <Label className="mt-1 block text-ink-soft">ID &middot; BK-2018-KTM</Label>
          </div>
        </Line>
      </div>
    </section>
  );
};

export default Hero;
