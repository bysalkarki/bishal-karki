import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useReveal, Line, Label, SectionHead, ApprovedStamp } from "@/components/report";

const contactInfo = [
  { icon: Mail, label: "Email", value: "bishalkarki201@gmail.com", href: "mailto:bishalkarki201@gmail.com" },
  { icon: Phone, label: "Phone", value: "+977 9860463168", href: "tel:+9779860463168" },
  { icon: MapPin, label: "Location", value: "Kathmandu, Nepal", href: "https://maps.google.com/?q=Kathmandu,Nepal" },
];

const footerLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/bishal-karki-817a8a187/" },
  { name: "GitHub", href: "https://github.com/bysalkarki" },
  { name: "Twitter", href: "https://twitter.com/bysal_karki" },
];

const Contact = () => {
  const ref = useReveal<HTMLElement>();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry — ${form.name || "hello"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:bishalkarki201@gmail.com?subject=${subject}&body=${body}`;
  };

  const fieldCls =
    "w-full border border-ink bg-paper px-3 py-2.5 text-ink outline-none transition-colors placeholder:text-ink-soft/50 focus:border-2 focus:border-blueprint-blue";

  return (
    <section
      id="contact"
      ref={ref}
      className="scroll-mt-16 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionHead
          code="Sec 05"
          title="Transmission"
          note="Contact"
          intro="Whether you have a specific project in mind or just want to talk backend architecture, my inbox is always open."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[20rem_1fr] lg:gap-14">
          {/* Directory listing */}
          <Line line={3}>
            <Label className="mb-3 block text-ink-soft">Directory</Label>
            <ul className="border-2 rule-ink">
              {contactInfo.map((info, i) => (
                <li key={info.label} className={i < contactInfo.length - 1 ? "border-b rule-soft" : ""}>
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-4 py-4 transition-colors hover:bg-greenbar/50"
                  >
                    <info.icon size={18} strokeWidth={1.75} className="shrink-0 text-ink-soft group-hover:text-blueprint-blue" />
                    <span>
                      <Label className="block text-ink-soft">{info.label}</Label>
                      <span className="text-ink group-hover:text-blueprint-blue">{info.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Line>

          {/* Transmission form → mailto */}
          <Line line={4}>
            <form onSubmit={onSubmit} className="border-2 rule-ink p-6 md:p-8">
              <Label className="mb-6 block text-ink">Compose transmission</Label>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block">
                  <Label className="mb-1.5 block text-ink-soft">Name</Label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Operator"
                    className={fieldCls}
                  />
                </label>
                <label className="block">
                  <Label className="mb-1.5 block text-ink-soft">Email</Label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@example.com"
                    className={fieldCls}
                  />
                </label>
              </div>
              <label className="mt-5 block">
                <Label className="mb-1.5 block text-ink-soft">Message</Label>
                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or system…"
                  className={`${fieldCls} resize-none`}
                />
              </label>
              <button
                type="submit"
                className="group mt-6 inline-flex items-center gap-2 border-2 border-ink bg-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-blueprint-blue hover:border-blueprint-blue"
              >
                Send transmission
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-3 text-[0.6875rem] uppercase tracking-[0.1em] text-ink-soft/70">
                Opens your mail client, addressed to Bishal.
              </p>
            </form>
          </Line>
        </div>

        {/* End-of-report close, stamped bottom-right */}
        <Line line={5} className="mt-20 border-t-2 rule-ink pt-8">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div>
              <div className="barcode mb-3 h-8 w-44 max-w-[50vw]" aria-hidden="true" />
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink-soft">
                &#9644;&#9644; End of report &middot; &copy; {new Date().getFullYear()} Bishal Karki
              </p>
              <div className="mt-5 flex flex-wrap gap-6">
                {footerLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink-soft transition-colors hover:text-blueprint-blue"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="/reads"
                  className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink-soft transition-colors hover:text-blueprint-blue"
                >
                  Reading&nbsp;log
                </a>
              </div>
            </div>
            <ApprovedStamp className="self-end" />
          </div>
        </Line>
      </div>
    </section>
  );
};

export default Contact;
