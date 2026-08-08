import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

const perks = ['Compete in ranked matches', 'Join free tournaments', 'Track your stats', 'Access community servers'];

export default function CTA() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="join" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-neon-500/30 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-10 sm:p-14">
          {/* Animated rainbow grid */}
          <div className="absolute inset-0 grid-bg-rainbow opacity-30" />

          {/* Multiple aurora blobs */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-neon-500/20 blur-[80px] aurora-blob" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-magenta-500/15 blur-[80px] aurora-blob" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[80px] aurora-blob" style={{ animationDelay: '6s' }} />

          {/* Rotating conic gradient ring */}
          <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gradient-conic from-neon-500 via-magenta-500 to-cyan-500 opacity-10 blur-2xl animate-gradient-rotate" />

          <div className="relative text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold text-gold-400 animate-pulse-glow">
              <Sparkles className="h-3.5 w-3.5 animate-wiggle" />
              Free Forever — No Credit Card
            </span>

            <h2 className="mt-6 font-display text-4xl font-black text-white sm:text-5xl">
              Ready to <span className="animate-gradient-text bg-gradient-to-r from-neon-400 via-cyan-400 to-magenta-400">compete?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-gray-400">
              Create your free account and start climbing the ranks today. No credit card required.
            </p>

            <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2">
              {perks.map((p, i) => (
                <li
                  key={p}
                  className="flex items-center gap-2 text-sm text-gray-300 animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-neon-500/15">
                    <Check className="h-3 w-3 text-neon-400" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <form onSubmit={submit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 rounded-xl border border-white/15 bg-ink-950/60 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-all focus:border-neon-500/60 focus:ring-2 focus:ring-neon-500/20"
              />
              <button
                type="submit"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-neon-500 to-cyan-500 px-6 py-3.5 font-bold text-ink-950 shadow-neon-sm transition-all hover:shadow-neon"
              >
                <span className="absolute inset-0 shimmer-bg opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">{sent ? 'Welcome!' : 'Join Free'}</span>
              </button>
            </form>
            {sent && (
              <p className="mt-3 animate-bounce-in text-sm text-neon-400">Check your inbox to finish setting up your account.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
