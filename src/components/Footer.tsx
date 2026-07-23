import { Gamepad2, Twitch, Youtube, Twitter, Instagram } from 'lucide-react';

const cols = [
  { title: 'Platform', links: ['Games', 'Tournaments', 'Leaderboard', 'Stats Tracker'] },
  { title: 'Community', links: ['Discord', 'Forums', 'Creators', 'Teams'] },
  { title: 'Company', links: ['About', 'Careers', 'Press Kit', 'Contact'] },
  { title: 'Support', links: ['Help Center', 'Fair Play', 'Privacy', 'Terms'] },
];

const socials = [Twitch, Youtube, Twitter, Instagram];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-neon-500/15 ring-1 ring-neon-500/40">
                <Gamepad2 className="h-5 w-5 text-neon-400" />
              </span>
              <span className="font-display text-xl font-extrabold tracking-widest text-white">
                NE<span className="text-neon-400">X</span>US
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              The competitive gaming platform for players who want to go pro. Train, compete, win.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#join"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-neon-500/40 hover:text-neon-400"
                  aria-label="Social link"
                >
                  <Icon className="h-5 w-5" />
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
                    <a href="#join" className="text-sm text-gray-400 transition-colors hover:text-neon-400">
                      {l}
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
