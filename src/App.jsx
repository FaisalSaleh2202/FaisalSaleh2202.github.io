import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CvPage from "./pages/CvPage";
import NotFoundPage from "./pages/NotFoundPage";
import RepositoriesPage from "./pages/RepositoriesPage";
import ExperiencePage from "./pages/ExperiencePage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  return (
    <div className="min-h-screen bg-ink text-copy">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<RepositoriesPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
