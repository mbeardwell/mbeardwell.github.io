import { JSX, useEffect, useRef } from "react";
import IconPersonal from "@icons/personal-logo.svg?react";

interface HeroLinkProps {
  label: string;
  href: string;
}

function HeroLink({ label, href }: HeroLinkProps) {
  return (
    <a    
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative pb-0.5 text-xs tracking-[0.04em] text-[var(--mu)] hover:text-content transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
    >
      {label}
    </a>
  );
}

export default function Hero(): JSX.Element {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = "opacity 0.9s ease, transform 0.9s ease";

    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.opacity = "";
      el.style.transform = "";
    }));

    const onScroll = () => {
      const p = Math.min(1, window.scrollY / window.innerHeight);
      el.style.transition = "none";
      el.style.opacity = String(Math.max(0, 1 - p * 2.4));
      el.style.transform = `scale(${1 - p * 0.03}) translateY(${-p * 20}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="sticky top-0 h-screen z-0 overflow-hidden flex items-center max-md:h-auto max-md:min-h-screen max-md:py-24"
      style={{
        background:
          "radial-gradient(ellipse 1100px 750px at 64% 50%, color-mix(in srgb, var(--ac) 9%, transparent) 0%, transparent 65%), var(--surface)",
      }}
    >
      <div
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[560px] h-[560px] pointer-events-none select-none opacity-[0.065] text-accent max-md:hidden"
        aria-hidden
      >
        <IconPersonal className="w-full h-full" />
      </div>

      <div
        ref={contentRef}
        className="w-full max-w-[1120px] mx-auto px-16 max-md:px-6 flex items-center justify-between gap-20 max-md:flex-col max-md:gap-8 max-md:justify-center"
      >
        {/* Photo */}
        <div
          className="flex-shrink-0 rounded-full overflow-hidden border-2 border-[var(--bdH)]"
          style={{
            width: 228,
            height: 228,
            maxWidth: "min(228px, 40vw)",
            maxHeight: "min(228px, 40vw)",
            boxShadow: "0 0 0 10px color-mix(in srgb, var(--ac) 7%, transparent), 0 0 80px color-mix(in srgb, var(--ac) 14%, transparent)",
          }}
        >
          <img
            className="w-full h-full object-cover"
            src="/images/profile/profile--128.png"
            srcSet={`
              /images/profile/profile--128.png 128w,
              /images/profile/profile--256.png 256w,
              /images/profile/profile--512.png 512w
            `}
            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 256px"
            alt="Matthew Beardwell profile image"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-right max-md:text-center">
          <h1 className="font-serif text-[clamp(32px,7vw,88px)] leading-[0.94] tracking-[-0.02em] text-content mb-[22px]">
            Matthew<br />Beardwell
          </h1>
          <p className="text-[22px] max-md:text-base text-[var(--mu)] font-light mb-2 text-balance">
            Digital Forensics &amp; OSINT Practitioner
          </p>
          <p className="text-[13px] max-md:text-[11px] text-accent tracking-[0.06em] italic mb-8 text-balance">
            1st Class BSc CS &middot; Security+ in progress &middot; Watford, UK
          </p>

          <div className="flex justify-end max-md:justify-center mb-7">
            <div
              className="w-16 h-px"
              style={{ background: "linear-gradient(to left, var(--ac), transparent)" }}
            />
          </div>

          <div className="flex flex-col items-end max-md:items-center gap-2">
            {/* Desktop: all inline */}
            <div className="hidden md:flex items-center">
              <HeroLink label="GitHub"                 href="https://github.com/mbeardwell" />
              <span className="text-[rgba(245,248,254,0.15)] px-5 select-none text-sm">|</span>
              <HeroLink label="LinkedIn"               href="https://linkedin.com/in/mbeardwell" />
              <span className="text-[rgba(245,248,254,0.15)] px-5 select-none text-sm">|</span>
              <HeroLink label="contact@mbeardwell.com" href="mailto:contact@mbeardwell.com" />
            </div>

            {/* Mobile: two rows */}
            <div className="flex md:hidden items-center">
              <HeroLink label="GitHub"   href="https://github.com/mbeardwell" />
              <span className="text-[rgba(245,248,254,0.15)] px-5 select-none text-sm">|</span>
              <HeroLink label="LinkedIn" href="https://linkedin.com/in/mbeardwell" />
            </div>
            <div className="flex md:hidden">
              <HeroLink label="contact@mbeardwell.com" href="mailto:contact@mbeardwell.com" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 max-md:hidden"
        aria-hidden
      >
        <span className="text-[9px] tracking-[0.18em] uppercase text-[var(--mu)]">Scroll</span>
        <div
          className="w-px h-[30px]"
          style={{ background: "linear-gradient(to bottom, var(--ac), transparent)" }}
        />
      </div>
    </section>
  );
}
