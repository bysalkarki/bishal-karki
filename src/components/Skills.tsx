import { useReveal, Line, Label, Chip, SectionHead } from "@/components/report";

const skillCategories = [
  {
    title: "Backend Development",
    skills: ["PHP", "Node.js", "Express", "Laravel", "RESTful APIs"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Database Design"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["OpenAI API", "LangChain", "RAG Systems", "Prompt Engineering", "AI Agents"],
  },
  {
    title: "AI Integration",
    skills: ["Chatbots", "Text Generation", "Embeddings", "Vector Databases", "LLM Fine-tuning"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "Git", "CI/CD", "Linux", "AWS"],
  },
  {
    title: "Security & Performance",
    skills: ["Authentication", "Authorization", "Optimization", "Security Best Practices"],
  },
];

const Skills = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="skills"
      ref={ref}
      aria-labelledby="skills-heading"
      className="scroll-mt-16 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionHead
          code="Sec 01"
          title={<span id="skills-heading">Capability Matrix</span>}
          note="Skills · 6 groups"
          intro="High-performance backend architecture, AI integration, and the industry-standard tooling around scalable web systems. Listed as a capability inventory."
        />

        {/* Column caption */}
        <Line line={3} className="mb-1 hidden grid-cols-[3rem_minmax(0,14rem)_1fr] gap-4 border-b rule-ink pb-2 md:grid">
          <Label className="text-ink-soft">Ln</Label>
          <Label className="text-ink-soft">Group</Label>
          <Label className="text-ink-soft">Registered capabilities</Label>
        </Line>

        {/* Capability listing — green-bar rows */}
        <ul>
          {skillCategories.map((cat, i) => (
            <Line
              key={cat.title}
              as="li"
              line={4 + i}
              className="greenbar-row grid grid-cols-1 gap-x-4 gap-y-2 border-b rule-soft px-2 py-4 md:grid-cols-[3rem_minmax(0,14rem)_1fr] md:items-baseline"
            >
              <Label className="text-ledger-red md:pt-1">
                {String((i + 1) * 10).padStart(3, "0")}
              </Label>
              <h3 className="text-lg font-bold uppercase tracking-tight text-ink">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <Chip key={skill} className="bg-paper/60 hover:border-blueprint-blue">
                    {skill}
                  </Chip>
                ))}
              </div>
            </Line>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
