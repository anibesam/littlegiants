import React from 'react';

import Header from '../partials/Header';
import AboutHero from '../partials/AboutHero';
import Stats02 from '../partials/Stats02';
import AboutContent from '../partials/AboutContent';
import Team from '../partials/Team';
import TeamMembers from '../partials/TeamMembers';
import Clients02 from '../partials/Clients02';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';
import cleanImage from "../images/giants/iStock-490824286-944x600.jpeg";
function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <AboutHero />
        <section className='mt-40'>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={cleanImage}
              alt=""
            />
          </div>
          <div className="lg:pr-10">
            <h5 className="mb-4 text-3xl font-extrabold leading-none">
              Who We are
            </h5>
            <p className="mb-6 text-gray-900">
              Our mission is to empower communities in Africa to access clean
              and safe water by providing technical assistance, resources, and
              education.
            </p>
            <p className="mb-6 text-gray-900">
              We strive to identify and address the root causes of the water
              crisis and work with communities to establish sustainable
              solutions. Our goal is to improve health, increase economic
              opportunities, and enhance the overall quality of life for the
              people and communities we serve.
            </p>

            <p className="mb-6 text-gray-900">
              Ligi’s sustainable projects provide support to communities, such
              as through the construction of hand-dug and drilled wells,
              pipelines, sand dams, rainwater harvesting systems and latrines,
              and health and sanitation programmes
            </p>
          </div>
        </div>
      </div>
    </section>
    
        <TeamMembers />
       <br/> <br/>
        <Cta />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default About;