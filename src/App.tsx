import { AnnouncementBar } from './components/layout/AnnouncementBar/AnnouncementBar'
import { Header } from './components/layout/Header/Header'
import { Hero } from './components/Hero/Hero'
import { ProductSection } from './components/ProductSection/ProductSection'
import { Services } from './components/Services/Services'
import { FeaturedPosts } from './components/FeaturedPosts/FeaturedPosts'

function App() {
  return (
    <>
      <AnnouncementBar />

      <Header />

      <main>
        <Hero />

        <ProductSection />

        <Services />
        
        <FeaturedPosts />
      </main>
    </>
  )
}

export default App