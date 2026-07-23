import { Trophy, TrendingUp } from 'lucide-react';
import { leaderboard } from '@/data';

const medalColor = (rank: number) => {
  if (rank === 1) return 'from-volt-500 to-volt-600 text-ink-950';
  if (rank === 2) return 'from-gray-200 to-gray-400 text-ink-950';
  if (rank === 3) return 'from-amber-600 to-amber-800 text-white';
  return 'from-ink-600 to-ink-700 text-gray-300';
};

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-sm font-bold tracking-widest text-neon-400">RANKINGS</p>
            <h2 className="mt-2 font-display text-4xl font-black text-white sm:text-5xl">Global Leaderboard</h2>
          </div>
          <div className="flex gap-2">
            {['Weekly', 'Monthly', 'All Time'].map((t, i) => (
              <button
                key={t}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                  i === 2 ? 'bg-neon-500/15 text-neon-400 ring-1 ring-neon-500/30' : 'text-gray-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800">
          <div className="grid grid-cols-12 gap-4 border-b border-white/10 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
            <div className="col-span-1">Rank</div>
            <div className="col-span-5 sm:col-span-4">Player</div>
            <div className="hidden col-span-2 sm:block">Team</div>
            <div className="col-span-3 sm:col-span-2 text-right">Points</div>
            <div className="col-span-3 sm:col-span-3 text-right">Win Rate</div>
          </div>

          {leaderboard.map((p) => (
            <div
              key={p.rank}
              className="grid grid-cols-12 items-center gap-4 border-b border-white/5 px-6 py-4 transition-colors last:border-0 hover:bg-white/5"
            >
              <div className="col-span-1">
                <span className={`grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br font-display text-sm font-black ${medalColor(p.rank)}`}>
                  {p.rank}
                </span>
              </div>
              <div className="col-span-5 sm:col-span-4">
                <div className="flex items-center gap-3">
                  <img src={p.avatar} alt={p.name} className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" />
                  <div>
                    <p className="font-semibold text-white">{p.name}</p>
                    <p className="text-xs text-gray-500 sm:hidden">{p.team}</p>
                  </div>
                </div>
              </div>
              <div className="hidden col-span-2 sm:block">
                <span className="text-sm text-gray-300">{p.team}</span>
              </div>
              <div className="col-span-3 sm:col-span-2 text-right">
                <span className="font-display font-bold text-white">{p.points.toLocaleString()}</span>
              </div>
              <div className="col-span-3 sm:col-span-3">
                <div className="flex items-center justify-end gap-2">
                  <div className="hidden h-1.5 w-20 overflow-hidden rounded-full bg-white/10 sm:block">
                    <div className="h-full rounded-full bg-neon-500" style={{ width: `${p.winRate}%` }} />
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
          <Trophy className="h-4 w-4 text-neon-400" />
          Updated in real time — top 100 players earn seasonal rewards
        </div>
      </div>
    </section>
  );
}
