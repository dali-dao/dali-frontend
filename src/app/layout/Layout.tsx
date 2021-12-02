import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import Header from './Header';
import Landing from '../pages/Landing';
import Footer from './Footer';

function Layout() {
  return (
    <div>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default Layout;
