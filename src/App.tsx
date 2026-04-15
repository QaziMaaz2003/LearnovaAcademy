import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Tutors from './pages/Tutors'
import Notes from './pages/Notes'
import Forum from './pages/Forum'
import Login from './pages/Login'
import Signup from './pages/Signup'
import TutorDashboard from './pages/TutorDashboard'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top immediately on route change
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])

  return null
}

function AppLayout() {
  const { pathname } = useLocation()
  const isTutorDashboard = pathname === '/tutor-dashboard'

  return (
    <div className="app">
      {!isTutorDashboard && <Navbar />}
      <main className={isTutorDashboard ? '' : 'main-content'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tutor-dashboard" element={<TutorDashboard />} />
        </Routes>
      </main>
      {!isTutorDashboard && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  )
}

export default App
