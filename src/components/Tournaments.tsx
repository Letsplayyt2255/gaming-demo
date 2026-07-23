import { Radio, Calendar, Trophy, Users } from 'lucide-react';
import { tournaments } from '@/data';

const statusConfig = {
  live: { label: 'LIVE', cls: 'bg-magenta-500/15 text-magenta-400 ring-magenta-500/40', dot: 'bg-magenta-400' },
  registering: { label: 'OPEN', cls: 'bg-neon-500/15 text-neon-400 ring-neon-500/40', dot: 'bg-neon-400' },
  upcoming: { label: 'SOON', cls: 'bg-volt-500/15 text-volt-400 ring-volt-500/40', dot: 'bg-volt-400' },
} as const;

export default function Tournaments() {
  return (
    <section id="tournaments" className="relative py-24">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-neon-500/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="font-display text-sm font-bold tracking-widest text-neon-400">COMPETE</p>
          <h2 className="mt-2 font-display text-4xl font-black text-white sm:text-5xl">Tournaments</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Register for live and upcoming events. Compete for cash prizes, ranking points, and glory.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {tournaments.map((t) => {
            const s = statusConfig[t.status];
            const fill = Math.round((t.teams / t.maxTeams) * 100);
            return (
              <div
                key={t.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-6 transition-all hover:border-neon-500/40 hover:bg-ink-700"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ring-1 ${s.cls}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${s.dot} ${t.status === 'live' ? 'animate-pulse' : ''}`} />
                      {s.label}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold text-white">{t.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{t.game}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-wider text-gray-500">Prize</p>
                    <p className="font-display text-2xl font-black text-neon-400 text-glow">{t.prize}</p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-6 text-sm text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    {t.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-gray-500" />
                    {t.teams}/{t.maxTeams} teams
                  </span>
                </div>

                <div className="mt-4">
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-neon-500 to-neon-400" style={{ width: `${fill}%` }} />
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  {t.status === 'live' ? (
                    <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-magenta-500/15 py-2.5 text-sm font-bold text-magenta-400 ring-1 ring-magenta-500/30 transition-all hover:bg-magenta-500/25">
                      <Radio className="h-4 w-4" /> Watch Live
                    </button>
                  ) : (
                    <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-neon-500 py-2.5 text-sm font-bold text-ink-950 shadow-neon-sm transition-all hover:bg-neon-400 hover:shadow-neon">
                      <Trophy className="h-4 w-4" /> Register
                    </button>
                  )}
                  <button className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-gray-300 transition-colors hover:bg-white/10">
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
