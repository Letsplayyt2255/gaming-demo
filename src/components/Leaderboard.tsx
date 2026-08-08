import { Trophy, TrendingUp, Crown } from 'lucide-react';
import { leaderboard } from '@/data';
import { useReveal } from '@/hooks/useReveal';

const medalColor = (rank: number) => {
  if (rank === 1) return 'from-gold-400 to-gold-600 text-ink-950';
  if (rank === 2) return 'from-gray-200 to-gray-400 text-ink-950';
  if (rank === 3) return 'from-orange-400 to-orange-600 text-white';
  return 'from-ink-600 to-ink-700 text-gray-300';
};

const rowAccent = (rank: number) => {
  if (rank === 1) return 'hover:bg-gold-500/5 hover:border-l-gold-500';
  if (rank === 2) return 'hover:bg-cyan-500/5 hover:border-l-cyan-500';
  if (rank === 3) return 'hover:bg-orange-500/5 hover:border-l-orange-500';
  return 'hover:bg-white/5 hover:border-l-neon-500';
};

export default function Leaderboard() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="leaderboard" className="relative py-24">
      <div className="absolute top-0 right-1/4 h-[320px] w-[320px] rounded-full bg-gold-500/8 blur-[100px] aurora-blob" style={{ animationDelay: '5s' }} />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-sm font-bold tracking-widest text-gold-400">RANKINGS</p>
            <h2 className="mt-2 font-display text-4xl font-black text-white sm:text-5xl">
              Global <span className="animate-gradient-text bg-gradient-to-r from-gold-400 via-orange-400 to-magenta-400">Leaderboard</span>
            </h2>
          </div>
          <div className="flex gap-2">
            {['Weekly', 'Monthly', 'All Time'].map((t, i) => (
              <button
                key={t}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                  i === 2
                    ? 'bg-gradient-to-r from-gold-500/20 to-orange-500/20 text-gold-400 ring-1 ring-gold-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={ref}
          className={`overflow-hidden rounded-2xl border border-white/10 bg-ink-800 reveal ${visible ? 'in-view' : ''}`}
        >
          <div className="grid grid-cols-12 gap-4 border-b border-white/10 bg-ink-900/50 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
            <div className="col-span-1">Rank</div>
            <div className="col-span-5 sm:col-span-4">Player</div>
            <div className="hidden col-span-2 sm:block">Team</div>
            <div className="col-span-3 sm:col-span-2 text-right">Points</div>
            <div className="col-span-3 sm:col-span-3 text-right">Win Rate</div>
          </div>

          {leaderboard.map((p, i) => (
            <div
              key={p.rank}
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`grid grid-cols-12 items-center gap-4 border-b border-white/5 border-l-2 border-l-transparent px-6 py-4 transition-all duration-300 last:border-0 ${rowAccent(p.rank)}`}
            >
              <div className="col-span-1">
                <span className={`relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br font-display text-sm font-black ${medalColor(p.rank)} transition-transform hover:scale-110`}>
                  {p.rank}
                  {p.rank === 1 && (
                    <Crown className="absolute -top-2.5 left-1/2 h-3.5 w-3.5 -translate-x-1/2 text-gold-400 animate-float" />
                  )}
                </span>
              </div>
              <div className="col-span-5 sm:col-span-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img src={p.avatar} alt={p.name} className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10 transition-all hover:ring-neon-500/50" />
                    {p.rank <= 3 && (
                      <span className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full ring-2 ring-ink-800 ${
                        p.rank === 1 ? 'bg-gold-400' : p.rank === 2 ? 'bg-cyan-400' : 'bg-orange-400'
                      }`} />
                    )}
                  </div>
                  <div>
                    <p className={`font-semibold transition-colors ${p.rank === 1 ? 'text-gold-400' : 'text-white'}`}>{p.name}</p>
                    <p className="text-xs text-gray-500 sm:hidden">{p.team}</p>
                  </div>
                </div>
              </div>
              <div className="hidden col-span-2 sm:block">
                <span className="text-sm text-gray-300">{p.team}</span>
              </div>
              <div className="col-span-3 sm:col-span-2 text-right">
                <span className="font-display font-bold text-white transition-colors hover:text-neon-400">{p.points.toLocaleString()}</span>
              </div>
              <div className="col-span-3 sm:col-span-3">
                <div className="flex items-center justify-end gap-2">
                  <div className="hidden h-1.5 w-20 overflow-hidden rounded-full bg-white/10 sm:block">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-neon-500 to-cyan-400 transition-all duration-700"
                      style={{ width: `${p.winRate}%` }}
                    />
                  </div>
                  <span className="flex items-center gap-1 text-sm font-semibold text-neon-400">
                    <TrendingUp className="h-3.5 w-3.5" />
                    {p.winRate}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
          <Trophy className="h-4 w-4 text-gold-400 animate-breathe" />
          Updated in real time — top 100 players earn seasonal rewards
        </div>
      </div>
    </section>
  );
}
