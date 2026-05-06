import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Fingerprint } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/examples", label: "Examples" },
  { to: "/quick-facts", label: "Quick Facts" },
  { to: "/reflection", label: "Reflection" },
  { to: "/references", label: "References" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[60] border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl min-w-0 items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="group flex min-w-0 shrink items-center gap-2 font-display text-lg font-semibold tracking-tight text-white lg:max-w-[min(100%,280px)]"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/30 ring-1 ring-white/10 transition group-hover:from-cyan-500/30 group-hover:to-violet-600/40">
            <Fingerprint className="h-5 w-5 text-cyan-300" aria-hidden />
          </span>
          <span className="hidden truncate sm:inline lg:max-w-none">You Left That There</span>
        </Link>

        <nav
          className="hidden min-w-0 shrink items-center gap-1.5 overflow-x-auto overflow-y-visible py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex xl:gap-2"
          aria-label="Primary"
        >
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [
                  "relative shrink-0 cursor-pointer whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium transition xl:px-3",
                  isActive
                    ? "bg-white/10 text-cyan-200"
                    : "text-slate-300 hover:bg-white/5 hover:text-white",
                ].join(" ")
              }
              end={to === "/"}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-slate-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 lg:hidden"
            id="mobile-menu"
          >
            <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile primary">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      "cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium",
                      isActive
                        ? "bg-white/10 text-cyan-200"
                        : "text-slate-300 hover:bg-white/5",
                    ].join(" ")
                  }
                  end={to === "/"}
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
