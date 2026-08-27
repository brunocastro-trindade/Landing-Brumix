import { useEffect } from "react";
import type { RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animações ligadas ao scroll (GSAP + ScrollTrigger).
 * - Barra de progresso no topo (scrub)
 * - Parallax da imagem e do conteúdo do hero (scrub)
 * - Contadores dos números do hero
 * - Reveal com stagger do conteúdo de cada seção ([data-reveal] > filhos)
 *
 * Respeita `prefers-reduced-motion`: se ativo, não anima nada.
 */
export function useScrollAnimations(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Barra de progresso do scroll
      gsap.set("[data-progress]", { scaleX: 0, transformOrigin: "left center" });
      gsap.to("[data-progress]", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });

      // Parallax do hero
      const hero = el.querySelector<HTMLElement>('[data-name="Hero"]');
      if (hero) {
        const scrub = {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        };
        gsap.to("[data-hero-img]", { yPercent: 14, ease: "none", scrollTrigger: scrub });
        gsap.to("[data-hero-content]", { yPercent: -16, opacity: 0.12, ease: "none", scrollTrigger: scrub });
      }

      // Contadores dos números
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((node) => {
        const end = Number(node.dataset.count || "0");
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 1.6,
          ease: "power1.out",
          scrollTrigger: { trigger: node, start: "top 85%", once: true },
          onUpdate: () => {
            node.textContent = String(Math.round(obj.v));
          },
        });
      });

      // Reveal do conteúdo de cada seção
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((group) => {
        const items = gsap.utils.toArray<HTMLElement>(group.children);
        if (!items.length) return;
        gsap.from(items, {
          y: 42,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: { trigger: group, start: "top 80%", once: true },
        });
      });

      // Recalcula posições depois que fontes/imagens assentam
      ScrollTrigger.refresh();
      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }, el);

    return () => ctx.revert();
  }, [root]);
}
