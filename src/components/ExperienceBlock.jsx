import React, { useState } from 'react'
import Experience from './Experience'
import CV_OMAR_BACCOUCHE from '../Assets/CV_OMAR_BACCOUCHE.pdf'
import arrow from '../Assets/right-arrow-svgrepo-com.svg'
import '../css/ScrollPopUp.css'

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
        'Collaborated within a Scrum framework, ensuring efficient project management and delivery.',
        'Utilized technical tools: Spotfire, IronPython, JavaScript, HTML, CSS.',
      ],
      technologie: ['Spotfire', 'IronPython', 'JavaScript', 'HTML', 'CSS', 'Scrum'],
    },
    {
      date: 'March 2022 - Sept 2022',
      title: 'Full-Stack Developer Internship @ EY',
      description: [
        'Spearheaded the design and implementation of a platform to monitor and automate audit program creation.',
        'Utilized technical tools: ReactJS, NodeJS, Express, MUI, MongoDB, Figma, Git/Github.',
        'Collaborated across teams, following Scrum practices for system effectiveness and user-friendliness.',
      ],
      technologie: ['ReactJS', 'NodeJS', 'Express', 'MUI', 'MongoDB', 'Figma', 'Git/Github', 'Scrum'],
    },
    {
      date: 'Oct 2021 - Feb 2022',
      title: 'Trainer @ Codyspace, ISC, and Paule Verlaine',
      description: [
        'Mentored and trained young individuals aged 10 to 18 in computer programming and digital manufacturing technologies.',
        'Used technical tools such as Scratch, Thunkable, and Construct to create engaging learning experiences.',
      ],
      technologie: ['Scratch', 'Thunkable', 'Construct'],
    },
    {
      date: 'July 2021 - Sept 2021',
      title: 'Mobile Developer Internship "Flutter" @ ONE PACK',
      description: [
        'Developed a mobile Point of Sale (POS) application for sales and inventory management.',
        'Utilized technical tools: Flutter, MongoDB, NodeJS, Slack, Bitrix.',
        'Collaborated with the team using Scrum methodology for efficient project management and delivery.',
      ],
      technologie: ['Flutter', 'MongoDB', 'NodeJS', 'Slack', 'Bitrix', 'Scrum'],
    },
    {
      date: 'Sept 2020 - Jan 2021',
      title: 'Projet Application Mobile @ ESPRIT',
      description: [
        'Designed and developed a dynamic cross-platform mobile application connecting service providers and clients.',
        'Utilized technical tools: Java, Android, Swift, SQL, Git/Github, NodeJS.',
      ],
      technologie: ['Java', 'Android', 'Swift', 'SQL', 'Git/Github', 'NodeJS'],
    },
    {
      date: 'Oct 2020 - Jan 2021',
      title: 'Freelance Web Developer @ PGG',
      description: [
        'Designed, developed, optimized for SEO, and hosted a showcase website.',
        'Executed the project successfully using ES6.',
        'Reference: powerglobalgroup.com.',
      ],
      technologie: ['ES6'],
    },
  ]

  // Add more experience objects as needed

  // Add more experience objects here
  return (
    <section id="experience">
      <h1 className="text-5xl font-bold mb-20 text-center text-white pop-animation">Professional Experience</h1>
      <div className="md:flex md:justify-center px-8 md:space-x-2">
        <div className="flex flex-col text-left  md:pl-8 md:w-[50%] pop-animation">
          <h1 className="text-4xl font-bold text-white mb-2">Omar Baccouche</h1>
          <h3 className="text-xl text-gray-500 mb-4">Software Engineer</h3>
          <p className="text-lg text-gray-200 mr-20">
            I engineer captivating digital experiences, crafting both mobile and web apps. Seamlessly merging technology
            and creativity, I create user-centered solutions that captivate and engage.
          </p>
        </div>
        <div className="flex flex-col md:w-[50%] md:pr-8">
          {experiences.map((experience, index) => (
            <div className="pop-animation">
              <Experience key={index} experience={experience} />
            </div>
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
