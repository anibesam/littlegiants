import React from "react";

import TargetImage from "../images/target.png";

function Target() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h2 font-playfair-display text-slate-800 mb-3">
            Testimonials
          </h2>
          <p className="text-xl text-slate-500">
            Testimonials from Individuals who have been impacted by Little
            Giants Foundation.
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  "I cannot express enough gratitude towards the foundation for
                  providing us with clean water through the borehole they built
                  in our community. It has truly been life-changing for us. We
                  no longer have to walk long distances to fetch water, and we
                  can now focus on other activities like education and economic
                  development. Thank you LiGi Foundation for bringing such a
                  positive change in our lives."
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="text-base">
                  <div className="font-semibold text-gray-900">
                    Dovian Ukanga
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 xl:pl-20">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  "I cannot express how grateful I am for LiGi Foundation's
                  borehole project. Before, my family and I had to walk miles
                  just to get dirty water. Now, we have clean water accessible
                  just a few steps away. Our health has improved, and we have
                  more time to focus on other things, like school and work.
                  Thank you LiGi Foundation for changing our lives with good and
                  easy access to clean water."
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="text-base">
                  <div className="font-semibold text-gray-900">
                    Joseph Daniels
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Target;
