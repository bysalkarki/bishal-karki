import { experiences } from "@/data/experiences";
import { useReveal, Line, Label, Chip, SectionHead } from "@/components/report";

const Experience = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-16 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionHead
          code="Sec 02"
          title="Run Log"
          note={`Employment history · ${experiences.length} entries`}
          intro="Building high-performance backend systems across booking engines, compliance automation, and full-stack product work — most recent first."
        />

        <ol>
          {experiences.map((exp, i) => (
            <Line
              key={exp.id}
              as="li"
              line={3 + i}
              className="grid grid-cols-1 gap-x-8 border-t-2 rule-ink py-8 md:grid-cols-[13rem_1fr] md:py-10"
            >
              {/* Left spine: entry stamp + duration */}
              <div className="mb-4 md:mb-0">
                <Label className="text-ledger-red">
                  Entry {String(experiences.length - i).padStart(2, "0")}
                </Label>
                <div className="mt-2 flex items-center gap-2 text-ink-soft">
                  <span aria-hidden="true">▸</span>
                  <span className="text-sm font-bold uppercase tracking-[0.08em]">
                    {exp.duration}
                  </span>
                </div>
              </div>

              {/* Record body */}
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-ink md:text-3xl">
                  {exp.title}
                </h3>
                <div className="mt-1 text-lg font-bold text-ledger-red">
                  {exp.company}
                </div>

                <p className="mt-4 max-w-[68ch] leading-relaxed text-ink/85">
                  {exp.description}
                </p>

                {exp.highlights?.length ? (
                  <ul className="mt-5 space-y-2">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="flex gap-3 text-base leading-relaxed text-ink/90">
                        <span aria-hidden="true" className="select-none pt-0.5 font-bold text-ink-soft">
                          &gt;&gt;
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-1.5 border-t rule-soft pt-4">
                  {exp.technologies.map((tech) => (
                    <Chip key={tech}>{tech}</Chip>
                  ))}
                </div>
              </div>
            </Line>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
