import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import Courses from "./components/Courses";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const saved = localStorage.getItem('theme');
        return saved === 'dark';
    });

    useEffect(() => {
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
        // Tailwind v4 still uses the 'dark' class approach
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        console.log('Theme toggled to:', !darkMode);
        console.log('HTML classes:', document.documentElement.className);
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
            <Header darkMode={darkMode} toggleTheme={toggleTheme} />
            <Hero />
            <Features />
            <About />
            <WhyChoose />
            <Statistics />
            <Testimonials />
            <Courses />
            <CallToAction />
            <Footer />
        </div>
    );
}

export default App;
