/*
 * RPT.002 — THE READING LOG (unlisted)
 *
 * A private, URL-only companion to the main report: Bishal's finished books,
 * filed as green-bar log entries. Same Line-Printer world — impact ink on
 * fanfold paper, hard edges, Courier Prime. Reached at /reads; deliberately
 * absent from the site nav. Edit src/data/books.ts to keep it current.
 */
import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useReveal, Line, Label, Chip, Perf, SprocketRails } from "@/components/report";
import { books, currentReads, type Book, type CurrentRead } from "@/data/books";

/** Enjoyability score printed as struck stars, out of five. */
const Rating = ({ score }: { score: number }) => {
  const n = Math.max(0, Math.min(5, Math.round(score)));
  return (
    <span className="inline-flex items-center gap-1.5" aria-label={`Enjoyability ${n} of 5`}>
      <span className="text-xs tracking-[0.12em] text-ledger-red" aria-hidden="true">
        {"★".repeat(n)}
        <span className="text-ink/20">{"★".repeat(5 - n)}</span>
      </span>
      <Label className="text-ink-soft text-[0.6875rem]">{n}/5</Label>
    </span>
  );
};

/**
 * Cover plate — accurately framed at true 2:3 book aspect ratio with
 * physical book spine detail, struck grey and halftoned on the page,
 * blooming to true colour on hover.
 */
const CoverPlate = ({
  src,
  title,
  size = "h-44",
  className = "",
}: {
  src: string;
  title: string;
  size?: string;
  className?: string;
}) => {
  const [missing, setMissing] = useState(!src);
  if (missing) {
    return (
      <div className={`halftone flex flex-col items-center justify-center text-center ${size} w-full bg-greenbar/20 px-3`}>
        <span aria-hidden="true" className="text-2xl text-ink/40 font-mono">▨</span>
        <span className="mt-1.5 text-[0.625rem] font-bold uppercase tracking-[0.1em] text-ink-soft line-clamp-1 max-w-[85%]">
          {title}
        </span>
        <span className="text-[0.5625rem] font-bold uppercase tracking-[0.1em] text-ink-soft/70">
          Awaiting scan
        </span>
      </div>
    );
  }
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-greenbar/20 w-full ${size} ${className}`}>
      {/* Physical book jacket with 2:3 proportions and spine relief */}
      <div className="relative h-[88%] aspect-[2/3] shrink-0 border border-ink/50 bg-paper shadow-none">
        <img
          src={src}
          alt={`Cover of ${title}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setMissing(true)}
          className="h-full w-full object-cover grayscale contrast-125 transition-[filter,transform] duration-500 ease-out group-hover:scale-105 group-hover:contrast-100 group-hover:grayscale-0"
        />
        {/* Subtle printed book spine border */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1 border-r border-ink/20 bg-ink/10" aria-hidden="true" />
      </div>
      <div
        className="halftone pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply transition-opacity duration-500 ease-out group-hover:opacity-0"
        aria-hidden="true"
      />
    </div>
  );
};

/** How far into a current read, drawn as a green-bar meter. */
const Progress = ({ value }: { value: number }) => {
  const pct = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="h-2 flex-1 border rule-ink bg-greenbar/50"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      >
        <div className="h-full bg-ink" style={{ width: `${pct}%` }} />
      </div>
      <Label className="text-ink-soft text-[0.6875rem]">{pct}%</Label>
    </div>
  );
};

/** One book still open — no score yet, just how far in and a first impression. */
const OpenRecord = ({ book, delay }: { book: CurrentRead; delay: number }) => (
  <Line line={4 + delay} className="group flex flex-col border-2 rule-ink sm:flex-row">
    {/* Cover plate */}
    <div className="relative shrink-0 overflow-hidden border-b-2 rule-ink sm:w-36 md:w-40 sm:border-b-0 sm:border-r-2">
      <CoverPlate src={book.cover} title={book.title} size="h-44 sm:h-52" />
    </div>

    {/* Record body - compact & intentional */}
    <div className="flex flex-1 flex-col justify-between p-4 space-y-2.5">
      <div>
        <div className="flex items-baseline justify-between gap-3">
          <Label className="text-ledger-red text-[0.6875rem]">Now reading</Label>
          {book.since && <Label className="text-ink-soft text-[0.6875rem]">Since {book.since}</Label>}
        </div>

        <h2 className="mt-1.5 text-base sm:text-lg font-bold uppercase leading-tight tracking-tight text-ink">
          {book.title}
        </h2>
        <p className="mt-0.5 text-xs text-ink-soft">{book.author}</p>
      </div>

      <div className="border-t rule-soft pt-2">
        {book.progress === undefined ? (
          <Label className="text-ink-soft text-[0.6875rem]">In progress · unscored</Label>
        ) : (
          <Progress value={book.progress} />
        )}
      </div>

      {book.note && (
        <p className="border-t rule-soft pt-2 text-xs leading-relaxed text-ink/85">
          {book.note}
        </p>
      )}

      {book.tags && book.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 border-t rule-soft pt-2">
          {book.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      )}
    </div>
  </Line>
);

/**
 * One filed book record — cover, verdict, score.
 * Compact, proportional layout with no wasted empty space.
 */
const Record = ({ book, index, delay }: { book: Book; index: number; delay: number }) => (
  <Line line={6 + delay} className="group flex h-full flex-col border-2 rule-ink">
    {/* Filing header band */}
    <div className="flex items-center justify-between border-b rule-ink bg-greenbar/60 px-3 py-1.5">
      <Label className="text-ledger-red text-[0.6875rem]">LOG-{String(index + 1).padStart(2, "0")}</Label>
      <Label className="text-ink-soft text-[0.6875rem]">{book.date ?? `Entry ${index + 1}`}</Label>
    </div>

    {/* Cover plate */}
    <div className="border-b rule-ink">
      <CoverPlate src={book.cover} title={book.title} size="h-44" />
    </div>

    {/* Record body - tightly structured */}
    <div className="flex flex-1 flex-col justify-between p-3.5 space-y-2.5">
      <div>
        <h2 className="text-sm font-bold uppercase leading-snug tracking-tight text-ink line-clamp-1" title={book.title}>
          {book.title}
        </h2>
        <p className="text-xs text-ink-soft line-clamp-1 mt-0.5">{book.author}</p>
      </div>

      <div className="border-t rule-soft pt-2 flex items-center justify-between">
        <Label className="text-ink-soft text-[0.6875rem]">Rating</Label>
        <Rating score={book.rating} />
      </div>

      <p className="border-t rule-soft pt-2 text-xs leading-relaxed text-ink/85 line-clamp-3 min-h-[2.5rem]">
        {book.note}
      </p>

      {book.tags && book.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 border-t rule-soft pt-2">
          {book.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      )}
    </div>
  </Line>
);

/** Records printed per batch — 6 per batch for balanced 2 and 3 column grids. */
const PAGE_SIZE = 6;

/** Sentinel for the unfiltered view. */
const ALL_TAGS = "All";

/** Subject tags across the whole log, in first-appearance order. */
const tagIndex = [
  ALL_TAGS,
  ...Array.from(new Set(books.flatMap((b) => b.tags ?? []))),
];

/** How many records carry a given tag — printed beside each filter key. */
const tagCount = (tag: string) =>
  tag === ALL_TAGS ? books.length : books.filter((b) => b.tags?.includes(tag)).length;

/** Filter key — one stamped selector in the tag band. */
const TagKey = ({
  tag,
  active,
  onSelect,
}: {
  tag: string;
  active: boolean;
  onSelect: (tag: string) => void;
}) => (
  <button
    type="button"
    onClick={() => onSelect(tag)}
    aria-pressed={active}
    className={`inline-flex items-baseline gap-1.5 border px-2 py-0.5 text-[0.6875rem] font-bold uppercase tracking-[0.1em] transition-colors ${
      active
        ? "border-ink bg-ink text-paper"
        : "border-ink/60 text-ink/80 hover:bg-ink hover:text-paper"
    }`}
  >
    {tag}
    <span className={active ? "text-paper/60" : "text-ink/45"}>{tagCount(tag)}</span>
  </button>
);

const Reads = () => {
  const ref = useReveal<HTMLElement>();
  const [tag, setTag] = useState(ALL_TAGS);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () => (tag === ALL_TAGS ? books : books.filter((b) => b.tags?.includes(tag))),
    [tag]
  );
  const shown = filtered.slice(0, visible);
  const remaining = filtered.length - shown.length;
  const avg =
    filtered.length > 0
      ? (filtered.reduce((sum, b) => sum + b.rating, 0) / filtered.length).toFixed(1)
      : "—";

  /** Selecting a key re-runs the batch from the first page. */
  const selectTag = (next: string) => {
    setTag(next);
    setVisible(PAGE_SIZE);
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Report title bar */}
      <nav className="sticky top-0 z-50 w-full border-b-2 rule-ink bg-paper">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-8">
          <span className="flex items-baseline gap-2 whitespace-nowrap">
            <span className="text-base font-bold uppercase tracking-tight text-ink">
              Bishal&nbsp;Karki
            </span>
            <span className="hidden text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink-soft sm:inline">
              / rpt.002
            </span>
          </span>
          <a
            href="/"
            className="inline-flex items-center gap-2 border border-ink px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <ArrowLeft size={13} /> Main report
          </a>
        </div>
      </nav>

      <div className="relative">
        <SprocketRails />
        <main className="mx-auto max-w-[1180px] md:px-7">
          <section ref={ref} className="px-6 py-16 md:px-12 md:py-24">
            <div className="mx-auto max-w-6xl">
              {/* Batch-job header */}
              <header className="mb-12 md:mb-16">
                <Line className="mb-3 flex items-baseline justify-between border-b-2 rule-ink pb-2">
                  <Label className="text-ledger-red">Rpt.002</Label>
                  <Label className="text-ink-soft hidden sm:block">
                    Reading log · {filtered.length} {filtered.length === 1 ? "entry" : "entries"} · avg {avg}/5
                  </Label>
                </Line>
                <Line line={1} as="h1" className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-ink">
                  Reading Log
                </Line>
                <Line line={2} as="p" className="mt-5 max-w-[64ch] text-ink-soft leading-relaxed">
                  Books read, filed by hand. Each entry carries my own enjoyability score and a one-line verdict. An unlisted, running record.
                </Line>
              </header>

              {/* Open on the desk — unfiled, unscored, still being read */}
              {currentReads.length > 0 && (
                <section aria-label="Currently reading" className="mb-12 md:mb-16">
                  <Line
                    line={3}
                    className="mb-4 flex items-baseline justify-between border-b-2 rule-ink pb-2"
                  >
                    <Label className="text-ledger-red">Sec 01 · On the desk</Label>
                    <Label className="text-ink-soft hidden sm:block">
                      {currentReads.length} open
                    </Label>
                  </Line>
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {currentReads.map((book, i) => (
                      <OpenRecord key={book.title} book={book} delay={i} />
                    ))}
                  </div>
                </section>
              )}

              {/* Filed log header */}
              <Line
                line={5}
                className="mb-4 flex items-baseline justify-between border-b-2 rule-ink pb-2"
              >
                <Label className="text-ledger-red">
                  {currentReads.length > 0 ? "Sec 02" : "Sec 01"} · Filed
                </Label>
                <Label className="text-ink-soft hidden sm:block">
                  {books.length} read
                </Label>
              </Line>

              {/* Tag band — sort keys for the log */}
              {tagIndex.length > 1 && (
                <Line
                  line={5}
                  as="section"
                  aria-label="Filter by tag"
                  className="mb-8 flex flex-col gap-3 border-y-2 rule-ink py-3 sm:flex-row sm:items-center sm:gap-4"
                >
                  <Label className="text-ledger-red shrink-0">Sort key</Label>
                  <div className="flex flex-wrap gap-2">
                    {tagIndex.map((t) => (
                      <TagKey key={t} tag={t} active={t === tag} onSelect={selectTag} />
                    ))}
                  </div>
                </Line>
              )}

              {filtered.length === 0 ? (
                <Line line={3} className="border-2 rule-ink p-10 text-center text-ink-soft">
                  <Label>
                    {books.length === 0
                      ? "No entries filed yet"
                      : `No entries tagged ${tag}`}
                  </Label>
                </Line>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
                    {shown.map((book, i) => (
                      <Record key={book.title} book={book} index={i} delay={i % PAGE_SIZE} />
                    ))}
                  </div>

                  {/* Continuation footer — feeds the next batch of entries */}
                  <div className="mt-10 flex flex-col items-center gap-3 border-t-2 rule-ink pt-6">
                    <Label className="text-ink-soft">
                      Showing {shown.length} of {filtered.length}
                      {tag !== ALL_TAGS && ` tagged ${tag}`}
                    </Label>
                    {remaining > 0 && (
                      <button
                        type="button"
                        onClick={() => setVisible((v) => v + PAGE_SIZE)}
                        className="group inline-flex items-center gap-2 border-2 rule-ink px-5 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-paper"
                      >
                        Load more
                        <span aria-hidden="true">▼</span>
                        <span className="text-ledger-red group-hover:text-paper">
                          {Math.min(PAGE_SIZE, remaining)}
                        </span>
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </section>
          <Perf page={2} total={2} />
        </main>
      </div>
    </div>
  );
};

export default Reads;
