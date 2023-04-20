import React from "react";

import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Contact from "./components/Contact.js";
import Blogs from "./components/Blogs.js";
import FAQ from "./components/FAQ.js";
import Footer from "./components/Footer.js";

import './App.css';

const App = () => {

    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Services />
            <Blogs />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;