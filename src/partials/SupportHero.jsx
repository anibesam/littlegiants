import React from 'react';

function SupportHero() {
  return (
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-playfair-display text-slate-100 mb-8">Contact Us</h1>
           
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default SupportHero;