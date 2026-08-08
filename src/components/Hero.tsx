import { Play, Users, Trophy, Zap, ChevronDown } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Active Players', value: '4.8M', color: 'text-cyan-400', glow: 'text-glow-cyan' },
  { icon: Trophy, label: 'Tournaments', value: '1,200+', color: 'text-gold-400', glow: 'text-glow-gold' },
  { icon: Zap, label: 'Matches / Day', value: '320K', color: 'text-volt-400', glow: 'text-glow-volt' },
];

const tickerItems = [
  'CYBER STRIKE 2087 — Season 7 LIVE',
  '$250K PRIZE POOL',
  'AETHER LEGENDS — Worlds Qualifier Open',
  'VELOCITY RUSH — Grand Circuit Finals Sep 14',
  'SHADOW PROTOCOL — Blackout Open #12',
  'NEON BRAWL — Weekly Fights Every Friday',
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24">
      {/* Animated aurora background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-neon-500/20 blur-[120px] aurora-blob" />
      <div className="absolute top-10 right-10 h-[360px] w-[360px] rounded-full bg-magenta-500/15 blur-[100px] aurora-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-10 h-[300px] w-[300px] rounded-full bg-cyan-500/15 blur-[100px] aurora-blob" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/3 left-1/2 h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-[100px] aurora-blob" style={{ animationDelay: '6s' }} />

      {/* Scan line */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-400/40 to-transparent animate-scan" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-magenta-500/40 bg-magenta-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-magenta-400 animate-pulse-glow">
              <span className="h-2 w-2 animate-pulse rounded-full bg-magenta-400" />
              LIVE NOW — Apex Invitational S7
            </span>

            <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              PLAY AT THE
              <br />
              <span className="animate-gradient-text bg-gradient-to-r from-neon-400 via-cyan-400 to-magenta-400">
                NEXT LEVEL
              </span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-400 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Join the arena where pro gamers compete, climb the ranks, and win real prizes. Compete in tournaments, track your stats, and rise on the global leaderboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a
                href="#join"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-neon-500 px-6 py-3.5 font-bold text-ink-950 shadow-neon-sm transition-all hover:shadow-neon"
              >
                <span className="absolute inset-0 shimmer-bg opacity-0 transition-opacity group-hover:opacity-100" />
                <Play className="h-5 w-5 fill-ink-950 transition-transform group-hover:scale-110" />
                <span className="relative">Start Playing</span>
              </a>
              <a
                href="#tournaments"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:shadow-cyan"
              >
                View Tournaments
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              {stats.map((s) => (
                <div key={s.label} className="group">
                  <dt className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-gray-500">
                    <s.icon className={`h-3.5 w-3.5 ${s.color} transition-transform group-hover:scale-125`} />
                    {s.label}
                  </dt>
                  <dd className={`mt-1 font-display text-2xl font-bold text-white transition-all group-hover:${s.color}`}>
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative hidden lg:block animate-bounce-in">
            <div className="relative animate-float">
              {/* Rotating gradient ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-neon-500 via-magenta-500 to-cyan-500 opacity-20 blur-2xl animate-gradient-x" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-neon-500/10">
                <img
                  src="https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Pro gaming setup"
                  className="h-[440px] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
                {/* Scan line over image */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="absolute inset-x-0 h-20 bg-gradient-to-b from-neon-400/10 to-transparent animate-scan" />
                </div>
              </div>

              {/* Floating prize card */}
              <div className="absolute -bottom-5 -left-5 rounded-xl border border-gold-500/40 bg-ink-900/90 p-4 backdrop-blur-xl shadow-gold animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-gold-500/15 animate-breathe">
                    <Trophy className="h-6 w-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Prize Pool</p>
                    <p className="font-display text-lg font-bold text-gold-400 text-glow-gold">$250,000</p>
                  </div>
                </div>
              </div>

              {/* Floating viewer card */}
              <div className="absolute -top-4 -right-4 rounded-xl border border-magenta-500/40 bg-ink-900/90 p-4 backdrop-blur-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-magenta-400" />
                  <span className="text-sm font-semibold text-white">12,480 watching</span>
                </div>
              </div>

              {/* Floating rank card */}
              <div className="absolute top-1/2 -right-6 rounded-xl border border-cyan-500/40 bg-ink-900/90 p-3 backdrop-blur-xl animate-float-slow" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-cyan-400" />
                  <span className="font-display text-sm font-bold text-cyan-400">RANK #1</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee ticker */}
        <div className="mt-16 overflow-hidden rounded-xl border border-white/10 bg-ink-900/60 py-3">
          <div className="flex w-max animate-marquee gap-8">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="flex items-center gap-3 whitespace-nowrap text-sm font-semibold text-gray-400">
                <span className="h-1.5 w-1.5 rounded-full bg-neon-400" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
