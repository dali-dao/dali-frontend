import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import Header from './Header';
import Landing from '../pages/Landing/Landing';
import Projects from '../pages/Project/Projects';
import ProjectDetail from '../pages/Project/ProjectDetail';
import Footer from './Footer';
import Design from '../pages/Design/Design';

function Layout() {
  return (
    <div>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project_detail" element={<ProjectDetail />} />
                <Route path="/design" element={<Design />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default Layout;
