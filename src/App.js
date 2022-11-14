import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./common/ErrorBoundary";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollTop";
import Sidebar from "./components/Sidebar/Sidebar";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <Router>
      <ErrorBoundary>
        <ScrollToTop smooth />
        <Navbar onShowSidebar={handleSidebar} />
        {showSidebar && <Sidebar />}

        <div className='app'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/blogs' element={<Blogs />} />
          </Routes>
        </div>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
