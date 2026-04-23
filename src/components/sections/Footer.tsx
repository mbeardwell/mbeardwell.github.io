import { JSX } from "react";
import IconPersonal from "@icons/personal-logo.svg?react";

const LINKS = [
  { label: "GitHub",                 href: "https://github.com/mbeardwell"      },
  { label: "LinkedIn",               href: "https://linkedin.com/in/mbeardwell" },
  { label: "contact@mbeardwell.com", href: "mailto:contact@mbeardwell.com"      },
];

export default function Footer(): JSX.Element {
  return (
    <footer id="contact" className="bg-surface border-t border-[var(--bd)] flex flex-col items-center gap-6 px-16 py-10 max-md:px-6">
      <IconPersonal className="w-32 h-32 text-accent opacity-10" />
      <div className="flex gap-8 flex-wrap justify-center">
        {LINKS.map(({ label, href }) => (
         <a          
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative pb-0.5 text-xs tracking-[0.04em] text-[var(--mu)] hover:text-content transition-colors duration-200 no-underline after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}

