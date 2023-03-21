import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesHome from '../partials/FeaturesHome';
import FeaturesHome02 from '../partials/FeaturesHome02';
import OurProject from '../partials/OurProject';
import Target from '../partials/Target';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';
import OurInspiration from '../partials/OurInspiration';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesBlocks />
        <FeaturesHome />
        <OurInspiration/>
        <OurProject/>
        <FeaturesHome02 />
        <Target />
        <Cta />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;