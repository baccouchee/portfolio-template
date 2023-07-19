import React from 'react'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-main font-bold p-2 uppercase">Elevating Web Experiences.</p>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-light md:py-6">Hi, i am Omar.</h1>
        <div className="flex flex-row justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-light mr-2">I am</p>
          <div className="md:text-5xl sm:text-4xl text-xl font-semibold italic py-4 text-main font-body">
            <Typewriter
              options={{
                strings: ['Web dev', 'Mobile dev'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <p className="md:text-2xl text-xl font-light text-gray-400">
          Harnessing technology to create stunning web solutions and elevate brands.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:shadow-inner">
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default Hero
