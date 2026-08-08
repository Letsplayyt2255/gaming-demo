import { Star, Users } from 'lucide-react';
import { games } from '@/data';
import { useReveal } from '@/hooks/useReveal';

const accentMap: Record<string, {
  ring: string; text: string; bg: string; shadow: string; gradient: string; glow: string;
}> = {
  neon: {
    ring: 'group-hover:border-neon-500/60', text: 'text-neon-400', bg: 'bg-neon-500/10',
    shadow: 'group-hover:shadow-neon', gradient: 'from-neon-500/20', glow: 'text-glow',
  },
  magenta: {
    ring: 'group-hover:border-magenta-500/60', text: 'text-magenta-400', bg: 'bg-magenta-500/10',
    shadow: 'group-hover:shadow-magenta', gradient: 'from-magenta-500/20', glow: 'text-glow-magenta',
  },
  volt: {
    ring: 'group-hover:border-volt-500/60', text: 'text-volt-400', bg: 'bg-volt-500/10',
    shadow: 'group-hover:shadow-volt', gradient: 'from-volt-500/20', glow: 'text-glow-volt',
  },
  cyan: {
    ring: 'group-hover:border-cyan-500/60', text: 'text-cyan-400', bg: 'bg-cyan-500/10',
    shadow: 'group-hover:shadow-cyan', gradient: 'from-cyan-500/20', glow: 'text-glow-cyan',
  },
  orange: {
    ring: 'group-hover:border-orange-500/60', text: 'text-orange-400', bg: 'bg-orange-500/10',
    shadow: 'group-hover:shadow-orange', gradient: 'from-orange-500/20', glow: '',
  },
  blue: {
    ring: 'group-hover:border-blue-500/60', text: 'text-blue-400', bg: 'bg-blue-500/10',
    shadow: 'group-hover:shadow-blue', gradient: 'from-blue-500/20', glow: '',
  },
};

export default function GameGrid() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="games" className="relative py-24">
      <div className="absolute top-20 right-0 h-[300px] w-[300px] rounded-full bg-magenta-500/10 blur-[100px] aurora-blob" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-sm font-bold tracking-widest text-neon-400">FEATURED</p>
            <h2 className="mt-2 font-display text-4xl font-black text-white sm:text-5xl">
              Top <span className="animate-gradient-text bg-gradient-to-r from-neon-400 via-cyan-400 to-magenta-400">Games</span>
            </h2>
          </div>
          <a href="#join" className="group text-sm font-semibold text-gray-400 transition-colors hover:text-neon-400">
            Browse all games
            <span className="inline-block transition-transform group-hover:translate-x-1"> →</span>
          </a>
        </div>

        <div
          ref={ref}
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal ${visible ? 'in-view' : ''}`}
        >
          {games.map((g, i) => {
            const a = accentMap[g.accent] ?? accentMap.neon;
            return (
              <article
                key={g.id}
                style={{ transitionDelay: `${i * 80}ms` }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 transition-all duration-500 hover:-translate-y-2 ${a.ring} ${a.shadow}`}
              >
                {/* Gradient glow on hover */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${a.gradient} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                <div className="relative h-52 overflow-hidden">
                  <img
                    src={g.image}
                    alt={g.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/20 to-transparent" />
                  <span className={`absolute right-3 top-3 rounded-full ${a.bg} px-3 py-1 text-xs font-bold ${a.text} ring-1 ring-white/10 backdrop-blur-sm`}>
                    {g.genre}
                  </span>
                  {/* Shimmer sweep on image */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[300%]" />
                  </div>
                </div>

                <div className="relative p-5">
                  <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-neon-400">{g.title}</h3>

                  <div className="mt-3 flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-gold-500 text-gold-500 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                      <span className="font-semibold text-white">{g.rating}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4 transition-color group-hover:text-cyan-400" />
                      {g.players}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.tags.map((t) => (
                      <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300 ring-1 ring-white/10 transition-all group-hover:bg-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button className={`mt-5 w-full rounded-lg ${a.bg} py-2.5 text-sm font-bold ${a.text} ring-1 ring-white/10 transition-all hover:bg-white/10 hover:shadow-neon-sm`}>
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
