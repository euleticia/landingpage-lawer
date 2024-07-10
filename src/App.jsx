import { useState, useEffect } from 'react'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Footer } from './components/footer'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import { Contact } from './components/contact'
import WhatsAppButton from './components/WhatsappButton'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <WhatsAppButton/>
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      <Contact data={landingPageData.Contact}/>
      <Footer />
    </div>
  )
}

export default App
