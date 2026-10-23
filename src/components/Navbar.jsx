import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import portfolioData from "../data/portfolioData";

const links = [
  { label: "About", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "CV", to: "/cv" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const openSearch = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsSearchOpen(true);
      }

      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("keydown", openSearch);
    return () => window.removeEventListener("keydown", openSearch);
  }, []);

  const searchResults = links.filter((link) =>
    link.label.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-line/80 bg-ink/90 backdrop-blur-xl print:hidden">
      <div className="page-shell flex h-20 items-center justify-between">
        <Link
          to="/"
          className="focus-ring rounded-md text-lg font-semibold tracking-tight md:hidden xl:block"
          onClick={() => setIsOpen(false)}
        >
          {portfolioData.profile.name}
          <span className="text-sky">.</span>
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `focus-ring rounded-md text-base font-normal transition ${
                  isActive ? "text-sky" : "text-mist hover:text-heading"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="focus-ring hidden whitespace-nowrap rounded px-1 text-sm font-semibold text-copy transition hover:text-sky xl:inline"
            aria-label="Search pages"
          >
            ctrl k⌕
          </button>
        </div>

        <button
          type="button"
          className="focus-ring rounded-lg border border-line p-2 text-heading md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="my-1 block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-line bg-ink px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="rounded-lg px-3 py-3 text-base font-medium text-mist hover:bg-panel hover:text-heading"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {isSearchOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-ink/80 px-5 pt-28 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Search pages"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsSearchOpen(false);
          }}
        >
          <div className="w-full max-w-lg overflow-hidden rounded-xl border border-line bg-panel shadow-2xl">
            <div className="flex items-center border-b border-line px-4">
              <span className="text-mist">⌕</span>
              <input
                autoFocus
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search pages..."
                className="w-full bg-transparent px-4 py-4 text-heading outline-none placeholder:text-mist"
              />
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="rounded border border-line px-2 py-1 text-xs text-mist"
              >
                ESC
              </button>
            </div>
            <div className="p-2">
              {searchResults.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="block rounded-lg px-4 py-3 text-sm text-copy transition hover:bg-ink hover:text-sky"
                >
                  {link.label}
                </NavLink>
              ))}
              {searchResults.length === 0 && (
                <p className="px-4 py-6 text-center text-sm text-mist">No page found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
