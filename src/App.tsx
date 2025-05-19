import Contact from "@components/sections/Contact";
import Footer from "@components/sections/Footer";
import Header from "@components/sections/Header";
import Hero from "@components/sections/Hero";

export default function App() {
    return (
        <div id="home" className="bg-surface min-h-screen min-w-screen">
            <Header />
            <div className="divide-y divide-accent flex flex-col justify-center items-center max-w-7xl max-xl:px-6 mx-auto">
                {/* <Construction /> */}
                <Hero />
                <Contact />
                {/* <Projects /> */}
                {/* <Skills /> */}
                {/* <Certs /> */}
                <Footer />
            </div>
        </div>
    );
}
