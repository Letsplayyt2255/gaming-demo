import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GameGrid from '@/components/GameGrid';
import Tournaments from '@/components/Tournaments';
import Leaderboard from '@/components/Leaderboard';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <GameGrid />
        <Tournaments />
        <Leaderboard />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
