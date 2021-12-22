import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from '../pages/Landing/MainPage'
import Landing from '../pages/Landing/Landing'
import Projects from '../pages/Project/Projects'
import ProjectDetail from '../pages/Project/ProjectDetail'
import Design from '../pages/Design/Design'
import Modals from '../pages/Modals'
import { useStyles } from './Style'

function Layout() {
  const classes = useStyles()

  return (
    <div className={classes.background}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/detail" element={<ProjectDetail />} />
          <Route path="/design" element={<Design />} />
          <Route path="/modals" element={<Modals />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Layout
