import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import donate from '../images/giants/donate.jpg';
import  volunteer from '../images/giants/volunteer.jpg';
import  event from '../images/giants/event.jpg';

function FeaturesHome02() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab-1]) {
      tabs.current.style.height = tabs.current.children[tab-1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 bg-slate-100">
        <div className="py-12 md:py-20 border-t border-slate-200">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">Impact and Sustaining the Vision</h2>
          </div>

          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-start md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">

            {/* Tabs items (images) */}
            <div className="md:rtl md:w-5/12 lg:w-1/2 order-1 md:order-none" data-aos="fade-down" ref={tabs}>
              <div className="relative flex flex-col">
                {/* Item 1 */}
                <Transition
                  show={tab == 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="" height="500" src={donate} alt="kids" />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab == 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className=""  height="500" src={volunteer} alt="Features home 2 02" />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab == 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                  <img className=""  height="500" src={event} alt="event" />
                     </div>
                </Transition>                
              </div>
            </div>

            {/* Content */}
            <div className="md:w-7/12 lg:w-1/2" data-aos="fade-up">
              <div className="mb-8 text-center md:text-left">
                <h3 className="h3 text-slate-800 font-playfair-display mb-3">Get Involved</h3>
                <p className="text-xl text-slate-500">Join us in our mission to provide access to clean water in Africa. Your support can make a lasting impact on the lives of communities in need.</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <button
                  className={`flex items-start text-left bg-white border-2 px-5 py-3 rounded shadow-md transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'border-transparent opacity-50 hover:opacity-75' : 'border-2 border-blue-500 opacity-100'}`}
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <svg className="w-4 h-4 fill-current text-blue-600 shrink-0 mt-1 mr-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.4 6.6c.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-5-7.8-5-7.8s7 4.2 7.8 5Z" /><path d="M8 16c-4.4 0-8-3.6-8-8 0-.6.4-1 1-1s1 .4 1 1c0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6c-.6 0-1-.4-1-1s.4-1 1-1c4.4 0 8 3.6 8 8s-3.6 8-8 8Z" />
                  </svg>
                  <div>
                    <div className="text-slate-800 font-medium mb-1">Donate</div>
                    <div className="text-slate-500">Your financial contribution will help us bring clean water to more communities in need.</div>
                  </div>
                </button>
                <button
                  className={`flex items-start text-left bg-white border-2 px-5 py-3 rounded shadow-md transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'border-transparent opacity-50 hover:opacity-75' : 'border-2 border-blue-500 opacity-100'}`}
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <svg className="w-4 h-4 fill-current text-blue-600 shrink-0 mt-1 mr-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.019 15.276.034 1.329A1.058 1.058 0 0 1 1.33.034L15.276 4.02c.896.299.996 1.494.1 1.893L8.8 8.8l-2.79 6.574c-.498.897-1.693.797-1.992-.1ZM2.525 2.525l2.69 9.463 1.892-4.383c.1-.199.299-.398.498-.498l4.383-1.893-9.463-2.69Z" />
                  </svg>
                  <div>
                    <div className="text-slate-800 font-medium mb-1">Volunteer</div>
                    <div className="text-slate-500">Join us on the ground to assist with project implementation and community outreach.</div>
                  </div>
                </button>
                <button
                  className={`flex items-start text-left bg-white border-2 px-5 py-3 rounded shadow-md transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'border-transparent opacity-50 hover:opacity-75' : 'border-2 border-blue-500 opacity-100'}`}
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <svg className="w-4 h-4 fill-current text-blue-600 shrink-0 mt-1 mr-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.686 5.71 10.291.3c-.4-.4-.999-.4-1.399 0a.97.97 0 0 0 0 1.403l.6.6L2.698 6.01l-1-1.002c-.4-.4-.999-.4-1.398 0a.97.97 0 0 0 0 1.403l1.498 1.502 2.398 2.404L.6 14.023 2 15.425l3.696-3.706 3.997 4.007c.5.5 1.199.2 1.398 0a.97.97 0 0 0 0-1.402l-.999-1.002 3.697-6.711.6.6c.599.602 1.199.201 1.398 0 .3-.4.3-1.1-.1-1.502Zm-7.193 6.11L4.196 7.511l6.695-3.706 1.298 1.302-3.696 6.711Z" />
                  </svg>
                  <div>
                    <div className="text-slate-800 font-medium mb-1">Host an Event</div>
                    <div className="text-slate-500">Organize a fundraising event, such as a charity walk or dinner party, to support our work.</div>
                  </div>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesHome02;
