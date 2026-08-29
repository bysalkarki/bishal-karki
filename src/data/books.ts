/*
 * READING LOG — data of record
 *
 * This is the ONE file you edit to keep the log current.
 * Two lists live here:
 *   currentReads — what's open right now (no score yet)
 *   books        — what's finished, newest first. Add to the top.
 * When you finish a current read, move it down into `books` and give it a
 * rating, a verdict and a date.
 *
 * FIELDS (books)
 *   title   — book title
 *   author  — who wrote it
 *   cover   — image for the cover. Either:
 *               • a URL:  "https://covers.openlibrary.org/..."
 *               • a file: drop the image in /public and use "/my-book.jpg"
 *             Leave "" to show the "awaiting scan" placeholder.
 *   rating  — YOUR enjoyability score, 1–5 (whole numbers)
 *   note    — a short verdict, ~10–15 words. Keep it tight.
 *   date    — (optional) when you finished it, e.g. "Jul 2026"
 *   tags    — (optional) one or two subject tags, e.g. ["Fiction", "Politics"].
 *             The /reads filter bar builds itself from whatever tags appear
 *             here, so reuse existing spellings rather than inventing near-
 *             duplicates ("Sci-Fi" and "SciFi" would list as two filters).
 */

export interface Book {
    title: string;
    author: string;
    cover: string;
    rating: number; // 1–5, enjoyability
    note: string;
    date?: string;
    tags?: string[];
}

/*
 * FIELDS (currentReads) — same as above, minus the score, plus:
 *   since    — (optional) when you picked it up, e.g. "Mar 2026"
 *   progress — (optional) 0–100, how far in. Omit it and the record just
 *              stamps "In progress" instead of drawing a meter.
 *   note     — (optional) a first impression, not a verdict.
 */
export interface CurrentRead {
    title: string;
    author: string;
    cover: string;
    since?: string;
    progress?: number; // 0–100
    note?: string;
    tags?: string[];
}

/** Open on the desk right now. Empty array hides the section entirely. */
export const currentReads: CurrentRead[] = [
    {
        title: "1984",
        author: "George Orwell",
        cover: "/covers/1984.jpg",
        since: "July 2026",
        progress: 20,
        note: "About mass manipulation by government.",
        tags: ["Fiction", "Politics"],
    },
];

export const books: Book[] = [
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt & David Thomas",
        cover: "/covers/pragmatic-programmer.jpg",
        rating: 5,
        note: "Timeless engineering habits; the one book I re-open the most.",
        date: "Jul 2023",
        tags: ["Engineering", "Craft"],
    },
    {
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        cover: "/covers/designing-data-intensive-applications.jpg",
        rating: 5,
        note: "Dense but worth it; reshaped how I think about backend systems.",
        date: "May 2024",
        tags: ["Engineering", "Systems"],
    },
    {
        title: "सेतो धरती",
        author: "Amar Neupane",
        cover: "/covers/seto-dharti.jpg",
        rating: 5,
        note: "Range of emotion, different phase of life.",
        date: "Nov 2022",
        tags: ["Fiction", "Nepali"],
    },
    {
        title: "गुलाबी उमेर",
        author: "Amar Neupane",
        cover: "/covers/gulabi-umer.jpg",
        rating: 3,
        note: "Range of emotion, different phase of life.",
        date: "Feb 2026",
        tags: ["Fiction", "Nepali"],
    },
    {
        title: "Alchemist",
        author: "Paulo Coelho",
        cover: "/covers/the-alchemist.jpg",
        rating: 4,
        note: "Simple, practical framing on habits; a journey of personal legend.",
        date: "Mar 2019",
        tags: ["Fiction", "Philosophy"],
    },
    {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        cover: "/covers/the-kite-runner.jpg",
        rating: 4,
        note: "Crying through pages. Powerful tale of redemption.",
        date: "Mar 2018",
        tags: ["Fiction"],
    },
    {
        title: "Animal Farm",
        author: "George Orwell",
        cover: "/covers/animal-farm.jpg",
        rating: 4,
        note: "What happens when we stop questioning authority and follow blindly.",
        date: "Mar 2025",
        tags: ["Fiction", "Politics"],
    },
    {
        title: "Metamorphosis",
        author: "Franz Kafka",
        cover: "/covers/the-metamorphosis.jpg",
        rating: 3,
        note: "Depressing. Worth reading.",
        date: "Jan 2025",
        tags: ["Fiction", "Philosophy"],
    },
    {
        title: "समर लभ",
        author: "Subin Bhattarai",
        cover: "/covers/summer-love.jpg",
        rating: 3,
        note: "Love on Rise. Ups and downs of relationship.",
        date: "Feb 2015",
        tags: ["Fiction", "Nepali"],
    },
    {
        title: "Verity",
        author: "Colleen Hoover",
        cover: "/covers/verity.jpg",
        rating: 4,
        note: "Suspenseful and thrilling. Must read!",
        date: "Dec 2024",
        tags: ["Fiction", "Thriller"],
    },
];
