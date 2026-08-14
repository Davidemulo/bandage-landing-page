import { AnnouncementBar } from './components/layout/AnnouncementBar/AnnouncementBar'
import { Header } from './components/layout/Header/Header'

function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />

      <main>
        <section className="section">
          <div className="container">
            <h1>E-Commerce Landing Page</h1>
          </div>
        </section>
      </main>
    </>
  )
}

export default App