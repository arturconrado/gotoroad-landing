import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import MarketSection from '@/components/MarketSection';
import BusinessModelSection from '@/components/BusinessModelSection';
import MvpSection from '@/components/MvpSection';
import TractionSection from '@/components/TractionSection';
import TeamSection from '@/components/TeamSection';
import InvestmentSection from '@/components/InvestmentSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <MarketSection />
      <BusinessModelSection />
      <MvpSection />
      <TractionSection />
      <TeamSection />
      <InvestmentSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

