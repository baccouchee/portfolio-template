import React, { useState } from 'react'
import '../index.css'
import { Link } from 'react-scroll'
import '../css/ScrollPopUp.css'

const Hero = () => {
  return (
    <section id="hero">
      <div className="w-full h-full mx-auto text-center flex flex-col justify-center bg-body">
        <p className="text-stroke text-body text-transparent font-bold text-4xl font-body uppercase mt-10">
          Elevating Web Experiences
        </p>

        <h1 className="text-3xl text-white font-body font-light md:py-6 mt-10 pop-animation">Hi, i am Omar</h1>
        <p className="text-3xl text-white sm:text-xl font-body font-light pop-animation-1">
          Software Engineer, Front End & App Developer
        </p>
        <p className="text-2xl font-light text-gray-300 mt-4 font-body pop-animation-2">
          Harnessing technology to create stunning web solutions and elevate brands
        </p>

        <div class="flex justify-center items-center  my-6 pop-animation-icon">
          <div class="relative inline-flex  group  my-8">
            <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <Link
              to="form"
              smooth={true}
              duration={500}
              title="Get quote now"
              class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-normal text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-body"
              role="button"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="mx-auto h-10 border mb-12 border-white rounded-full pop-animation-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 animate-bounce mt-2 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="1" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
