import React from 'react';

import HeroImage from '../images/giants/_KIN2463.jpeg';
import IntroImage from '../images/about-intro.jpg';

function AboutHero() {
  return (
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 mb-48 lg:mb-0 lg:h-[30rem]" aria-hidden="true">
        <div className="w-full h-full" data-aos="fade">
          <img className="opacity-10 w-full h-full object-cover" src={HeroImage} width="1440" height="497" alt="Hero" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-40">
        <div className="pt-32 md:pt-40">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-16">
            <h1 style={{marginTop: "-100px"}} className="h1 font-playfair-display text-slate-100">About LIGI Foundation</h1>
            <p className='text-slate-100 max-w-2xl mt-3'>
            “Do the difficult things while they are easy and do the great things while they are small.
A journey of a thousand miles must begin with a single step.
- Lao Tzu
            </p>
          </div>


        </div>
      </div>
    </section>
  );
}

export default AboutHero;