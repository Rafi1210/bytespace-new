"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal — minimal, dependency-free scroll-reveal wrapper.
 *
 * - Uses IntersectionObserver (one observer per element, disconnects on reveal).
 * - Animates opacity + transform only (no layout-affecting properties).
 * - Runs once: re-mounting the element restarts the animation.
 * - Respects prefers-reduced-motion (shows content immediately, no transition).
 * - Above-the-fold elements reveal instantly on mount so first paint is smooth.
 * - `will-change` is only declared while the animation is actively running,
 *   so the browser does not pin unnecessary GPU layers for the rest of the
 *   session (which causes scroll jank).
 *
 * Props:
 *   - as:    tag to render (default "div").
 *   - delay: ms to wait before transitioning in (default 0).
 *   - y:     translateY in px for the hidden state (default 18).
 *   - duration: transition duration in ms (default 600).
 *   - amount: intersection ratio required to trigger (default 0.15).
 *   - className / style: forwarded to the wrapper.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  y = 18,
  duration = 600,
  amount = 0.15,
  className = "",
  style,
  ...rest
}) {
  const ref = useRef(null);
  // Decide the initial visible state synchronously on first render so we
  // never paint a hidden state for users/browsers that don't need it
  // (no IntersectionObserver, or prefers-reduced-motion).
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    if (typeof IntersectionObserver === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    // If the element is already (partially) in the viewport on mount —
    // e.g. the Hero text — reveal it on the next frame instead of waiting
    // for a scroll event. This keeps the first paint smooth and avoids the
    // "I scrolled and the content finally appeared" lag.
    const rect = node.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < viewportHeight && rect.bottom > 0) {
      // requestAnimationFrame ensures we don't fight the first paint.
      const frame = requestAnimationFrame(() => {
        setVisible(true);
      });
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: amount, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [amount, visible]);

  // Only advertise `will-change` while the element is actively transitioning.
  // Leaving it on permanently pins a compositor layer and causes scroll jank.
  const transitionStyle = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${delay}ms`,
    willChange: visible ? "auto" : "opacity, transform",
  };

  const positionStyle = visible
    ? {
        opacity: 1,
        transform: "translateY(0)",
      }
    : {
        opacity: 0,
        transform: `translateY(${y}px)`,
      };

  const combinedStyle = {
    ...transitionStyle,
    ...positionStyle,
    ...style,
  };

  return (
    <Tag
      ref={ref}
      className={className}
      style={combinedStyle}
      {...rest}
    >
      {children}
    </Tag>
  );
}