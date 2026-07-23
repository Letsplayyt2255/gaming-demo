import { Zap, Shield, BarChart3, MessageSquare, Gamepad2, Trophy } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Low-Latency Servers',
    desc: 'Global edge servers deliver sub-20ms pings so your shots register the instant you click.',
  },
  {
    icon: BarChart3,
    title: 'Deep Stat Tracking',
    desc: 'Every match, every clutch. Analyze your performance with pro-grade analytics dashboards.',
  },
  {
    icon: Shield,
    title: 'Anti-Cheat Guard',
    desc: 'AI-powered detection and verified lobbies keep competition fair and skill-based.',
  },
  {
    icon: MessageSquare,
    title: 'Team Chat & Voice',
    desc: 'Built-in voice channels and squad management tools keep your team in sync.',
  },
  {
    icon: Gamepad2,
    title: 'Cross-Platform Play',
    desc: 'PC, console, or mobile — compete together on a unified competitive ladder.',
  },
  {
    icon: Trophy,
    title: 'Real Cash Prizes',
    desc: 'Weekly and seasonal tournaments with over $2M in prizes paid out every year.',
  },
];

export default function Features() {
  return (
    <section id="community" className="relative py-24">
      <div className="absolute -top-20 left-0 h-[300px] w-[300px] rounded-full bg-neon-500/10 blur-[100px]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="font-display text-sm font-bold tracking-widest text-neon-400">WHY NEXUS</p>
          <h2 className="mt-2 font-display text-4xl font-black text-white sm:text-5xl">
            Built for serious competitors
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Everything you need to train, compete, and win — in one competitive platform.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-ink-800 p-6 transition-all hover:-translate-y-1 hover:border-neon-500/40 hover:bg-ink-700"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-neon-500/10 ring-1 ring-neon-500/30 transition-all group-hover:bg-neon-500/20 group-hover:shadow-neon-sm">
                <f.icon className="h-6 w-6 text-neon-400" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
