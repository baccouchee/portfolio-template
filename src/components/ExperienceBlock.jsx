import React from 'react'
import Experience from './Experience'

const ExperienceBlock = () => {
  const experiences = [
    {
      date: 'July - Dec 2017',
      title: 'UI Engineer Co-op @ Apple',
      description: [
        'Developed and styled interactive web applications for Apple Music using Ember and SCS',
        'Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integration',
        "Architected and implemented the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback",
      ],
    },
    {
      date: 'Jan - May 2018',
      title: 'Frontend Developer Intern @ Google',
      description: [
        'Collaborated with design and engineering teams to create user-friendly web interfaces for Google Drive',
        'Implemented responsive layouts using HTML, CSS, and JavaScript for improved mobile experience',
        'Contributed to the development of a real-time collaborative document editing feature',
      ],
    },
    {
      date: 'June - Aug 2019',
      title: 'Software Engineering Intern @ Microsoft',
      description: [
        'Worked on a cross-functional team to develop features for Microsoft Teams, a collaboration platform',
        'Designed and implemented RESTful APIs using Node.js and Express for seamless data integration',
      ],
    },
    {
      date: 'Sept - Dec 2020',
      title: 'Lead Frontend Developer @ TechCo',
      description: [
        'Led a team of frontend developers in building and maintaining web applications for clients',
        'Implemented modern UI/UX practices and responsive designs for various projects',
      ],
    },
    // Add more experience objects as needed
  ]

  // Add more experience objects here
  return (
    <div>
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
        </div>
      </div>
    </div>
  )
}

export default ExperienceBlock
