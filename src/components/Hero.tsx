import { Play, Users, Trophy, Zap } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Active Players', value: '4.8M' },
  { icon: Trophy, label: 'Tournaments', value: '1,200+' },
  { icon: Zap, label: 'Matches / Day', value: '320K' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-neon-500/20 blur-[120px]" />
      <div className="absolute top-20 right-0 h-[320px] w-[320px] rounded-full bg-magenta-500/15 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-neon-500/30 bg-neon-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-neon-300">
              <span className="h-2 w-2 animate-pulse-glow rounded-full bg-neon-400" />
              LIVE NOW — Apex Invitational S7
            </span>

            <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              PLAY AT THE
              <br />
              <span className="text-neon-400 text-glow">NEXT LEVEL</span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-400">
              Join the arena where pro gamers compete, climb the ranks, and win real prizes. Compete in tournaments, track your stats, and rise on the global leaderboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#join"
                className="group inline-flex items-center gap-2 rounded-xl bg-neon-500 px-6 py-3.5 font-bold text-ink-950 shadow-neon-sm transition-all hover:bg-neon-400 hover:shadow-neon"
              >
                <Play className="h-5 w-5 fill-ink-950" />
                Start Playing
              </a>
              <a
                href="#tournaments"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition-all hover:border-neon-500/50 hover:bg-neon-500/10"
              >
                View Tournaments
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-gray-500">
                    <s.icon className="h-3.5 w-3.5 text-neon-400" />
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-white">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-neon-500/10">
                <img
                  src="https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Pro gaming setup"
                  className="h-[440px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-5 -left-5 rounded-xl border border-neon-500/30 bg-ink-900/90 p-4 backdrop-blur-xl shadow-neon-sm">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-neon-500/15">
                    <Trophy className="h-6 w-6 text-neon-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Prize Pool</p>
                    <p className="font-display text-lg font-bold text-white">$250,000</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 rounded-xl border border-magenta-500/30 bg-ink-900/90 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-magenta-400" />
                  <span className="text-sm font-semibold text-white">12,480 watching</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
