import React from "react";
import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Access to Clean Water',
    description:
      '771 million people globally don’t have access to clean water. That’s 1 in 10 people.',
    icon: CheckIcon,
  },
  {
    name: 'Water Related Disease',
    description:
      'A child dies every 2 minutes from a water-related disease.',
    icon: CheckIcon,
  },
  {
    name: 'Access to Adequate Sanitation ',
    description:
      '1.7 billion people globally don’t have access to adequate sanitation – that’s 1 in 5 people.',
    icon: CheckIcon,
  },
  {
    name: 'Basic Hygiene Services',
    description:
      `2.27 billion people globally don't have access to basic hygiene services - that’s 1 in 3 people`,
    icon: CheckIcon,
  },
]
function OurInspiration() {
  return (
    <div style={{marginTop: "-150px"}} className="bg-white py-20">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Our inspiration
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
        With clean water, communities can begin to lift themselves out of poverty and build brighter futures.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                  <feature.icon className="h-6 w-6 text-black" aria-hidden="true" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
  );
}

export default OurInspiration;
