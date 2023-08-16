import React from 'react'
import Experience from './Experience'
import CV_OMAR_BACCOUCHE from '../Assets/CV_OMAR_BACCOUCHE.pdf'
import arrow from '../Assets/right-arrow-svgrepo-com.svg'
const ExperienceBlock = () => {
  const experiences = [
    {
      date: 'Sept 2017 - June 2022',
      title: 'FullStack Web and Mobile Software Engineer @ ESPRIT (EUR-ACE)',
      description: [
        'Completed a comprehensive software engineering program with a specialization in web and mobile information systems.',
      ],
      technologie: ['ReactJS', 'NodeJS', 'ES6', 'Angular', 'Tailwind', 'MUI', 'ExpressJS'],
    },
    {
      date: 'Feb 2023 - July 2023',
      title: 'Spotfire Developer @ EY',
      description: [
        "Designed and developed interactive dashboards using Spotfire for Renault Group's data visualization needs.",
        'Employed technical tools and methodology including Spotfire, IronPython, JavaScript, HTML, and Scrum.',
      ],
      technologie: ['Spotfire', 'IronPython', 'JavaScript', 'HTML', 'Scrum'],
    },
    {
      date: 'March 2022 - Sept 2022',
      title: 'Full-Stack Developer Internship @ EY',
      description: [
        'Spearheaded the design and implementation of a platform for monitoring and automating the process of audit program creation.',
        'Leveraged technical tools and methodology such as ReactJS, NodeJS, MongoDB, Figma, and Scrum.',
      ],
      technologie: ['ReactJS', 'NodeJS', 'MongoDB', 'Figma', 'Scrum'],
    },
    // Add more experience objects as needed
  ]

  // Add more experience objects here
  return (
    <section id="experience">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-20 text-center text-white">
        Professional Experience
      </h1>
      <div className="flex px-6 space-x-6 ">
        <div className="flex flex-col text-left w-[50%]">
          <h1 class="text-4xl font-bold text-white mb-2">Omar Baccouche</h1>
          <h3 class="text-xl text-gray-500 mb-4">Lead Engineer at EY</h3>
          <p class="text-lg text-gray-200">
            I specialize in building accessible, inclusive products and crafting exceptional digital experiences for the
            web.
          </p>
        </div>
        <div className="flex flex-col w-[50%] overflow-y-auto">
          {experiences.map((experience, index) => (
            <Experience key={index} experience={experience} />
          ))}
          <div className="flex">
            <a
              href={CV_OMAR_BACCOUCHE}
              download={CV_OMAR_BACCOUCHE}
              className="text-white flex items-center hover:text-gray-300 hover:underline transition duration-300"
            >
              View Full Résumé
            </a>
            <img
              src={arrow}
              width="2.5%"
              height="2.5%"
              className="ml-2 mt-0.5 transform translate-x-0 transition-transform duration-300 hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceBlock
