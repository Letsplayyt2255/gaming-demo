import { Gamepad2, Twitch, Youtube, Twitter, Instagram } from 'lucide-react';

const cols = [
  { title: 'Platform', links: ['Games', 'Tournaments', 'Leaderboard', 'Stats Tracker'] },
  { title: 'Community', links: ['Discord', 'Forums', 'Creators', 'Teams'] },
  { title: 'Company', links: ['About', 'Careers', 'Press Kit', 'Contact'] },
  { title: 'Support', links: ['Help Center', 'Fair Play', 'Privacy', 'Terms'] },
];

const socials = [
  { Icon: Twitch, color: 'hover:text-magenta-400 hover:border-magenta-500/40 hover:shadow-magenta' },
  { Icon: Youtube, color: 'hover:text-red-400 hover:border-red-500/40' },
  { Icon: Twitter, color: 'hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-cyan' },
  { Icon: Instagram, color: 'hover:text-pink-400 hover:border-pink-500/40 hover:shadow-pink' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      {/* Gradient top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#top" className="group flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-neon-500/20 to-cyan-500/20 ring-1 ring-neon-500/40 transition-all group-hover:rotate-12 group-hover:shadow-neon-sm">
                <Gamepad2 className="h-5 w-5 text-neon-400 transition-colors group-hover:text-cyan-400" />
              </span>
              <span className="font-display text-xl font-extrabold tracking-widest text-white">
                NE<span className="text-neon-400 text-glow">X</span>US
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              The competitive gaming platform for players who want to go pro. Train, compete, win.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href="#join"
                  className={`grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 ${s.color}`}
                  aria-label="Social link"
                >
                  <s.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#join" className="group relative text-sm text-gray-400 transition-colors hover:text-neon-400">
                      {l}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-neon-400 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">© 2026 NEXUS Gaming. All rights reserved.</p>
          <p className="text-sm text-gray-500">Built for competitors, by competitors.</p>
        </div>
      </div>
    </footer>
  );
}
