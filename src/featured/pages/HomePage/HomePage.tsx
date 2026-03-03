import Navigation from '@/components/sections/Navigation/Navigation'
import HeroSection from '@/components/sections/HeroSection/HeroSection'
import CVSection from '@/components/sections/CVSection/CVSection'
import PortfolioSection from '@/components/sections/PortfolioSection/PortfolioSection'
import ContactSection from '@/components/sections/ContactSection/ContactSection'
import Footer from '@/components/sections/Footer/Footer'

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <CVSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
