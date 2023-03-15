import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../utils/Modal";

import HeroImage from "../images/giants/clanh.jpg";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">
            {/* Content */}
            <div
              className="text-center md:text-left md:min-w-[30rem]"
              data-aos="fade-right"
            >
              <h1 className="h1 font-playfair-display text-white mb-4">
                Access to Clean Water Advocates
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                We are empowering communities in Africa to access clean
                and safe water by providing technical assistance, resources, and
                education. 
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <Link
                    className="btn text-white bg-orange-500 hover:bg-slate-800 w-full"
                    to="#0"
                  >
                    Support our Foundation
                  </Link>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div data-aos="fade-left">
              {/* Image */}
              <div className="flex justify-center items-center">
                <div className="relative">
                  <img
                    className="mx-auto md:max-w-none"
                    src={HeroImage}
                    width="540"
                    height="405"
                    alt="Hero"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
