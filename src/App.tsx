import { Header } from './components/layout/Header/Header'
import { Hero } from './sections/Hero/Hero'
import { ProductSection } from './sections/ProductSection/ProductSection'
import { Services } from './sections/Services/Services'
import { FeaturedPosts } from './features/posts/FeaturedPosts/FeaturedPosts'
import { Testimonials } from './sections/Testimonials/Testimonials'
import { CtaSection } from './sections/CtaSection/CtaSection'
import { Footer } from './components/layout/Footer/Footer'
import { BasketModal } from './components/common/BasketModal/BasketModal'

function App() {
  return (
    <>

      <Header />

      <main>
        <Hero />

        <ProductSection />

        <BasketModal />

        <Services />
        
        <FeaturedPosts />

        <Testimonials />
        
        <CtaSection />
      </main>

      <Footer />
    </>
  )
}

export default App