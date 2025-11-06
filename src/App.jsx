import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-slate-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;
