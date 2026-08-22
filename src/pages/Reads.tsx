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
    <span className="inline-flex items-center gap-2" aria-label={`Enjoyability ${n} of 5`}>
      <span className="text-sm tracking-[0.15em] text-ledger-red" aria-hidden="true">
        {"★".repeat(n)}
        <span className="text-ink/25">{"★".repeat(5 - n)}</span>
      </span>
      <Label className="text-ink-soft">{n}/5</Label>
    </span>
  );
};

/**
 * Cover plate — struck grey and halftoned on the page, true colour under the
 * cursor. Hover is driven by the enclosing record's `group`, so both record
 * kinds behave identically. `size` sets the plate's box.
 */
const CoverPlate = ({
  src,
  title,
  size = "h-56 w-full",
}: {
  src: string;
  title: string;
  size?: string;
}) => {
  const [missing, setMissing] = useState(!src);
  if (missing) {
    return (
      <div className={`halftone flex flex-col items-center justify-center text-center ${size}`}>
        <span aria-hidden="true" className="text-4xl text-ink/50">▨</span>
        <span className="mt-3 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink-soft">
          Cover
        </span>
        <span className="mt-1 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink-soft/70">
          Awaiting scan
        </span>
      </div>
    );
  }
  return (
    <>
      <img
        src={src}
        alt={`Cover of ${title}`}
        loading="lazy"
        onError={() => setMissing(true)}
        className={`${size} object-contain py-3 grayscale contrast-125 transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.06] group-hover:contrast-100 group-hover:grayscale-0`}
      />
      <div
        className="halftone pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply transition-opacity duration-500 ease-out group-hover:opacity-0"
        aria-hidden="true"
      />
    </>
  );
};

/** How far into a current read, drawn as a green-bar meter. */
const Progress = ({ value }: { value: number }) => {
  const pct = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-2.5 flex-1 border rule-ink bg-greenbar/50"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      >
        <div className="h-full bg-ink" style={{ width: `${pct}%` }} />
      </div>
      <Label className="text-ink-soft">{pct}%</Label>
    </div>
  );
};

/** One book still open — no score yet, just how far in and a first impression. */
const OpenRecord = ({ book, delay }: { book: CurrentRead; delay: number }) => (
  <Line line={4 + delay} className="group flex flex-col border-2 rule-ink sm:flex-row">
    {/* Cover plate */}
    <div className="relative shrink-0 overflow-hidden border-b-2 rule-ink bg-greenbar/25 sm:w-44 sm:border-b-0 sm:border-r-2">
      <CoverPlate src={book.cover} title={book.title} size="h-48 w-full sm:h-64" />
    </div>

    {/* Record body */}
    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-baseline justify-between gap-4">
        <Label className="text-ledger-red">Now reading</Label>
        {book.since && <Label className="text-ink-soft">Since {book.since}</Label>}
      </div>

      <h2 className="mt-3 text-xl font-bold uppercase leading-tight tracking-tight text-ink">
        {book.title}
      </h2>
      <p className="mt-1 text-sm text-ink-soft">{book.author}</p>

      <div className="mt-4 border-t rule-soft pt-4">
        {book.progress === undefined ? (
          <Label className="text-ink-soft">In progress · unscored</Label>
        ) : (
          <Progress value={book.progress} />
        )}
      </div>

      {book.note && (
        <p className="mt-4 border-t rule-soft pt-4 text-sm leading-relaxed text-ink/85">
          {book.note}
        </p>
      )}

      {book.tags && book.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 border-t rule-soft pt-4">
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
 * `index` is the entry's place in the filtered log (drives the LOG-NN stamp);
 * `delay` is its place within the printed batch (drives the strike-in stagger).
 */
const Record = ({ book, index, delay }: { book: Book; index: number; delay: number }) => (
  <Line line={6 + delay} className="group flex h-full flex-col border-2 rule-ink">
    {/* Filing header band */}
    <div className="flex items-center justify-between border-b-2 rule-ink bg-greenbar/60 px-4 py-2">
      <Label className="text-ledger-red">LOG-{String(index + 1).padStart(2, "0")}</Label>
      <Label className="text-ink-soft">{book.date ?? `Entry ${index + 1}`}</Label>
    </div>

    {/* Cover plate */}
    <div className="relative overflow-hidden border-b-2 rule-ink bg-greenbar/25">
      <CoverPlate src={book.cover} title={book.title} />
    </div>

    {/* Record body */}
    <div className="flex flex-1 flex-col p-5">
      <h2 className="text-lg font-bold uppercase leading-tight tracking-tight text-ink">
        {book.title}
      </h2>
      <p className="mt-1 text-sm text-ink-soft">{book.author}</p>

      <div className="mt-4 border-t rule-soft pt-4">
        <Label className="mb-2 block text-ink-soft">Enjoyability</Label>
        <Rating score={book.rating} />
      </div>

      <p className="mt-4 flex-1 border-t rule-soft pt-4 text-sm leading-relaxed text-ink/85">
        {book.note}
      </p>

      {book.tags && book.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 border-t rule-soft pt-4">
          {book.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      )}
    </div>
  </Line>
);

/** Records printed per batch — the log pages in five-entry runs. */
const PAGE_SIZE = 5;

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
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
