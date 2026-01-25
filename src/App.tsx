import { Route, Routes } from "react-router";
import NotFound from "./components/Pages/NotFound/NotFound";
import Home from "./components/Pages/Home/Home";
import NavBar from "./components/Nav/NavBar";
import Projects from "./components/Pages/Projects/Projects";
import Blog from "./components/Pages/Blog/Blog";

function App() {
  return (
    <div className="flex justify-center bg-background-yellow h-screen">
      <div className="flex flex-row gap-5">
        {/*                                                               */}
        {/* might want to change it so navbar doesn't appear for NotFound */}
        {/*                                                               */}
        <NavBar />
        <div className="w-px mt-2.5 mb-2.5 bg-lines"></div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element="Hello" />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
