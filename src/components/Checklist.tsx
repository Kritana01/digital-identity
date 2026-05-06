import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { checklistItems } from "../data/facts";

function messageForPercent(p: number): string {
  if (p <= 25) return "Your data trail needs attention.";
  if (p <= 60) return "Good start, but there is more to clean up.";
  return "Strong privacy habits - keep reviewing regularly.";
}

export function Checklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const total = checklistItems.length;
  const done = useMemo(
    () => checklistItems.filter((item) => checked[item.id]).length,
    [checked]
  );
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  const message = messageForPercent(percent);

  function toggle(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="glass overflow-hidden rounded-2xl"
      aria-labelledby="checklist-heading"
    >
      <div className="border-b border-white/10 bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-500/10 px-6 py-5 sm:px-8">
        <h3
          id="checklist-heading"
          className="font-display text-xl font-semibold text-white"
        >
          Digital Footprint Checkup
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          Check what you have done recently. This is a habit tracker, not legal advice.
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-5">
        <div className="space-y-0 border-white/5 p-6 sm:p-8 lg:col-span-3 lg:border-r">
          <ul className="space-y-3">
            {checklistItems.map((item) => {
              const isChecked = !!checked[item.id];
              return (
                <li key={item.id}>
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-transparent px-2 py-2 transition hover:border-white/10 hover:bg-white/[0.03]">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-900 text-cyan-500 focus:ring-cyan-400 focus:ring-offset-slate-950"
                      checked={isChecked}
                      onChange={() => toggle(item.id)}
                    />
                    <span
                      className={
                        isChecked
                          ? "text-slate-300 line-through decoration-slate-500"
                          : "text-slate-200"
                      }
                    >
                      {item.label}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col justify-center bg-slate-950/40 p-6 sm:p-8 lg:col-span-2">
          <div className="relative mx-auto flex h-36 w-36 items-center justify-center">
            <svg
              className="absolute inset-0 -rotate-90"
              viewBox="0 0 100 100"
              aria-hidden
            >
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="rgb(30 41 59)"
                strokeWidth="10"
              />
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="url(#grad)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={`${(percent / 100) * 264} 264`}
              />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
            </svg>
            <div className="relative text-center">
              <p className="font-display text-3xl font-bold text-white">{percent}%</p>
              <p className="text-xs text-slate-500">complete</p>
            </div>
          </div>
          <p className="mt-6 text-center text-sm font-medium leading-relaxed text-cyan-100/90">
            {message}
          </p>
          <p className="mt-3 text-center text-xs text-slate-500">
            {done} of {total} habits checked
          </p>
        </div>
      </div>
    </motion.section>
  );
}
