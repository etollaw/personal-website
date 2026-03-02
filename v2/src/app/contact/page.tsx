import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { Mail, Linkedin, Github, Instagram, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
};

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "ewt2121@columbia.edu",
    href: "mailto:ewt2121@columbia.edu",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Eldad Tolla",
    href: "https://www.linkedin.com/in/eldad-tolla-441166219",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@etollaw",
    href: "https://github.com/etollaw",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@eldorado._._",
    href: "https://www.instagram.com/eldorado._._",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New York, NY",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        label="Contact"
        title="Get in Touch"
        description="I'm always open to new opportunities, collaborations, or just a friendly conversation."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        {contacts.map((contact) => {
          const inner = (
            <div className="group p-6 rounded-2xl border border-border bg-surface hover:border-accent/20 transition-all duration-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center">
                  <contact.icon size={18} className="text-accent" />
                </div>
                <span className="text-xs font-medium tracking-widest uppercase text-muted">
                  {contact.label}
                </span>
              </div>
              <p className="font-medium group-hover:text-accent transition-colors">
                {contact.value}
              </p>
            </div>
          );

          if (contact.href) {
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                rel={contact.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              >
                {inner}
              </a>
            );
          }
          return <div key={contact.label}>{inner}</div>;
        })}
      </div>

      {/* Direct CTA */}
      <div className="mt-16 max-w-lg">
        <div className="p-8 rounded-2xl border border-border bg-surface">
          <h3 className="text-lg font-semibold">Send me a message</h3>
          <p className="text-sm text-muted mt-2">
            The quickest way to reach me is via email. I typically respond within
            24 hours.
          </p>
          <a
            href="mailto:ewt2121@columbia.edu"
            className="inline-block mt-6 px-6 py-3 bg-accent text-background font-medium text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            ewt2121@columbia.edu
          </a>
        </div>
      </div>
    </div>
  );
}
