import React from 'react';

const categories = [
  {
    title: 'Instagram & Social Media Post',
    items: [1, 2].map((i) => ({ id: `social-${i}`, src: `https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop` })),
  },
  {
    title: 'Business Card',
    items: [1].map((i) => ({ id: `card-${i}`, src: `https://images.unsplash.com/photo-1520975782039-df2f285f7da3?q=80&w=1200&auto=format&fit=crop` })),
  },
  {
    title: 'Brochure',
    items: [1].map((i) => ({ id: `brochure-${i}`, src: `https://images.unsplash.com/photo-1516617442634-75371039cb3c?q=80&w=1200&auto=format&fit=crop` })),
  },
  {
    title: 'Flyer',
    items: [1].map((i) => ({ id: `flyer-${i}`, src: `https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop` })),
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Portfolio</h2>

        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{cat.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cat.items.map((item) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
                  >
                    <img
                      src={item.src}
                      alt={`${cat.title} ${item.id}`}
                      className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 ring-0 group-hover:ring-4 group-hover:ring-fuchsia-400/40 rounded-xl transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
