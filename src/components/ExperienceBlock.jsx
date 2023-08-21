import React, { useState } from 'react'
import Experience from './Experience'
import CV_OMAR_BACCOUCHE from '../Assets/CV_OMAR_BACCOUCHE.pdf'
import arrow from '../Assets/right-arrow-svgrepo-com.svg'
const ExperienceBlock = () => {
  const [hovered, setHovered] = useState(false)
  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  const experiences = [
    {
      date: 'Jan 2023 - Present',
      title: 'Spotfire Developer @ EY',
      description: [
        'Designed and developed interactive dashboards using Spotfire for Renault Group data visualization needs.',
        'Employed technical tools and methodology including Spotfire, IronPython, JavaScript, HTML, and Scrum.',
      ],
      technologie: ['ReactJS', 'NodeJS', 'MongoDB', 'Figma', 'Scrum'],
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
    {
      date: 'Oct 2021 - Feb 2022',
      title: 'Trainer @ Codyspace, ISC, and Paule Verlaine',
      description: [
        'Mentored and trained young individuals aged 10 to 18 in computer programming and digital manufacturing technologies.',
        'Utilized technical tools including Scratch, Thunkable, and Construct.',
      ],
      technologie: ['Scratch', 'Thunkable', 'Construct'],
    },
    {
      date: 'July 2021 - Sept 2021',
      title: 'Mobile Developer Internship "Flutter" @ ONE PACK',
      description: [
        'Developed a mobile Point of Sale (POS) application for sales and inventory management using the Flutter framework.',
        'Employed technical tools and methodology such as Flutter, MongoDB, NodeJS, Slack, and Bitrix.',
      ],
      technologie: ['Flutter', 'MongoDB', 'NodeJS', 'Slack', 'Bitrix'],
    },
    {
      date: 'Sept 2020 - Jan 2021',
      title: 'Projet Application Mobile @ ESPRIT',
      description: [
        'Designed and developed a dynamic cross-platform mobile application connecting service providers and clients.',
        'Utilized technical tools including Java, Android, Swift, SQL, and NodeJS.',
      ],
      technologie: ['Java', 'Android', 'Swift', 'SQL', 'NodeJS'],
    },
    {
      date: 'Oct 2020 - Jan 2021',
      title: 'Freelance Web Developer @ PGG',
      description: [
        'Designed, developed, optimized for SEO, and hosted a showcase website.',
        'Successfully executed the project utilizing ES6.',
        'Reference: powerglobalgroup.com.',
      ],
      technologie: ['ES6'],
    },
  ]

  // Add more experience objects as needed

  // Add more experience objects here
  return (
    <section id="experience">
      <h1 className="text-5xl font-bold mb-20 text-center text-white">Professional Experience</h1>
      <div className="md:flex md:justify-center px-8 md:space-x-2">
        <div className="flex flex-col text-left md:pl-8 md:w-[50%]">
          <h1 className="text-4xl font-bold text-white mb-2">Omar Baccouche</h1>
          <h3 className="text-xl text-gray-500 mb-4">Lead Engineer at EY</h3>
          <p className="text-lg text-gray-200">
            I specialize in building accessible, inclusive products and crafting exceptional digital experiences for the
            web.
          </p>
        </div>
        <div className="flex flex-col md:w-[50%] md:pr-8">
          {experiences.map((experience, index) => (
            <Experience key={index} experience={experience} />
          ))}
          <div className="flex">
            <a
              href={CV_OMAR_BACCOUCHE}
              download="Omar_Baccouche_CV.pdf"
              className={`text-white flex items-center hover:text-gray-300 hover:underline transition duration-300 ${
                hovered ? 'hovered' : ''
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              View Full Résumé
            </a>
            <img
              src={arrow}
              width="2.5%"
              height="2.5%"
              className={`ml-2 mt-0.5 transform translate-x-0 transition-transform duration-100 ${
                hovered ? 'translate-x-1.5' : ''
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceBlock
