import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TileGrid from "./components/TileGrid";
import DetailView from "./components/DetailView";
import Footer from "./components/Footer";
import subsidiaries from "./data/subsidiaries";

function App() {
  const [activeSubsidiary, setActiveSubsidiary] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("livenza-dark-mode");
    if (stored !== null) return stored === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("livenza-dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const handleTileClick = (subsidiary) => {
    setActiveSubsidiary(subsidiary);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setActiveSubsidiary(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFC] dark:bg-[#0B0F1A] transition-colors duration-500">
      <Navbar
        activeSubsidiary={activeSubsidiary}
        onBack={handleBack}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activeSubsidiary ? (
            <DetailView
              key="detail"
              subsidiary={activeSubsidiary}
              onBack={handleBack}
            />
          ) : (
            <div key="landing">
              <Hero />
              <TileGrid
                subsidiaries={subsidiaries}
                onTileClick={handleTileClick}
              />
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
