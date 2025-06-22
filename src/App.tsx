import Background from "@components/Background";
import About from "@components/sections/About";
import Contact from "@components/sections/Contact";
import Footer from "@components/sections/Footer";
import Header from "@components/sections/Header";
import Hero from "@components/sections/Hero";

export default function App() {
    return (
        <div id="home" className="min-h-screen w-screen relative flex flex-col">
            <Background />
            <Header />
            <div className="h-8 w-full bg-surface" />
            <main className="z-10 flex-1 flex-col items-center w-full">
                <Hero />
                <div className="h-8 w-full bg-surface" />
                <About />
                <div className="h-8 w-full bg-surface" />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
