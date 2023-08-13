import React, { useState } from 'react'
import ExpertiseElem from './ExpertiseElem'
import helloWordCode from '../Assets/hello-world-html-code.png'

const Expertise = () => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <div className="w-full py-16 px-10 text-center flex flex-col font-body text-white relative">
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
        <div
          className={`w-full border-slate-500 border-2 md:border-r-0 p-4 flex-grow ${
            hover ? 'hover:bg-slate-400' : ''
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ExpertiseElem hover={hover} />
        </div>
        <div className="w-full border-slate-500 border-2 md:border-r-0 p-4 flex-grow">
          <ExpertiseElem />
        </div>
        <div className="w-full border-slate-500 border-2 p-4 flex-grow">
          <ExpertiseElem />
        </div>
      </div>
    </div>
  )
}

export default Expertise
