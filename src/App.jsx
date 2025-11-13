import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Portfolio from "./pages/Portfolio";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

// Dynamic page titles
function PageTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const map = {
      "/": "Home",
      "/about": "About",
      "/blog": "Blog",
      "/portfolio": "Portfolio",
    };
    const current = map[pathname] || "Post";
    document.title = `${current} | Dalton`;
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageTitle />

      <div className="flex flex-col min-h-screen bg-[#1E2320]">
        <Header />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<Post />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
