import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import ContactSection from "./components/ContactSection";
import DetailView from "./components/DetailView";
import Footer from "./components/Footer";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import { auth, db } from "./firebase";
import defaultSubsidiaries from "./data/subsidiaries";

function App() {
  const [activeSubsidiary, setActiveSubsidiary] = useState(null);
  const [subsidiaries, setSubsidiaries] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [user, setUser] = useState(null);
  
  // Routing state
  const [currentView, setCurrentView] = useState("main"); // "main" | "admin"

  // Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchSubsidiaries = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "subsidiaries"));
        
        if (querySnapshot.empty) {
          // Seed database if empty
          console.log("Seeding database with default subsidiaries...");
          const seedPromises = defaultSubsidiaries.map((sub) => 
            setDoc(doc(db, "subsidiaries", sub.id), sub)
          );
          await Promise.all(seedPromises);
          setSubsidiaries(defaultSubsidiaries);
        } else {
          const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setSubsidiaries(fetchedData);
        }
      } catch (error) {
        console.error("Error fetching subsidiaries:", error);
        // Fallback to static data if Firestore is not configured yet
        setSubsidiaries(defaultSubsidiaries);
      } finally {
        setLoadingData(false);
      }
    };

    fetchSubsidiaries();
  }, []);

  // Admin routing logic handled by hash or hidden trigger
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setCurrentView('admin');
      } else {
        setCurrentView('main');
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on initial load
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTileClick = (subsidiary) => {
    setActiveSubsidiary(subsidiary);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setActiveSubsidiary(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFBFC]">
        <div className="w-8 h-8 border-4 border-livenza-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Admin View
  if (currentView === "admin") {
    return (
      <div className="min-h-screen transition-colors duration-500">
        {!user ? (
          <AdminLogin onLoginSuccess={() => {}} />
        ) : (
          <AdminPanel 
            onLogout={() => {}} 
            subsidiaries={subsidiaries}
            setSubsidiaries={setSubsidiaries}
          />
        )}
      </div>
    );
  }

  // Main View
  return (
    <div 
      className="min-h-screen flex flex-col bg-[#FAFBFC] transition-colors duration-500 bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <Navbar
        activeSubsidiary={activeSubsidiary}
        onBack={handleBack}
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
              <BentoGrid
                subsidiaries={subsidiaries}
                onTileClick={handleTileClick}
              />
              <ContactSection />
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
