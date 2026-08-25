import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import AboutUs from './pages/AboutUs'
import WhyItWorksSection from './pages/WhyItWorks'
import WhoItsFor from './pages/WhoIsFor'
import StatsAndTrust from './pages/StatsandTrust'
import ProductBuy from './pages/ProductBuy'
import Footer from './pages/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <LandingPage />
        <AboutUs />
        <WhyItWorksSection />
        <WhoItsFor />
        <StatsAndTrust />
        <ProductBuy />
        <Footer />
      </main>
    </>
  )
}

export default App