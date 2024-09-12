import { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import ThankYou from "./ThankYou";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulating loading time
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <main className="container mx-auto px-4 lg:px-64 py-8 animate-fadeIn">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Hero darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <ThankYou darkMode={darkMode} />
          </main>
        </>
      )}
    </div>
  );
}
