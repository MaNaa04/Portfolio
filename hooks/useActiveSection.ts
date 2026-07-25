"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observers = new Map();
    let currentActive = "";

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentActive = entry.target.id;
          setActiveSection(currentActive);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger when element is somewhat near the top
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.set(id, element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = observers.get(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds]);

  return activeSection;
}
