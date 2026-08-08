import { useEffect, useState } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

const links = [
  { label: 'Games', href: '#games' },
  { label: 'Tournaments', href: '#tournaments' },
  { label: 'Leaderboard', href: '#leaderboard' },
  { label: 'Community', href: '#community' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-neon-500/20 shadow-neon-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-neon-500/20 to-cyan-500/20 ring-1 ring-neon-500/40 transition-all group-hover:rotate-12 group-hover:shadow-neon-sm">
            <Gamepad2 className="h-5 w-5 text-neon-400 transition-colors group-hover:text-cyan-400" />
          </span>
          <span className="font-display text-xl font-extrabold tracking-widest text-white">
            NE<span className="text-neon-400 text-glow">X</span>US
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l, i) => (
            <li key={l.href} className="group relative">
              <a
                href={l.href}
                className="text-sm font-medium text-gray-300 transition-colors group-hover:text-neon-400"
              >
                {l.label}
              </a>
              <span
                className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-neon-400 to-cyan-400 transition-all duration-300 group-hover:w-full"
                style={{ transitionDelay: `${i * 30}ms` }}
              />
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#join" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
            Sign in
          </a>
          <a
            href="#join"
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-neon-500 to-cyan-500 px-4 py-2 text-sm font-bold text-ink-950 shadow-neon-sm transition-all hover:shadow-neon"
          >
            <span className="absolute inset-0 shimmer-bg opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative">Join Free</span>
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg bg-ink-800 ring-1 ring-white/10 transition-all hover:ring-neon-500/40 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5 animate-pop" /> : <Menu className="h-5 w-5 animate-pop" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink-950/95 px-6 py-4 md:hidden animate-slide-up">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base font-medium text-gray-200 transition-colors hover:text-neon-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#join" className="mt-2 block rounded-lg bg-gradient-to-r from-neon-500 to-cyan-500 px-4 py-2.5 text-center font-bold text-ink-950">
                Join Free
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
