"use client";

import { useEffect, useRef } from "react";

/**
 * Intersection Observer hook that adds a `visible` class
 * to every `.reveal`, `.reveal-scale`, and `.reveal-fade` element
 * once it enters the viewport.
 */
export function useRevealOnScroll() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const targets = document.querySelectorAll(
      ".reveal, .reveal-scale, .reveal-fade"
    );
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
