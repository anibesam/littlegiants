import React from "react";
import cleanImage from "../images/giants/clean.jpg";

function FeaturesBlocks() {
  return (
    <section>
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
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              Little Giants (“LiGi”) Foundation
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
  );
}

export default FeaturesBlocks;
