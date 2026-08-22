import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6 text-ink">
      <div className="w-full max-w-lg border-2 rule-ink">
        <div className="flex items-center justify-between border-b-2 rule-ink bg-greenbar/60 px-4 py-2">
          <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ledger-red">
            Err 404
          </span>
          <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink-soft">
            {location.pathname}
          </span>
        </div>
        <div className="p-8">
          <h1 className="text-5xl font-bold uppercase tracking-tight">404</h1>
          <p className="mt-3 text-ink/85">
            &gt;&gt; No record found for this address in the report.
          </p>
          <a
            href="/"
            className="mt-6 inline-flex items-center gap-2 border-2 border-ink bg-ink px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-blueprint-blue hover:border-blueprint-blue"
          >
            Return to top of report
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
