/**
 * Footer Component
 * Site footer with links and branding
 */

import { BRAND } from '../constants/brand';

interface FooterLinkProps {
  href: string;
  label: string;
}

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <li>
      <a
        href={href}
        className="hover-accent text-[#94a3b8] hover:text-[#00c896] transition-all flex items-center gap-2 group"
      >
        <span className="w-0 group-hover:w-2 h-px bg-[#00c896] transition-all"></span>
        {label}
      </a>
    </li>
  );
}

interface FooterSectionProps {
  title: string;
  links: FooterLinkProps[];
}

function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h4 className="brand-body font-semibold text-sm uppercase tracking-wider mb-4 text-[#cbd5e1] flex items-center gap-2">
        <span className="w-1 h-4 bg-[#00c896]"></span>
        {title}
      </h4>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <FooterLink key={link.label} {...link} />
        ))}
      </ul>
    </div>
  );
}

const footerLinks = {
  main: [
    { href: '#', label: 'About' },
    { href: '#', label: 'Projects' },
    { href: '#', label: 'Blog' },
    { href: '#', label: 'Contact' },
  ],
  social: [
    { href: '#', label: 'Twitter' },
    { href: '#', label: 'GitHub' },
    { href: '#', label: 'LinkedIn' },
    { href: '#', label: 'Email' },
  ],
};

export function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 bg-[#0a0f1e] text-[#e2e8f0] border-t border-[#00c896]/20 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 border border-[#00c896] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 border border-[#00c896] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#00c896] rounded-full animate-pulse"></div>
              <h3 className="brand-headline text-xl text-[#00c896]">{BRAND.name}</h3>
            </div>
            <p className="brand-body text-sm text-[#94a3b8] leading-relaxed mb-4">
              {BRAND.tagline.split('. ').map((line, i) => (
                <span key={i}>
                  {line}.
                  {i < 2 && <br />}
                </span>
              ))}
            </p>
            <div className="flex gap-2">
              <span className="inline-block w-8 h-1 bg-[#00c896] rounded-full"></span>
              <span className="inline-block w-4 h-1 bg-[#00c896]/50 rounded-full"></span>
              <span className="inline-block w-2 h-1 bg-[#00c896]/30 rounded-full"></span>
            </div>
          </div>

          {/* Links */}
          <FooterSection title="Links" links={footerLinks.main} />

          {/* Connect */}
          <FooterSection title="Connect" links={footerLinks.social} />
        </div>

        <div className="pt-8 border-t border-[#00c896]/10 text-center">
          <p className="brand-code text-xs text-[#64748b]">
            © 2025 {BRAND.name}. Build once. Earn forever.
          </p>
        </div>
      </div>
    </footer>
  );
}
