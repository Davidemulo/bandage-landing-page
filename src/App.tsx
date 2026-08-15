import { AnnouncementBar } from './components/layout/AnnouncementBar/AnnouncementBar'
import { Header } from './components/layout/Header/Header'
import { Hero } from './components/Hero/Hero'
import { ProductSection } from './components/ProductSection/ProductSection'
import { Services } from './components/Services/Services'
import { FeaturedPosts } from './components/FeaturedPosts/FeaturedPosts'
import { Testimonials } from './components/Testimonials/Testimonials'
import { CtaSection } from './components/CtaSection/CtaSection'

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

        <Testimonials />
        
        <CtaSection />
      </main>
    </>
  )
}

export default App