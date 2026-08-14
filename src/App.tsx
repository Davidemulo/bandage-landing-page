import { AnnouncementBar } from './components/layout/AnnouncementBar/AnnouncementBar'
import { Header } from './components/layout/Header/Header'
import { Hero } from './components/Hero/Hero'
import { ProductSection } from './components/ProductSection/ProductSection'
import { Services } from './components/Services/Services'

function App() {
  return (
    <>
      <AnnouncementBar />

      <Header />

      <main>
        <Hero />

        <ProductSection />

        <Services />
      </main>
    </>
  )
}

export default App