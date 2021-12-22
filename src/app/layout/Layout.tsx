import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import MainPage from '../pages/Landing/MainPage'
import Landing from '../pages/Landing/Landing'
import Projects from '../pages/Project/Projects'
import ProjectDetail from '../pages/Project/ProjectDetail'
import Footer from './Footer'
import Design from '../pages/Design/Design'
import Modals from '../pages/Modals'

function Layout() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/detail" element={<ProjectDetail />} />
          <Route path="/design" element={<Design />} />
          <Route path="/modals" element={<Modals />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default Layout
