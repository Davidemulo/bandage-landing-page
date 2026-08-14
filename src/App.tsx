// import { AnnouncementBar } from './components/layout/AnnouncementBar/AnnouncementBar'
// import { Header } from './components/layout/Header/Header'

// function App() {
//   return (
//     <>
//       <AnnouncementBar />
//       <Header />

//       <main>
//         <section className="section">
//           <div className="container">
//             <h1>E-Commerce Landing Page</h1>
//           </div>
//         </section>
//       </main>
//     </>
//   )
// }

// export default App

import { useGetProductsQuery } from './services/productsApi'

import { AnnouncementBar } from './components/layout/AnnouncementBar/AnnouncementBar'
import { Header } from './components/layout/Header/Header'
import { Hero } from './components/Hero/Hero'

function App() {
  const {
    data,
    isLoading,
    isError,
  } = useGetProductsQuery()

  console.log('Products:', data)

  return (
    <>
      <AnnouncementBar />

      <Header />

      <main>
        <Hero />

        <p>
          {isLoading
            ? 'Loading products...'
            : isError
              ? 'Failed to load products.'
              : `Products loaded: ${data?.products.length ?? 0}`}
        </p>
      </main>
    </>
  )
}

export default App
 