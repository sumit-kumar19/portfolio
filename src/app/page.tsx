"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navbar";
import Expertise from "@/components/Expertise";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);


  const [mode, setMode] = useState<string>('dark');

  const handleModeChange = () => {
      if (mode === 'dark') {
          setMode('light');
      } else {
          setMode('dark');
      }
  }


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleLoaderFinish = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader onFinish={handleLoaderFinish} />}
      {!isLoading && (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
          <Navigation  parentToChild={{ mode }} modeChange={handleModeChange} />
          <Hero />
          <Timeline />
          <Expertise />
          <Skills />
          <Contact />
          <Footer />
          {/* <Navigation/> */}
        </div>
      )}
    </>
  );
}
