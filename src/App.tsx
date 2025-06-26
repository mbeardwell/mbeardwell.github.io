import Background from "@components/Background";
import About from "@components/sections/About";
import Contact from "@components/sections/Contact";
import Footer from "@components/sections/Footer";
import Header from "@components/sections/Header";
import Hero from "@components/sections/Hero";
import { JSX } from "react";

const SECTION_SPACER: JSX.Element = <div className="h-12 w-full bg-surface" /> 

export default function App() {
    return (
        <div id="home" className="font-plex-serif min-h-screen w-screen relative flex flex-col">
            <Background />
            <Header />
            <div className="h-6 w-full bg-surface" /> 
            <main className="z-10 flex-1 flex-col items-center w-full">
                <Hero />
                {SECTION_SPACER}
                <About />
                {SECTION_SPACER}
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
