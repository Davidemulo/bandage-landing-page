import { AnnouncementBar } from './components/layout/AnnouncementBar/AnnouncementBar'
import { Header } from './components/layout/Header/Header'
import { Hero } from './components/Hero/Hero'
import { ProductSection } from './components/ProductSection/ProductSection'

function App() {
  return (
    <>
      <AnnouncementBar />

      <Header />

      <main>
        <Hero />

        <ProductSection />
      </main>
    </>
  )
}

export default App