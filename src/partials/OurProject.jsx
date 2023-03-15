import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import project1 from "../images/giants/_KIN2462.jpeg";
import project2 from "../images/giants/agbundu077.jpeg";
import project3 from "../images/giants/wash.jpeg";

function OurProject() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-slate-100 pointer-events-none mb-64"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-playfair-display text-slate-800 mb-4">
              Our Projects
            </h2>
            <p className="text-xl text-slate-768">
              Here is just a small sampling of our featured projects.{" "}
            </p>
          </div>

          {/* Section content */}
          <div className="px-4 py-5">
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
              <img
                src={project1}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <svg
                viewBox="0 0 1097 845"
                aria-hidden="true"
                className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
              >
                <path
                  fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
                  fillOpacity=".2"
                  d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
                />
                <defs>
                  <linearGradient
                    id="10724532-9d81-43d2-bb94-866e98dd6e42"
                    x1="1097.04"
                    x2="-141.165"
                    y1=".22"
                    y2="363.075"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#776FFF" />
                    <stop offset={1} stopColor="#FF4694" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                viewBox="0 0 1097 845"
                aria-hidden="true"
                className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
              >
                <path
                  fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
                  fillOpacity=".2"
                  d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
                />
                <defs>
                  <linearGradient
                    id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
                    x1="1097.04"
                    x2="-141.165"
                    y1=".22"
                    y2="363.075"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#776FFF" />
                    <stop offset={1} stopColor="#FF4694" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="bg-black bg-opacity-50  mx-auto max-w-2xl lg:mx-0">
                  <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Garatu Water Project
                  </h2>
                  <p className="mt-6 text-4xl font-medium leading-8 text-gray-100">
                    Community Access to Clean Water.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section2 */}
          <div className="px-4 py-5">
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
              <img
                src={project2}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <svg
                viewBox="0 0 1097 845"
                aria-hidden="true"
                className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
              >
                <path
                  fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
                  fillOpacity=".2"
                  d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
                />
                <defs>
                  <linearGradient
                    id="10724532-9d81-43d2-bb94-866e98dd6e42"
                    x1="1097.04"
                    x2="-141.165"
                    y1=".22"
                    y2="363.075"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#776FFF" />
                    <stop offset={1} stopColor="#FF4694" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                viewBox="0 0 1097 845"
                aria-hidden="true"
                className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
              >
                <path
                  fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
                  fillOpacity=".2"
                  d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
                />
                <defs>
                  <linearGradient
                    id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
                    x1="1097.04"
                    x2="-141.165"
                    y1=".22"
                    y2="363.075"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#776FFF" />
                    <stop offset={1} stopColor="#FF4694" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="bg-black bg-opacity-50  mx-auto max-w-2xl lg:mx-0">
                  <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Clean Water Outreach
                  </h2>
                  <p className="mt-6 text-4xl font-medium leading-8 text-gray-100">
                    An Educational outreach.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section3 */}
          <div className="px-4 py-5">
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
              <img
                src={project3}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <svg
                viewBox="0 0 1097 845"
                aria-hidden="true"
                className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
              >
                <path
                  fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
                  fillOpacity=".2"
                  d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
                />
                <defs>
                  <linearGradient
                    id="10724532-9d81-43d2-bb94-866e98dd6e42"
                    x1="1097.04"
                    x2="-141.165"
                    y1=".22"
                    y2="363.075"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#776FFF" />
                    <stop offset={1} stopColor="#FF4694" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                viewBox="0 0 1097 845"
                aria-hidden="true"
                className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
              >
                <path
                  fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
                  fillOpacity=".2"
                  d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
                />
                <defs>
                  <linearGradient
                    id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
                    x1="1097.04"
                    x2="-141.165"
                    y1=".22"
                    y2="363.075"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#776FFF" />
                    <stop offset={1} stopColor="#FF4694" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="bg-black bg-opacity-50  mx-auto max-w-2xl lg:mx-0">
                  <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    LIGI Schools Project
                  </h2>
                  <p className="mt-6 text-4xl font-medium leading-8 text-gray-100">
                    Reaching out Schools to Access Clean Water.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProject;
