import React, { useState } from 'react'
import ExpertiseElem from './ExpertiseElem'
import helloWordCode from '../Assets/hello-world-html-code.png'
import desktop from '../Assets/desktop.svg'

const Expertise = () => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }
  const expertiseData = [
    {
      text: 'Software Development',
      desc: 'Lorem ipsum dolor',
      color: '#61dbfb',
      svgPath: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
      text: 'Frontend Dev React, NextJS',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exped',
      color: '#303030',
      svgPath: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg',
    },
    {
      text: 'Flutter Dev Android',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exped',
      color: '#FFFFFF',
      svgPath: desktop,
    },
  ]
  return (
    <div className="w-full py-16 px-10 text-center flex flex-col font-body text-white relative" id="expertise">
      {/* Add the PNG image as a background */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-30"
        style={{
          backgroundImage: `url(${helloWordCode})`,
          backgroundSize: '40%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundPositionY: '50%',
          zIndex: '-1',
        }}
      ></div>

      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-20">My Expertise</h1>
      <div className="text-white md:flex space-y-4 md:space-y-0">
        {expertiseData.map((expertise, index) => (
          <div
            key={index}
            className={`w-full border-slate-500 border-2 p-4 flex-grow ${hover ? 'hover:bg-slate-400' : ''} ${
              index === expertiseData.length - 1 ? '' : 'border-r-0'
            } ${index === expertiseData.length - 1 ? 'border-r-1' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ExpertiseElem
              text={expertise.text}
              color={expertise.color}
              desc={expertise.desc}
              svgPath={expertise.svgPath}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Expertise
