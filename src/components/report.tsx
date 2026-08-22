import React, { useEffect, useRef } from "react";

/* ============================================================
   THE LINE-PRINTER REPORT — shared print primitives
   One authored motion (print-on), the fanfold scaffolding,
   and the stamped small parts every segment reuses.
   ============================================================ */

/**
 * useReveal: flips data-print="on" on the container the first time it
 * scrolls into view, letting descendant `.print-on` lines strike in like
 * a platen advancing. No-op under prefers-reduced-motion (CSS handles it).
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.setAttribute("data-print", "on");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.setAttribute("data-print", "on");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/** A single line that strikes in; `line` sets the stagger order. */
export const Line: React.FC<
  React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements; line?: number }
> = ({ as: Tag = "div", line = 0, className = "", style, children, ...rest }) => {
  const Comp = Tag as any;
  return (
    <Comp
      className={`print-on ${className}`}
      style={{ transitionDelay: `${line * 70}ms`, ...style }}
      {...rest}
    >
      {children}
    </Comp>
  );
};

/** Uppercase tracked meta label / column caption / stamp. */
export const Label: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className = "",
  children,
  ...rest
}) => (
  <span
    className={`font-bold uppercase tracking-[0.12em] text-xs ${className}`}
    {...rest}
  >
    {children}
  </span>
);

/** Stamped tech chip — hard box, hairline border, no radius. */
export const Chip: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <span
    className={`inline-block border border-ink/60 px-2 py-0.5 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-ink/80 transition-colors ${className}`}
  >
    {children}
  </span>
);

/**
 * Section report header: segment code + report title, ruled underneath.
 * `code` is the segment id (e.g. "SEC 02"), `note` the right-aligned stamp.
 */
export const SectionHead: React.FC<{
  code: string;
  title: React.ReactNode;
  note?: string;
  intro?: React.ReactNode;
}> = ({ code, title, note, intro }) => (
  <header className="mb-12 md:mb-16">
    <Line className="mb-3 flex items-baseline justify-between border-b-2 rule-ink pb-2">
      <Label className="text-ledger-red">{code}</Label>
      {note ? <Label className="text-ink-soft hidden sm:block">{note}</Label> : null}
    </Line>
    <Line line={1} as="h2" className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-ink">
      {title}
    </Line>
    {intro ? (
      <Line line={2} as="p" className="mt-5 max-w-[64ch] text-ink-soft leading-relaxed">
        {intro}
      </Line>
    ) : null}
  </header>
);

/** Perforated tear-line divider with a centered fold label. */
export const Perf: React.FC<{ page: number; total?: number }> = ({ page, total = 7 }) => (
  <div className="relative mx-auto max-w-6xl px-6" aria-hidden="true">
    <div className="flex items-center gap-4 py-2">
      <hr className="perf flex-1" />
      <span className="whitespace-nowrap text-[0.6875rem] font-bold uppercase tracking-[0.35em] text-ink-soft/80">
        &#9661; fold &#9661; &middot; page {page} of {total}
      </span>
      <hr className="perf flex-1" />
    </div>
  </div>
);

/** Red rubber "APPROVED" audit stamp — ink-blended onto the paper, angled.
 *  Red reserved for marks/stamps (Red-Pen Rule); this is its archetypal use. */
export const ApprovedStamp: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div
    className={`pointer-events-none select-none ${className}`}
    style={{ transform: "rotate(-7deg)" }}
    aria-hidden="true"
  >
    <div
      className="border-2 border-ledger-red p-[3px] text-ledger-red"
      style={{ mixBlendMode: "multiply" }}
    >
      <div className="border border-ledger-red px-3.5 py-1.5 text-center">
        <div className="text-[0.6875rem] font-bold uppercase tracking-[0.28em]">
          &#9733; Certified &#9733;
        </div>
        <div className="my-0.5 text-xl font-bold uppercase leading-none tracking-[0.14em]">
          Approved
        </div>
        <div className="text-[0.6875rem] font-bold uppercase tracking-[0.2em]">
          Rpt.001 &middot; 2026
        </div>
      </div>
    </div>
  </div>
);

/** The persistent tractor-feed sprocket rails framing the whole printout. */
export const SprocketRails: React.FC = () => (
  <>
    <div
      className="sprocket pointer-events-none absolute inset-y-0 left-0 hidden w-7 border-r rule-soft md:block"
      aria-hidden="true"
    />
    <div
      className="sprocket pointer-events-none absolute inset-y-0 right-0 hidden w-7 border-l rule-soft md:block"
      aria-hidden="true"
    />
  </>
);
