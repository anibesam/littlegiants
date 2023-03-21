import React from "react";
const people = [
  {
    name: "Hayul “Yul” Kim",
    role: "Co-Founder",
    bio: "Yul has a long term interest in poverty alleviation. The idea to create a water empowerment charity first occurred to him about 1 year ago, when he first visited Lagos, Nigeria. He has a strong passion for ending the global water crisis.",
    Quote: "“You cannot solve poverty without solving water and sanitation.”",
  },
  {
    name: "Hajun “Jun” Kim",
    role: "Co-Founder",
    bio: "Jun developed his passion for sanitation and hygiene during the pandemic in 2022. Inspired by their joint travels to Nigeria, he began to realize access to safe water and sanitation was the answer to a bright future for the families he met in villages – a future with more hope, health and possibilities.",
    Quote:
      "“Together, we can bring clean water and sustainable solutions to communities in Africa.”",
  },

  // More people...
];

function TeamMembers() {
  return (
    <div className="bg-slate-100 py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about creating access to clean water in Africa..
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {person.bio}
              </p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  “You cannot solve poverty without solving water and
                  sanitation.”
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TeamMembers;
