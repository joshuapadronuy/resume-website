import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Projects from "./routes/projects/projects.component";
import About from "./routes/about/about.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="my-projects" element={<Projects />} />
        <Route path="about-me" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
