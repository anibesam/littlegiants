import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import Story from '../images/giants/story.jpg';
import FeaturesImage from '../images/features-home-01.jpg';

function FeaturesHome() {


  return (
    <section className="relative">

      <div className="absolute inset-0 bg-slate-100 pointer-events-none mb-64" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-playfair-display text-slate-800 mb-4">Access to clean and safe water</h2>
            <p className="text-xl text-slate-768">We are assisting individuals and communities in poor remote areas in Africa to identify, develop and establish a sustainable source of clean water. </p>
          </div>

          {/* Section content */}
          <div className="px-4 py-16">
     
      <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
        <div
         
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src={Story}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                Our story
                </h6>
                <p className="text-sm text-gray-900">
                We are on a mission to enable community have access to clean water as this will help communities to lift themselves out of poverty and build brighter future for the young ones. It is a sad reality that over 771 million people globally don’t have access to clean water. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="https://cdn.pixabay.com/photo/2017/02/07/04/12/african-2044961_960_720.jpg"
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  How we work
                </h6>
                <p className="text-sm text-gray-900">
                We strive to identify and address the root causes of the water crisis and work with communities to establish sustainable solutions. Our goal is to improve health, increase economic opportunities, and enhance the overall quality of life.
                </p>
                <div className="text-center">
      </div>
              </div>
            </div>
          </div>
        </div>
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
                <h6 className="mb-2 font-semibold leading-5">Become a Volunteer</h6>
                <p className="text-sm text-gray-900">
                Are you looking for a meaningful way to give back to your community? Consider volunteering with our foundation! We are always looking for passionate and dedicated individuals to help us make a difference in the lives of those we serve.
                </p>
                <div className="text-center">
      
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
