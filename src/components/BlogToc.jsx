"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export default function BlogToc({ toc }) {
  const [activeId, setActiveId] = useState(toc?.[0]?.id || null);
  const activeRef = useRef(activeId);

  useEffect(() => {
    if (!toc || toc.length === 0) return;

    const headings = toc
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const offset = 160; // compenso header + margini
    const switchThreshold = 24; // evita jitter al cambio sezione

    const handleScroll = () => {
      let currentId = headings[0]?.id || null;

      for (const el of headings) {
        const top = el.getBoundingClientRect().top - offset;
        if (top <= -switchThreshold) {
          currentId = el.id;
        } else {
          // prima sezione sotto lo scroll: interrompi
          break;
        }
      }

      if (currentId && currentId !== activeRef.current) {
        activeRef.current = currentId;
        setActiveId(currentId);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [toc]);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-slate-900 mb-4">Indice</h3>
      <nav className="space-y-3 text-sm">
        {toc.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={clsx(
              "block transition-colors",
              activeId === section.id
                ? "text-amber-600 font-semibold"
                : "text-slate-600 hover:text-amber-600"
            )}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
