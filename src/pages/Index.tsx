/*
 * DIRECTION CONTRACT — "The Line-Printer Report" (Persuade)
 *
 * THESIS: A backend engineer's credibility, printed — not displayed. This surface
 *   is a continuous-feed mainframe report, and it refuses the dark-neon dev-portfolio
 *   rut (terminal hero, gradient name, glass cards) the incumbent build embodied.
 * OWN-WORLD: Impact ink (#1E1C16), ledger-red (#A83A2B), one blueprint-blue on warm
 *   green-bar paper (#F3EFE3 / #C7D4B2). Courier Prime only. Zero radius, zero shadow,
 *   zero gradient. Sprocket-hole margins down both edges, perforated fold-lines,
 *   green-bar listings, flowchart-stencil nav. Recognizable with all content stripped.
 * STORY: Visitor reads a physical document produced by the kind of system Bishal builds,
 *   understands he's a serious backend/AI engineer, and can reach him or grab the résumé.
 * FIRST VIEWPORT: Batch-job header, then his NAME set as a line-printer banner page
 *   between rows of struck asterisks; role + real tagline; primary action "View the Work".
 * FORM: Grounded direction #7 (mid-century computing print), assigned by concept-seed
 *   (key fd72be4d). Continuous-scroll staging; the fanfold IS the fold metaphor.
 */
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import { Perf, SprocketRails } from "@/components/report";

const Index = () => {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navigation />
      <div className="relative">
        <SprocketRails />
        <main className="mx-auto max-w-[1180px] md:px-7">
          <Hero />
          <Skills />
          <Perf page={2} />
          <Experience />
          <Perf page={3} />
          <Projects />
          <Perf page={4} />
          <About />
          <Perf page={5} />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Index;
