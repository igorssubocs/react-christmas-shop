import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import './scss/index.scss';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
