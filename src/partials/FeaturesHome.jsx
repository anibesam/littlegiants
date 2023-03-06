import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesImage from '../images/features-home-01.jpg';

function FeaturesHome() {


  return (
    <section className="relative">

      <div className="absolute inset-0 bg-slate-100 pointer-events-none mb-64 md:mb-80" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-playfair-display text-slate-800 mb-4">Built exclusively for you</h2>
            <p className="text-xl text-slate-768">Excepteur s474 occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</p>
          </div>

          {/* Section content */}
          <div className="px-4 py-16">
     
      <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
        <a
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="https://cdn.pixabay.com/photo/2019/10/16/00/46/children-4553208_960_720.jpg"
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                Our story
                </h6>
                <p className="text-sm text-gray-900">
                  Sportacus andrew weatherall goose Refined gentlemen super
                  mario des lynam alpha trion zap rowsdower.
                </p>
                <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center mt-5 justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-orange-500 hover:bg-black focus:shadow-outline focus:outline-none"
        >
          Learn more
        </a>
      </div>
              </div>
            </div>
          </div>
        </a>
        <a
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  How we work
                </h6>
                <p className="text-sm text-gray-900">
                  Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.lynam alpha trion zap
                </p>
                <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center mt-5 justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-orange-500 hover:bg-black focus:shadow-outline focus:outline-none"
        >
          Learn more
        </a>
      </div>
              </div>
            </div>
          </div>
        </a>
        <div
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">Our role</h6>
                <p className="text-sm text-gray-900">
                  A flower in my garden, a mystery in my panties. Heart attack
                  never stopped old Big Bear.
                </p>
                <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center mt-5 justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-orange-500 hover:bg-black focus:shadow-outline focus:outline-none"
        >
          Learn more
        </a>
      </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
     
    </div>
          </div>

        
      </div>
    </section>
  );
}

export default FeaturesHome;
