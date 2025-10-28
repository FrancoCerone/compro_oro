import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Layout Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import ComproOro from './pages/ComproOro'
import ComproArgento from './pages/ComproArgento'
import Gioielli from './pages/Gioielli'
import Orologi from './pages/Orologi'
import Valutazione from './pages/Valutazione'
import Contatti from './pages/Contatti'

// ScrollToTop component to handle scroll behavior on route changes
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function AppContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compro-oro" element={<ComproOro />} />
          <Route path="/compro-argento" element={<ComproArgento />} />
          <Route path="/gioielli" element={<Gioielli />} />
          <Route path="/orologi" element={<Orologi />} />
          <Route path="/valutazione" element={<Valutazione />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

