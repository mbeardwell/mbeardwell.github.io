import Background from "@components/Background";
import About from "@components/sections/About";
import Certs from "@components/sections/Certs";
import Contact from "@components/sections/Contact";
import Footer from "@components/sections/Footer";
import Header from "@components/sections/Header";
import Hero from "@components/sections/Hero";
import Projects from "@components/sections/Projects";

export default function App() {
    return (
        <div id="home" className="min-h-screen w-screen relative flex flex-col">
            <Background />
            <Header />
            <main className="z-10 flex-1 flex-col items-center w-full">
                <Hero />
                <About />
                <Certs />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
