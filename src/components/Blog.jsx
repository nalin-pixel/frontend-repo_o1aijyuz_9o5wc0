import React from 'react';

const posts = [
  {
    title: 'My Design Approach',
    excerpt:
      'A look into how I start every project — from understanding brand goals to crafting a visual direction that feels authentic and impactful.',
  },
  {
    title: 'How I Create Engaging Social Media Posts',
    excerpt:
      'From trends to typography, here are the essential steps I follow to design posts that stop the scroll and spark conversations.',
  },
  {
    title: 'Color Psychology in Branding',
    excerpt:
      'Colors speak louder than words — this is how I use palettes to shape perception and improve brand recall.',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Blog / Design Process</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
