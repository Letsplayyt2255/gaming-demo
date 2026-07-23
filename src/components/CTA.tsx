import { useState } from 'react';
import { Check } from 'lucide-react';

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
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-neon-500/20 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-magenta-500/15 blur-[80px]" />

          <div className="relative text-center">
            <h2 className="font-display text-4xl font-black text-white sm:text-5xl">
              Ready to <span className="text-neon-400 text-glow">compete?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-gray-400">
              Create your free account and start climbing the ranks today. No credit card required.
            </p>

            <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="h-4 w-4 text-neon-400" />
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
                className="rounded-xl bg-neon-500 px-6 py-3.5 font-bold text-ink-950 shadow-neon-sm transition-all hover:bg-neon-400 hover:shadow-neon"
              >
                {sent ? 'Welcome!' : 'Join Free'}
              </button>
            </form>
            {sent && (
              <p className="mt-3 text-sm text-neon-400">Check your inbox to finish setting up your account.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
