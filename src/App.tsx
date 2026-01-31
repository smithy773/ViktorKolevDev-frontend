import { Route, Routes } from "react-router";
import NotFound from "./components/Pages/NotFound/NotFound";
import Home from "./components/Pages/Home/Home";
import NavBar from "./components/Nav/NavBar";
import Projects from "./components/Pages/Projects/Projects";
import Blog from "./components/Pages/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import ContactMe from "./components/Pages/ContactMe/ContactMe";
import About from "./components/Pages/About/About";

function App() {
  return (
    <div className="flex justify-center bg-background-yellow h-screen text-stone">
      <div className="flex flex-row my-2.5">
        {/*                                                               */}
        {/* might want to change it so navbar doesn't appear for NotFound */}
        {/*                                                               */}
        <NavBar />
        <main className="border-l border-lines flex flex-col mx-4 px-4 w-4xl">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
