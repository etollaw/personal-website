import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const socials = [
  {
    href: "https://github.com/etollaw",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/eldad-tolla-441166219",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/eldorado._._",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "mailto:ewt2121@columbia.edu",
    icon: Mail,
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <Link href="/" className="font-semibold hover:text-accent transition-colors">
            Eldad Tolla
          </Link>
          <p className="text-sm text-muted">
            Computer Science @ Columbia University
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="p-2 text-muted hover:text-accent transition-colors duration-200"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Eldad Tolla. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
