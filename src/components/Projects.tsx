import { ExternalLink, Github } from "lucide-react";
import { useReveal, Line, Label, Chip, SectionHead } from "@/components/report";

const projects = [
  {
    title: "GRC Application in Nest.js",
    description: "A scalable GRC application.",
    technologies: ["Node.js", "Nest.js", "MongoDB", "JWT"],
    github: "https://github.com/bysalkarki/grc",
    live: "#",
  },
  {
    title: "Stock and Inventory Management System",
    description:
      "A comprehensive inventory solution with real-time stock tracking, supplier management, and sales forecasting capabilities.",
    technologies: ["PHP", "Laravel", "MySQL", "Redis", "Vue.js", "TypeScript"],
    github: "https://github.com/bysalkarki/stock-inventory-management",
    live: "#",
  },
  {
    title: "Inventory Management System",
    description:
      "A comprehensive inventory solution with real-time stock tracking, supplier management, and sales forecasting capabilities.",
    technologies: ["PHP", "Node.js", "PostgreSQL", "Docker"],
    github: "#",
    live: "#",
  },
];

const isReal = (url: string) => Boolean(url) && url !== "#";

const Projects = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="projects"
      ref={ref}
      className="scroll-mt-16 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionHead
          code="Sec 03"
          title="Project Records"
          note={`Portfolio · ${projects.length} records`}
          intro="A selection of backend development work showcasing PHP and Node.js expertise. Filed as specification records."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const repo = isReal(project.github);
            const live = isReal(project.live);
            return (
              <Line
                key={project.title}
                line={3 + i}
                className="flex h-full flex-col border-2 rule-ink"
              >
                {/* Filing header band */}
                <div className="flex items-center justify-between border-b-2 rule-ink bg-greenbar/60 px-4 py-2">
                  <Label className="text-ledger-red">
                    PRJ-{String(i + 1).padStart(2, "0")}
                  </Label>
                  <Label className="text-ink-soft">
                    {repo ? "Source available" : "Private build"}
                  </Label>
                </div>

                {/* Record body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-bold uppercase leading-tight tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink/85">
                    {project.description}
                  </p>

                  {/* Spec: stack */}
                  <div className="mt-5 border-t rule-soft pt-4">
                    <Label className="mb-2 block text-ink-soft">Stack</Label>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <Chip key={tech} className="bg-paper/60">
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex items-center gap-3 border-t rule-soft pt-4">
                    {repo ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-ink px-3 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-paper"
                      >
                        <Github size={14} /> Source
                      </a>
                    ) : (
                      <span className="text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-ink-soft/70">
                        Repository — private
                      </span>
                    )}
                    {live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-ink px-3 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-paper"
                      >
                        <ExternalLink size={14} /> Live
                      </a>
                    )}
                  </div>
                </div>
              </Line>
            );
          })}
        </div>

        {/* Full index → GitHub profile */}
        <Line line={7} className="mt-12 border-t-2 rule-ink pt-8 text-center">
          <a
            href="https://github.com/bysalkarki"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border-2 border-ink bg-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-blueprint-blue hover:border-blueprint-blue"
          >
            <Github size={16} /> Full source index on GitHub
          </a>
        </Line>
      </div>
    </section>
  );
};

export default Projects;
