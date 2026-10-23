import portfolioData from "../data/portfolioData";

function Footer() {
  const socials = [
    { label: "CV", mark: "CV", href: "#/cv" },
    { label: "Email", mark: "✉", href: `mailto:${portfolioData.profile.email}` },
    { label: "GitHub", mark: "GH", href: portfolioData.socialLinks.github },
    { label: "LinkedIn", mark: "in", href: portfolioData.socialLinks.linkedin },
  ];

  return (
    <footer className="print:hidden">
      <div className="page-shell flex flex-wrap items-center justify-center gap-4 border-t border-line py-10 sm:gap-6">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="focus-ring flex h-14 min-w-14 items-center justify-center rounded-xl text-2xl font-black text-copy transition hover:-translate-y-1 hover:bg-panel hover:text-sky sm:h-16 sm:min-w-16 sm:text-3xl"
          >
            {social.mark}
          </a>
        ))}
      </div>
      <div className="border-t border-line bg-panel/70 py-5">
        <div className="page-shell flex flex-col gap-2 text-center text-xs text-mist sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>
          © {new Date().getFullYear()} {portfolioData.profile.name}. {portfolioData.profile.role}.
        </p>
        <a
          className="focus-ring w-fit rounded transition hover:text-sky"
          href={`mailto:${portfolioData.profile.email}`}
        >
          {portfolioData.profile.email}
        </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
