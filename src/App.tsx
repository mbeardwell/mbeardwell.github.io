import { useEffect } from "react";
import Background from "@components/Background";
import About from "@components/sections/About";
import Certs from "@components/sections/Certs";
import Footer from "@components/sections/Footer";
import Header from "@components/sections/Header";
import Hero from "@components/sections/Hero";
import Projects from "@components/sections/Projects";

export default function App() {
  useEffect(() => {
    const bar = document.getElementById("progress-bar");
    const onScroll = () => {
      if (!bar) return;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="home" className="min-h-screen w-full relative flex flex-col">
      <div
        id="progress-bar"
        className="fixed top-[52px] left-0 right-0 h-[2px] z-[9999] bg-accent pointer-events-none"
        style={{ transformOrigin: "left", transform: "scaleX(0)" }}
      />
      <Header />
      <main className="z-10 flex-1 flex-col items-center w-full">
        <Hero />
        <div className="relative z-10 bg-surface">
          <About />
          <Projects />
          <Certs />
        </div>
      </main>
      <Footer />
    </div>
  );
}

