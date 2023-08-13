import React from 'react'
import '../index.css'
const Experience = () => {
  return (
    <div className="relative p-6 w-3/4">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 backdrop-blur-md backdrop-filter bg-opacity-30"></div>
      <div className="flex bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg">
        <div className="w-[20%]">
          <p className="text-gray-300 mb-4 text-right mr-5">July - Dec 2017</p>
        </div>
        <div className="w-[80%]">
          <h2 className="text-xl font-semibold mb-2 text-white">UI Engineer Co-op @ Apple</h2>

          <ul className="list-disc list-inside text-gray-300">
            <li>Developed and styled interactive web applications for Apple Music using Ember and SCS</li>
            <li>
              Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API
              integration
            </li>
            <li>
              Architected and implemented the user interface of Apple Music's embeddable web player widget for
              in-browser user authorization and full song playback
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
