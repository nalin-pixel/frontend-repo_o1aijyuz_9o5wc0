import React from 'react';

const Navbar = () => {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-extrabold text-slate-900 tracking-tight">PRACHI</a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-slate-900 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
