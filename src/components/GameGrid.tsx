import { Star, Users } from 'lucide-react';
import { games } from '@/data';

const accentMap: Record<string, { ring: string; text: string; bg: string; shadow: string }> = {
  neon: { ring: 'group-hover:border-neon-500/60', text: 'text-neon-400', bg: 'bg-neon-500/10', shadow: 'group-hover:shadow-neon-sm' },
  magenta: { ring: 'group-hover:border-magenta-500/60', text: 'text-magenta-400', bg: 'bg-magenta-500/10', shadow: 'group-hover:shadow-[0_0_20px_rgba(255,60,163,0.3)]' },
  volt: { ring: 'group-hover:border-volt-500/60', text: 'text-volt-400', bg: 'bg-volt-500/10', shadow: 'group-hover:shadow-volt' },
};

export default function GameGrid() {
  return (
    <section id="games" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-sm font-bold tracking-widest text-neon-400">FEATURED</p>
            <h2 className="mt-2 font-display text-4xl font-black text-white sm:text-5xl">Top Games</h2>
          </div>
          <a href="#join" className="text-sm font-semibold text-gray-400 transition-colors hover:text-neon-400">
            Browse all games →
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g) => {
            const a = accentMap[g.accent];
            return (
              <article
                key={g.id}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 transition-all duration-300 hover:-translate-y-1 ${a.ring} ${a.shadow}`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={g.image}
                    alt={g.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/30 to-transparent" />
                  <span className={`absolute right-3 top-3 rounded-full ${a.bg} px-3 py-1 text-xs font-bold ${a.text} ring-1 ring-white/10`}>
                    {g.genre}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-white">{g.title}</h3>

                  <div className="mt-3 flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-volt-500 text-volt-500" />
                      <span className="font-semibold text-white">{g.rating}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {g.players}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.tags.map((t) => (
                      <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300 ring-1 ring-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button className={`mt-5 w-full rounded-lg ${a.bg} py-2.5 text-sm font-bold ${a.text} ring-1 ring-white/10 transition-all hover:bg-white/10`}>
                    Play Now
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
