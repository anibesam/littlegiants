import React from 'react';
import { Link } from 'react-router-dom';

import PageHero from '../images/giants/bottle-g9f334810a_1920.jpg'

function WofSingleHero() {
  return (
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10" aria-hidden="true">
        <div className="w-full h-full" data-aos="fade">
          <img className="opacity-10 w-full h-full object-cover" src={PageHero} width="1440" height="497" alt="Hero" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-28 md:pt-40 md:pb-36">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-center">
              <h1 className="h2 font-playfair-display text-slate-100 mb-4">LiGi Foundation Projects</h1>
            </div>
            </div>

        </div>
      </div>
    </section>
  );
}

export default WofSingleHero;