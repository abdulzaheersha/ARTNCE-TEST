import AIWorkspace from './components/AIWorkspace'
import BrowseArtwork from './components/BrowseArtwork'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Problem from './components/Problem'
import QuarterlyRefresh from './components/QuarterlyRefresh'
import StatementWipe from './components/StatementWipe'
import Subscription from './components/Subscription'
import TopNavBar from './components/TopNavBar'

export default function App() {
  return (
    <div className="font-body-lg text-on-surface bg-surface min-h-screen flex flex-col pt-6">
      <TopNavBar />
      <Hero />
      <Problem />
      <StatementWipe />
      <HowItWorks />
      <BrowseArtwork />
      <QuarterlyRefresh />
      <Subscription />
      <Pricing />
      <AIWorkspace />
      <Footer />
    </div>
  )
}
