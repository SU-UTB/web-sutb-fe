import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/pages/HomePage";
import About from "./components/pages/AboutPage";
import News from "./components/pages/NewsPage";
import Contact from "./components/pages/ContactPage";
import Projects from "./components/pages/ProjectsPage";

function App(): JSX.Element {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contact />} /> */}
          {/* <Route path="*" element={<h1>404 - <span>Tato stránka neexistuje</span></h1>} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
