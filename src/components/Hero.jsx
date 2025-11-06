import React from 'react';

const Hero = () => {
  const handleScrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-30 bg-fuchsia-600" />
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full blur-3xl opacity-30 bg-cyan-500" />
      </div>

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 drop-shadow-[0_0_25px_rgba(236,72,153,0.45)]">
            PRACHI
          </span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-slate-200">
          Creative Graphic Designer specializing in social media design and branding
        </p>
        <div className="mt-8">
          <button
            onClick={handleScrollToPortfolio}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-6 py-3 text-white font-semibold shadow-lg shadow-fuchsia-600/30 hover:shadow-cyan-500/30 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
