import { useState, useEffect } from "react";

const navItems = [
  { name: "Top", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "History", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Profile", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems.map((item) => item.href.substring(1));
    const handleScroll = () => {
      // Active = the last section whose top has scrolled past the fold line.
      // Robust across the perforation gaps between sections (no flicker).
      let current = sections[0];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 180) current = section;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b-2 rule-ink bg-paper">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-8">
        {/* Report title / job header */}
        <a href="#home" className="group flex items-baseline gap-2 whitespace-nowrap">
          <span className="text-base font-bold uppercase tracking-tight text-ink">
            Bishal&nbsp;Karki
          </span>
          <span className="hidden text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink-soft sm:inline">
            / rpt.001
          </span>
        </a>

        {/* Flowchart nav — stencil nodes */}
        <div className="hidden items-center md:flex">
          {navItems.map((item, i) => {
            const active = activeSection === item.href.substring(1);
            const isTerminator = i === 0 || i === navItems.length - 1;
            return (
              <div key={item.name} className="flex items-center">
                {i > 0 && (
                  <span aria-hidden="true" className="px-1 text-ink-soft/70">
                    &rsaquo;
                  </span>
                )}
                <a
                  href={item.href}
                  aria-current={active ? "true" : undefined}
                  className={`border px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.1em] transition-colors ${
                    isTerminator ? "stencil-terminator px-3" : ""
                  } ${
                    active
                      ? "border-ledger-red bg-ledger-red text-paper"
                      : "border-ink/45 text-ink/80 hover:border-ink hover:bg-ink hover:text-paper"
                  }`}
                >
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>

        {/* Mobile: process-box menu button */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="border border-ink px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-paper md:hidden"
        >
          {isOpen ? "Close △" : "Menu ▽"}
        </button>
      </div>

      {/* Mobile stacked stencil list */}
      {isOpen && (
        <div className="border-t rule-soft bg-paper md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {navItems.map((item) => {
              const active = activeSection === item.href.substring(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 border-b rule-soft py-3 text-sm font-bold uppercase tracking-[0.1em] ${
                      active ? "text-ledger-red" : "text-ink/80"
                    }`}
                  >
                    <span aria-hidden="true" className="text-ink-soft/70">
                      {active ? "▸" : "◦"}
                    </span>
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
