"use client";
import Image from "next/image";
import Link from "next/link";
import {
  CSSProperties,
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

let cardIsOpen = false;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const lastPointer = { x: 0, y: 0, seen: false };
let pointerTrackerInstalled = false;
function installPointerTracker() {
  if (pointerTrackerInstalled || typeof window === "undefined") return;
  pointerTrackerInstalled = true;
  window.addEventListener(
    "pointermove",
    (e) => {
      if (e.pointerType !== "mouse") return;
      lastPointer.x = e.clientX;
      lastPointer.y = e.clientY;
      lastPointer.seen = true;
    },
    { passive: true },
  );
}

function topHeadroom() {
  const probe = document.createElement("div");
  probe.style.cssText =
    "position:fixed;top:0;left:0;width:0;height:env(safe-area-inset-top,0px);visibility:hidden;pointer-events:none;";
  document.body.appendChild(probe);
  const inset = probe.getBoundingClientRect().height;
  probe.remove();
  return Math.max(window.innerHeight * 0.1, 64) + inset;
}

interface ProjectProps {
  title: string;
  year?: string;
  desc: ReactNode;
  details?: ReactNode;
  accentColor?: string;
  imgUrl: string;
  imgAlt?: string;
  iconSrc?: string;
  iconAlt?: string;
  iconUrl?: string;
  index?: number;
}

function Project({
  title,
  year,
  desc,
  details,
  accentColor = "#f7f4ee",
  imgUrl,
  imgAlt,
  iconSrc,
  iconAlt,
  iconUrl,
  index = 0,
}: ProjectProps) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [spinningIn, setSpinningIn] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const scrollThumbRef = useRef<HTMLDivElement>(null);
  const fillCursorRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const moreRef = useRef<HTMLButtonElement>(null);
  const openingRef = useRef(false);
  const detailsId = useId();

  useEffect(() => {
    setMounted(true);
    installPointerTracker();
  }, []);

  const hasDetails = Array.isArray(details)
    ? details.length > 0
    : details != null && details !== "";
  const canInteract = mounted && hasDetails;

  const positionOrigin = useCallback(() => {
    const card = cardRef.current;
    const img = imageRef.current;
    const fill = fillRef.current;
    if (!card || !img || !fill) return;
    const rect = img.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const ratio = rect.height ? rect.width / rect.height : 16 / 9;
    const details = detailsRef.current;
    const dRect = details ? details.getBoundingClientRect() : null;
    const closeBtn = closeRef.current;
    const cRect = closeBtn ? closeBtn.getBoundingClientRect() : null;
    const moreBtn = moreRef.current;
    const mRect = moreBtn ? moreBtn.getBoundingClientRect() : null;
    let needX = Math.max(centerX, window.innerWidth - centerX);
    let needY = Math.max(centerY, window.innerHeight - centerY);
    if (dRect) {
      needX = Math.max(needX, centerX - dRect.left, dRect.right - centerX);
      needY = Math.max(needY, centerY - dRect.top, dRect.bottom - centerY);
    }
    const dy = Math.max(needY, needX / ratio) * 1.02;
    const dx = dy * ratio;
    const animated = [fill, details, closeBtn, moreBtn].filter(
      (el): el is HTMLDivElement | HTMLButtonElement => el != null,
    );
    animated.forEach((el) => (el.style.transition = "none"));
    card.style.setProperty("--fill-top", `${centerY}px`);
    card.style.setProperty("--fill-right", `${window.innerWidth - centerX}px`);
    card.style.setProperty(
      "--fill-bottom",
      `${window.innerHeight - centerY}px`,
    );
    card.style.setProperty("--fill-left", `${centerX}px`);
    card.style.setProperty("--fill-dx", `${dx}px`);
    card.style.setProperty("--fill-dy", `${dy}px`);
    if (details && dRect) {
      card.style.setProperty("--details-top", `${centerY - dRect.top}px`);
      card.style.setProperty("--details-right", `${dRect.right - centerX}px`);
      card.style.setProperty(
        "--details-bottom",
        `${dRect.bottom - centerY}px`,
      );
      card.style.setProperty("--details-left", `${centerX - dRect.left}px`);
    }
    if (closeBtn && cRect) {
      card.style.setProperty("--close-top", `${centerY - cRect.top}px`);
      card.style.setProperty("--close-right", `${cRect.right - centerX}px`);
      card.style.setProperty("--close-bottom", `${cRect.bottom - centerY}px`);
      card.style.setProperty("--close-left", `${centerX - cRect.left}px`);
    }
    if (moreBtn && mRect) {
      card.style.setProperty("--more-top", `${centerY - mRect.top}px`);
    }
    void fill.offsetWidth;
    animated.forEach((el) => (el.style.transition = ""));
    return { centerX, centerY, dx, dy };
  }, []);

  const closeOverview = useCallback(() => {
    positionOrigin();
    cardIsOpen = false;
    setOpen(false);
    if (lastPointer.seen && !prefersReducedMotion()) {
      setSpinningIn(true);
    }
    toggleRef.current?.focus({ preventScroll: true });
  }, [positionOrigin]);

  const openOverview = () => {
    if (cardIsOpen) return;
    cardIsOpen = true;
    const card = cardRef.current;
    const start = () => {
      positionOrigin();
      setOpen(true);
      if (lastPointer.seen && hovering && !prefersReducedMotion()) {
        setSpinning(true);
      }
    };
    if (!card) {
      start();
      return;
    }
    const raw = card.getBoundingClientRect().top - topHeadroom();
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const targetY = Math.min(Math.max(window.scrollY + raw, 0), maxScroll);
    const from = window.scrollY;
    const delta = targetY - from;
    const reduce = prefersReducedMotion();
    if (Math.abs(delta) < 2 || reduce) {
      if (Math.abs(delta) >= 2) window.scrollTo({ top: targetY });
      start();
      return;
    }
    const geo = positionOrigin();
    const fill = fillRef.current;
    setOpen(true);
    if (lastPointer.seen && hovering && !reduce) {
      setSpinning(true);
    }
    if (!geo || !fill) {
      window.scrollTo({ top: targetY });
      return;
    }
    openingRef.current = true;
    const { centerX, centerY, dx, dy } = geo;
    fill.style.transition = "none";
    const applyFill = (p: number) => {
      const cy = centerY - delta * p;
      const top = cy - dy * p;
      const bottom = window.innerHeight - cy - dy * p;
      const left = centerX - dx * p;
      const right = window.innerWidth - centerX - dx * p;
      fill.style.clipPath = `inset(${top}px ${right}px ${bottom}px ${left}px)`;
    };
    applyFill(0);
    const duration = 400;
    const ease = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    let startTime: number | null = null;
    const step = (now: number) => {
      if (!cardIsOpen) {
        fill.style.clipPath = "";
        fill.style.transition = "";
        openingRef.current = false;
        return;
      }
      if (startTime === null) startTime = now;
      const t = Math.min((now - startTime) / duration, 1);
      const p = ease(t);
      window.scrollTo(0, from + delta * p);
      applyFill(p);
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        window.scrollTo(0, targetY);
        openingRef.current = false;
        fill.style.clipPath = "";
        void fill.offsetWidth;
        fill.style.transition = "";
      }
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOverview();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeOverview]);

  useEffect(() => {
    if (!open) return;
    const card = cardRef.current;
    const hidden: HTMLElement[] = [];
    document
      .querySelectorAll<HTMLElement>("header, footer, .project-card")
      .forEach((el) => {
        if (el !== card) hidden.push(el);
      });
    hidden.forEach((el) => (el.inert = true));
    closeRef.current?.focus({ preventScroll: true });
    return () => hidden.forEach((el) => (el.inert = false));
  }, [open]);

  useEffect(() => {
    if (!spinning) return;
    const t = setTimeout(() => setSpinning(false), 420);
    return () => clearTimeout(t);
  }, [spinning]);

  useEffect(() => {
    if (!spinningIn) return;
    const t = setTimeout(() => setSpinningIn(false), 750);
    return () => clearTimeout(t);
  }, [spinningIn]);

  useEffect(() => {
    if (!canInteract || open) return;
    let raf = 0;
    const onResize = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        positionOrigin();
      });
    };
    window.addEventListener("resize", onResize);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [canInteract, open, positionOrigin]);

  useEffect(() => {
    if (!open) return;
    const doc = document.documentElement;
    const body = document.body;
    const prevPad = body.style.paddingBottom;
    const computeBounds = () => {
      const card = cardRef.current;
      if (!card) return { min: window.scrollY, max: window.scrollY };
      body.style.paddingBottom = prevPad;
      const cardRect = card.getBoundingClientRect();
      const min = Math.max(
        window.scrollY + cardRect.top - topHeadroom(),
        0,
      );
      const details = detailsRef.current;
      let bottom = window.scrollY + cardRect.bottom;
      if (details) {
        bottom = Math.max(
          bottom,
          window.scrollY + details.getBoundingClientRect().bottom,
        );
      }
      const desiredMax = Math.max(bottom + 24 - window.innerHeight, min);
      const extra = Math.max(
        0,
        desiredMax - (doc.scrollHeight - window.innerHeight),
      );
      if (extra > 0) body.style.paddingBottom = `${extra}px`;
      const docMax = doc.scrollHeight - window.innerHeight;
      return { min: Math.min(min, docMax), max: Math.min(desiredMax, docMax) };
    };
    let bounds = computeBounds();

    const updateThumb = () => {
      const track = scrollTrackRef.current;
      const thumb = scrollThumbRef.current;
      if (!track || !thumb) return;
      const range = bounds.max - bounds.min;
      if (range < 4) {
        track.style.opacity = "0";
        return;
      }
      const vh = window.innerHeight;
      const trackH = track.clientHeight;
      const thumbH = Math.max((vh / (range + vh)) * trackH, 32);
      const progress = Math.min(
        Math.max((window.scrollY - bounds.min) / range, 0),
        1,
      );
      track.style.opacity = "1";
      thumb.style.height = `${thumbH}px`;
      thumb.style.transform = `translateY(${progress * (trackH - thumbH)}px)`;
    };

    const clamp = () => {
      if (openingRef.current) return;
      if (window.scrollY < bounds.min) window.scrollTo(0, bounds.min);
      else if (window.scrollY > bounds.max) window.scrollTo(0, bounds.max);
    };
    const scrollBy = (dy: number) => {
      window.scrollTo(
        0,
        Math.min(Math.max(window.scrollY + dy, bounds.min), bounds.max),
      );
    };
    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return;
      e.preventDefault();
      const dy =
        e.deltaMode === 1
          ? e.deltaY * 16
          : e.deltaMode === 2
            ? e.deltaY * window.innerHeight
            : e.deltaY;
      scrollBy(dy);
    };
    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const y = e.touches[0].clientY;
      scrollBy(touchY - y);
      touchY = y;
    };
    const onScroll = () => {
      clamp();
      updateThumb();
    };
    const onResize = () => {
      positionOrigin();
      bounds = computeBounds();
      clamp();
      updateThumb();
    };

    const thumb = scrollThumbRef.current;
    let dragStartY = 0;
    let dragStartScroll = 0;
    let dragging = false;
    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      dragStartY = e.clientY;
      dragStartScroll = window.scrollY;
      thumb?.setPointerCapture(e.pointerId);
      e.preventDefault();
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const track = scrollTrackRef.current;
      const t = scrollThumbRef.current;
      const range = bounds.max - bounds.min;
      if (!track || !t || range <= 0) return;
      const usable = track.clientHeight - t.offsetHeight;
      if (usable <= 0) return;
      const scrollDelta = ((e.clientY - dragStartY) / usable) * range;
      window.scrollTo(
        0,
        Math.min(Math.max(dragStartScroll + scrollDelta, bounds.min), bounds.max),
      );
    };
    const onPointerUp = (e: PointerEvent) => {
      dragging = false;
      try {
        thumb?.releasePointerCapture(e.pointerId);
      } catch {
      }
    };

    doc.classList.add("fill-open");
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    thumb?.addEventListener("pointerdown", onPointerDown);
    thumb?.addEventListener("pointermove", onPointerMove);
    thumb?.addEventListener("pointerup", onPointerUp);
    updateThumb();
    return () => {
      cardIsOpen = false;
      doc.classList.remove("fill-open");
      body.style.paddingBottom = prevPad;
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      thumb?.removeEventListener("pointerdown", onPointerDown);
      thumb?.removeEventListener("pointermove", onPointerMove);
      thumb?.removeEventListener("pointerup", onPointerUp);
    };
  }, [open, positionOrigin]);

  useEffect(() => {
    if (!hovering || open) return;
    const el = fillCursorRef.current;
    if (!el) return;
    const HALF = 16;
    const reduce = prefersReducedMotion();
    const EASE = reduce ? 1 : 0.2;
    let targetX = lastPointer.x;
    let targetY = lastPointer.y;
    let curX = targetX;
    let curY = targetY;
    let started = lastPointer.seen;
    let raf = 0;
    const render = () => {
      curX += (targetX - curX) * EASE;
      curY += (targetY - curY) * EASE;
      el.style.transform = `translate(${curX - HALF}px, ${curY - HALF}px)`;
      raf = requestAnimationFrame(render);
    };
    if (started) {
      el.style.transform = `translate(${curX - HALF}px, ${curY - HALF}px)`;
      el.style.opacity = "1";
      raf = requestAnimationFrame(render);
    }
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      targetX = e.clientX;
      targetY = e.clientY;
      if (!started) {
        started = true;
        curX = targetX;
        curY = targetY;
        raf = requestAnimationFrame(render);
      }
      const overControl = (e.target as HTMLElement).closest?.(
        "a, .fill-scrollbar",
      );
      el.style.opacity = overControl ? "0" : "1";
    };
    const hide = () => {
      el.style.opacity = "0";
    };
    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, [hovering, open]);

  const imageEl = (
    <Image
      src={imgUrl}
      alt={imgAlt || title}
      width={800}
      height={450}
      className="block h-auto w-full object-cover"
    />
  );

  return (
    <div
      ref={cardRef}
      className={`project-card relative flex flex-col justify-start${
        canInteract ? " project-interactive" : ""
      }${open ? " is-open" : ""}${hovering ? " is-hover" : ""}`}
      style={
        {
          "--accent-color": accentColor,
          animationDelay: `${0.25 + index * 0.15}s`,
        } as CSSProperties
      }
    >
      {canInteract && (
        <div
          ref={fillRef}
          className="project-fill"
          aria-hidden="true"
        />
      )}

      {open && (
        <div ref={scrollTrackRef} className="fill-scrollbar" aria-hidden="true">
          <div ref={scrollThumbRef} className="fill-scrollbar-thumb" />
        </div>
      )}

      {canInteract && (spinning || (hovering && !open)) && (
        <div
          ref={fillCursorRef}
          className={`fill-cursor${spinning ? " is-spinning" : ""}${
            spinningIn ? " is-spinning-in" : ""
          }`}
          style={
            lastPointer.seen
              ? {
                  transform: `translate(${lastPointer.x - 16}px, ${
                    lastPointer.y - 16
                  }px)`,
                }
              : undefined
          }
          aria-hidden="true"
        >
          <div className="fill-cursor-symbol" />
        </div>
      )}

      <div
        ref={imageRef}
        className="project-image mb-1"
        onPointerEnter={() => {
          if (canInteract) setHovering(true);
        }}
        onPointerLeave={() => setHovering(false)}
      >
        {canInteract && (
          <button
            type="button"
            ref={closeRef}
            onClick={closeOverview}
            aria-label="Close"
            className="project-close"
          >
            <span className="project-close-symbol" aria-hidden="true" />
          </button>
        )}
        {canInteract ? (
          <button
            type="button"
            ref={toggleRef}
            onClick={() => {
              if (open) closeOverview();
              else openOverview();
            }}
            aria-expanded={open}
            aria-controls={detailsId}
            className="block w-full cursor-pointer"
          >
            {imageEl}
          </button>
        ) : (
          imageEl
        )}
      </div>

      <div className="project-content relative flex w-full flex-col">
        <div className="flex flex-wrap w-full ">
          <h2 className="flex flex-1 items-center gap-[0.3em] whitespace-nowrap">
            <div className="inline uppercase">{title}</div>
            {year && <span> / {year}</span>}
          </h2>

          {iconUrl && iconSrc && (
            <Link href={iconUrl} target="_blank" rel="noopener noreferrer">
              <Image
                src={iconSrc}
                alt={iconAlt || "Project icon"}
                width={26}
                height={26}
                className="mt-1"
              />
            </Link>
          )}
        </div>
        <p>{desc}</p>
        {hasDetails && (
          <div className="relative mt-[0.2em]">
            {canInteract && (
              <button
                type="button"
                ref={moreRef}
                onClick={openOverview}
                aria-expanded={open}
                aria-controls={detailsId}
                className="project-more"
              >
                Read more +
              </button>
            )}
            <div ref={detailsRef} id={detailsId} className="project-details">
              {Array.isArray(details)
                ? details.map((item, i) => (
                    <Fragment key={i}>
                      {typeof item === "string" ? <p>{item}</p> : item}
                    </Fragment>
                  ))
                : details}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
