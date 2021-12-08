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
import Modals from '../pages/Modals';
// import { UseWalletProvider } from "use-wallet";

function Layout() {
  return (
    <div>
      {/* <UseWalletProvider
        chainId={56}
        connectors={{
          walletconnect: { rpcUrl: "https://rinkeby.etherscan.io" },
        }}
      > */}
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/detail" element={<ProjectDetail />} />
                <Route path="/design" element={<Design />} />
                <Route path="/modals" element={<Modals />} />
            </Routes>
            <Footer />
        </Router>
      {/* </UseWalletProvider> */}
    </div>
  );
}

export default Layout;
