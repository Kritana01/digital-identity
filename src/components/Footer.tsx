import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/examples", label: "Examples" },
  { to: "/quick-facts", label: "Quick Facts" },
  { to: "/reflection", label: "Reflection" },
  { to: "/references", label: "References" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md space-y-3">
          <p className="font-display text-lg font-semibold text-white">
            You Left That There
          </p>
          <p className="text-sm leading-relaxed text-slate-400">
            Created by Kritana Bastola for{" "}
            <span className="text-slate-300">EME 4390: Digital Identity</span>.
            An educational project about digital footprints, privacy, and the data we leave behind.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Explore
          </p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
            {footerLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="inline-flex items-center gap-1 text-sm text-slate-300 transition hover:text-cyan-300"
                >
                  {label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Kritana Bastola. Built with Vite & React.
      </div>
    </footer>
  );
}
