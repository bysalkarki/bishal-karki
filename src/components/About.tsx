import { useState } from "react";
import { Download } from "lucide-react";
import { useReveal, Line, Label, SectionHead } from "@/components/report";

const principles = [
  "Scale first, optimize later",
  "Security isn't optional",
  "Clean code = happy developers",
  "Test everything (twice)",
];

const spec = [
  { k: "Location", v: "Kathmandu, Nepal" },
  { k: "Active since", v: "2018 · 8 yrs" },
  { k: "Current", v: "SWE @ Cyberarrow" },
  { k: "Focus", v: "PHP · Node.js" },
];

const About = () => {
  const ref = useReveal<HTMLElement>();
  const [photoMissing, setPhotoMissing] = useState(false);

  return (
    <section
      id="about"
      ref={ref}
      className="scroll-mt-16 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionHead
          code="Sec 04"
          title="Operator Profile"
          note="About"
          intro="I build the engines that power apps."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_20rem] lg:gap-14">
          {/* Bio + principles + actions */}
          <div>
            <Line line={3} as="p" className="max-w-[66ch] text-lg leading-relaxed text-ink/90">
              I'm <span className="font-bold text-ink">Bishal Karki</span>, a dedicated Backend
              Developer with a passion for designing and implementing high-performance, scalable
              systems. With deep expertise in <span className="font-bold">PHP (Laravel)</span> and{" "}
              <span className="font-bold">Node.js</span>, I thrive on solving complex architectural
              challenges.
            </Line>
            <Line line={4} as="p" className="mt-5 max-w-[66ch] leading-relaxed text-ink/85">
              I believe backend development isn't just about writing code; it's about creating
              resilient foundations that enable seamless user experiences. My approach blends
              rigorous logic with a focus on{" "}
              <span className="font-bold text-ink">security, performance, and maintainability</span>.
            </Line>

            {/* Operating principles */}
            <Line line={5} className="mt-10">
              <Label className="mb-3 block text-ink-soft">Operating principles</Label>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                {principles.map((p, i) => (
                  <li key={p} className="flex items-baseline gap-3 border-b rule-soft py-2">
                    <Label className="text-ledger-red">{String(i + 1).padStart(2, "0")}</Label>
                    <span className="text-ink/90">{p}</span>
                  </li>
                ))}
              </ul>
            </Line>

            <Line line={6} className="mt-10">
              <a
                href="https://drive.google.com/file/d/1nMh1tW8So7zGco7VP_H0E1ECXumhMFI7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-2 border-ink bg-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-blueprint-blue hover:border-blueprint-blue"
              >
                <Download size={16} /> Get the full résumé
              </a>
            </Line>
          </div>

          {/* Filed ID photo + spec table */}
          <Line line={4} className="lg:pt-2">
            <figure className="border-2 rule-ink">
              <div className="relative">
                {photoMissing ? (
                  <div className="halftone flex h-80 w-full flex-col items-center justify-center bg-greenbar/40 text-center">
                    <span aria-hidden="true" className="text-4xl text-ink/50">▨</span>
                    <span className="mt-3 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink-soft">
                      Operator photo
                    </span>
                    <span className="mt-1 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink-soft/70">
                      Awaiting scan
                    </span>
                  </div>
                ) : (
                  <>
                    <img
                      src="/developer-photo.jpg"
                      alt="Bishal Karki, backend systems engineer"
                      loading="lazy"
                      onError={() => setPhotoMissing(true)}
                      className="h-80 w-full object-cover grayscale contrast-125"
                    />
                    <div className="halftone pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply" aria-hidden="true" />
                  </>
                )}
              </div>
              <figcaption className="flex items-center justify-between border-t-2 rule-ink bg-greenbar/60 px-4 py-2">
                <Label className="text-ink">B. Karki</Label>
                <Label className="text-ink-soft">Fig. 1 · operator</Label>
              </figcaption>
            </figure>

            {/* Spec table — verifiable facts only */}
            <dl className="mt-4 border-2 rule-ink">
              {spec.map((row, i) => (
                <div
                  key={row.k}
                  className={`flex items-baseline justify-between gap-4 px-4 py-2.5 ${
                    i < spec.length - 1 ? "border-b rule-soft" : ""
                  }`}
                >
                  <dt>
                    <Label className="text-ink-soft">{row.k}</Label>
                  </dt>
                  <dd className="text-right text-sm font-bold text-ink">{row.v}</dd>
                </div>
              ))}
            </dl>
          </Line>
        </div>
      </div>
    </section>
  );
};

export default About;
