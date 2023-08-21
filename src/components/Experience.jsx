import React from 'react'
import '../index.css'
const Experience = ({ experience }) => {
  return (
    <div className="flex py-3">
      <div className="backdrop-filter bg-opacity-30"></div>
      <div className="flex bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg">
        <div className="w-[20%]">
          <p className="text-gray-300 mb-4 text-right mr-5">{experience.date}</p>
        </div>
        <div className="w-[80%]">
          <h2 className="text-xl font-semibold mb-2 text-white">{experience.title}</h2>

          <ul className="list-disc list-inside text-gray-300">
            {experience.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
          <div className="w-full flex flex-wrap p-2 mt-2">
            {experience.technologie.map((tech, index) => (
              <span
                key={index}
                className="rounded-full px-3 py-1 bg-[#00DF9A] bg-opacity-10 text-[#00DF9A] font-normal mr-2 mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
