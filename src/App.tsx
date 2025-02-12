import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';
import { SideNav } from './components/SideNav';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time to show animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative">
        <ParticleBackground />
        <div className="relative z-10 flex">
          <SideNav />
          <main className="flex-1 ml-[200px]">
            <div id="home" className="min-h-screen"><Home /></div>
            <div id="about" className="min-h-screen py-20"><About /></div>
            <div id="education" className="min-h-screen py-20"><Education /></div>
            <div id="experience" className="min-h-screen py-20"><Experience /></div>
            <div id="projects" className="min-h-screen py-20"><Projects /></div>
            <div id="contact" className="min-h-screen py-20"><Contact /></div>
      
          </main>
        </div>
      </div>
    </>
  );
}
