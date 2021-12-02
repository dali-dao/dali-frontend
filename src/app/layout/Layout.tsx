import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import Header from './Header';
import Landing from '../pages/Landing/Landing';
import Projects from '../pages/Project/Projects';
import Footer from './Footer';

function Layout() {
  return (
    <div>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default Layout;
