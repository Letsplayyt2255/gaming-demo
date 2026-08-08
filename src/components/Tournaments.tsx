import { Radio, Calendar, Trophy, Users } from 'lucide-react';
import { tournaments } from '@/data';
import { useReveal } from '@/hooks/useReveal';

const statusConfig = {
  live: {
    label: 'LIVE', cls: 'bg-magenta-500/15 text-magenta-400 ring-magenta-500/40',
    dot: 'bg-magenta-400', border: 'hover:border-magenta-500/50', glow: 'hover:shadow-magenta',
    bar: 'from-magenta-500 to-magenta-400',
  },
  registering: {
    label: 'OPEN', cls: 'bg-neon-500/15 text-neon-400 ring-neon-500/40',
    dot: 'bg-neon-400', border: 'hover:border-neon-500/50', glow: 'hover:shadow-neon',
    bar: 'from-neon-500 to-neon-400',
  },
  upcoming: {
    label: 'SOON', cls: 'bg-volt-500/15 text-volt-400 ring-volt-500/40',
    dot: 'bg-volt-400', border: 'hover:border-volt-500/50', glow: 'hover:shadow-volt',
    bar: 'from-volt-500 to-volt-400',
  },
} as const;

export default function Tournaments() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="tournaments" className="relative py-24">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute top-10 left-1/3 h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[100px] aurora-blob" style={{ animationDelay: '3s' }} />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="font-display text-sm font-bold tracking-widest text-cyan-400">COMPETE</p>
          <h2 className="mt-2 font-display text-4xl font-black text-white sm:text-5xl">
            <span className="animate-gradient-text bg-gradient-to-r from-cyan-400 via-neon-400 to-volt-400">Tournaments</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Register for live and upcoming events. Compete for cash prizes, ranking points, and glory.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid gap-5 lg:grid-cols-2 reveal ${visible ? 'in-view' : ''}`}
        >
          {tournaments.map((t, i) => {
            const s = statusConfig[t.status];
            const fill = Math.round((t.teams / t.maxTeams) * 100);
            return (
              <div
                key={t.id}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-6 transition-all duration-500 hover:-translate-y-1 ${s.border} ${s.glow}`}
              >
                {/* Animated gradient bar at top */}
                <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${s.bar} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ring-1 ${s.cls}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${s.dot} ${t.status === 'live' ? 'animate-pulse' : ''}`} />
                      {s.label}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold text-white transition-colors group-hover:text-cyan-400">{t.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{t.game}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-wider text-gray-500">Prize</p>
                    <p className="font-display text-2xl font-black text-gold-400 text-glow-gold transition-transform group-hover:scale-110">{t.prize}</p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-6 text-sm text-gray-400">
                  <span className="flex items-center gap-1.5 transition-color group-hover:text-cyan-400">
                    <Calendar className="h-4 w-4 text-gray-500 transition-color group-hover:text-cyan-400" />
                    {t.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-gray-500" />
                    {t.teams}/{t.maxTeams} teams
                  </span>
                </div>

                <div className="mt-4">
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${s.bar} transition-all duration-1000 group-hover:brightness-125`}
                      style={{ width: `${fill}%` }}
                    />
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  {t.status === 'live' ? (
                    <button className="group/btn inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-lg bg-magenta-500/15 py-2.5 text-sm font-bold text-magenta-400 ring-1 ring-magenta-500/30 transition-all hover:bg-magenta-500/25 hover:shadow-magenta">
                      <Radio className="h-4 w-4 animate-pulse" /> Watch Live
                    </button>
                  ) : (
                    <button className="group/btn inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-neon-500 to-cyan-500 py-2.5 text-sm font-bold text-ink-950 shadow-neon-sm transition-all hover:shadow-neon">
                      <Trophy className="h-4 w-4 transition-transform group-hover/btn:scale-110" /> Register
                    </button>
                  )}
                  <button className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-gray-300 transition-all hover:bg-white/10 hover:border-cyan-500/30">
                    Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
