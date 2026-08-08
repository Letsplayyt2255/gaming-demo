import { Zap, Shield, BarChart3, MessageSquare, Gamepad2, Trophy } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const features = [
  { icon: Zap, title: 'Low-Latency Servers', desc: 'Global edge servers deliver sub-20ms pings so your shots register the instant you click.', accent: 'neon', shadow: 'shadow-neon' },
  { icon: BarChart3, title: 'Deep Stat Tracking', desc: 'Every match, every clutch. Analyze your performance with pro-grade analytics dashboards.', accent: 'cyan', shadow: 'shadow-cyan' },
  { icon: Shield, title: 'Anti-Cheat Guard', desc: 'AI-powered detection and verified lobbies keep competition fair and skill-based.', accent: 'magenta', shadow: 'shadow-magenta' },
  { icon: MessageSquare, title: 'Team Chat & Voice', desc: 'Built-in voice channels and squad management tools keep your team in sync.', accent: 'blue', shadow: 'shadow-blue' },
  { icon: Gamepad2, title: 'Cross-Platform Play', desc: 'PC, console, or mobile — compete together on a unified competitive ladder.', accent: 'volt', shadow: 'shadow-volt' },
  { icon: Trophy, title: 'Real Cash Prizes', desc: 'Weekly and seasonal tournaments with over $2M in prizes paid out every year.', accent: 'gold', shadow: 'shadow-gold' },
];

const accentMap: Record<string, { text: string; bg: string; ring: string; shadow: string }> = {
  neon: { text: 'text-neon-400', bg: 'bg-neon-500/10', ring: 'ring-neon-500/30', shadow: 'shadow-neon' },
  cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', ring: 'ring-cyan-500/30', shadow: 'shadow-cyan' },
  magenta: { text: 'text-magenta-400', bg: 'bg-magenta-500/10', ring: 'ring-magenta-500/30', shadow: 'shadow-magenta' },
  blue: { text: 'text-blue-400', bg: 'bg-blue-500/10', ring: 'ring-blue-500/30', shadow: 'shadow-blue' },
  volt: { text: 'text-volt-400', bg: 'bg-volt-500/10', ring: 'ring-volt-500/30', shadow: 'shadow-volt' },
  gold: { text: 'text-gold-400', bg: 'bg-gold-500/10', ring: 'ring-gold-500/30', shadow: 'shadow-gold' },
};

export default function Features() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="community" className="relative py-24">
      <div className="absolute -top-20 left-0 h-[300px] w-[300px] rounded-full bg-neon-500/10 blur-[100px] aurora-blob" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px] aurora-blob" style={{ animationDelay: '4s' }} />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="font-display text-sm font-bold tracking-widest text-neon-400">WHY NEXUS</p>
          <h2 className="mt-2 font-display text-4xl font-black text-white sm:text-5xl">
            Built for <span className="animate-gradient-text bg-gradient-to-r from-neon-400 via-magenta-400 to-blue-400">serious competitors</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Everything you need to train, compete, and win — in one competitive platform.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 reveal ${visible ? 'in-view' : ''}`}
        >
          {features.map((f, i) => {
            const a = accentMap[f.accent];
            return (
              <div
                key={f.title}
                style={{ transitionDelay: `${i * 80}ms` }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
              >
                {/* Hover gradient wash */}
                <div className={`absolute inset-0 bg-gradient-to-br ${a.bg} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                <div className={`relative grid h-12 w-12 place-items-center rounded-xl ${a.bg} ring-1 ${a.ring} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:${a.shadow}`}>
                  <f.icon className={`h-6 w-6 ${a.text} transition-transform duration-500 group-hover:scale-110`} />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-bold text-white transition-colors group-hover:text-white">{f.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-gray-400">{f.desc}</p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r ${a.bg.replace('/10', '/60')} transition-all duration-500 group-hover:w-full`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
