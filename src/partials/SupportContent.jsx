import React from 'react';
import { Link } from 'react-router-dom';

import AvatarImage01 from '../images/support-avatar-01.jpg';
import AvatarImage02 from '../images/support-avatar-02.jpg';
import AvatarImage03 from '../images/support-avatar-03.jpg';
import AvatarImage04 from '../images/support-avatar-04.jpg';
import AvatarImage05 from '../images/support-avatar-05.jpg';
import AvatarImage06 from '../images/support-avatar-06.jpg';

function SupportContent() {
  return (
    <section className="bg-slate-50">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Articles */}
          <div className="max-w-3xl mx-auto space-y-4" data-aos-id-support>

            {/* Article*/}
            <article className="bg-white p-6 md:px-8 shadow-lg" data-aos="fade-up" data-aos-anchor="[data-aos-id-support]">
              <div className="flex">
                {/* Icon */}
                <div className="flex items-center shrink-0 pr-6 sm:pr-8 sm:mr-6 sm:border-r border-slate-200">
                  <svg className="w-8 h-8 fill-blue-600" viewBox="0 0 32 32">
                    <path d="M17 18h12v6h-4v8H7v-8H3v-6h12v-7a6 6 0 0 1-6-6V2h2c1.537 0 2.938.578 4 1.528V0h2v8.528A5.978 5.978 0 0 1 21 7h2v3a6 6 0 0 1-6 6v2Zm10 2H5v2h22v-2Zm-4 4H9v6h14v-6Zm-6-10a4 4 0 0 0 4-4V9a4 4 0 0 0-4 4v1Zm-2-5V8a4 4 0 0 0-4-4v1a4 4 0 0 0 4 4Z" />
                  </svg>
                </div>
                {/* Content */}
                <div className="grow">
                  <header>
                    <h2 className="h4 font-playfair-display mb-2">
                      <Link className="text-slate-800 hover:underline hover:decoration-blue-100" to="#0">Support our Foundation</Link>
                    </h2>
                  </header>
                  <p className="text-slate-500 mb-4">Email: support@ligifoundation.org</p>
                  
                </div>
              </div>
            </article>

          

          </div>

        </div>
      </div>
    </section>
  );
}

export default SupportContent;