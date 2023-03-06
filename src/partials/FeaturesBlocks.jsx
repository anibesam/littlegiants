import React from 'react';

function FeaturesBlocks() {
  return (
    <section>
     <div className="px-4 mb-10 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
      <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://cdn.pixabay.com/photo/2016/03/18/15/21/help-1265227_960_720.jpg"
            alt=""
          />
        </div>
        <div className="lg:pr-10">
          <h5 className="mb-4 text-4xl font-extrabold leading-none">
          Sed ut perspiciatis unde
            unde omnis iste natus

          </h5>
          <p className="mb-6 text-gray-900">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem totam rem aperiam, eaque ipsa quae explicabo.
          </p>
          <p className="mb-6 text-gray-900">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem totam rem aperiam, eaque ipsa quae explicabo.
          </p>
        </div>
       
      </div>
    </div>
 
    </section>
  );
}

export default FeaturesBlocks;
