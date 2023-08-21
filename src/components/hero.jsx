import React, { useState } from 'react'
import '../index.css'

const Hero = () => {
  return (
    <section id="hero">
      <div className="w-full h-full mx-auto text-center flex flex-col justify-center bg-body">
        <p className="text-stroke text-body text-transparent font-bold md:text-4xl font-body uppercase mt-10">
          Elevating Web Experiences
        </p>

        <h1 className="md:text-3xl text-white sm:text-xl   text-l font-body font-light md:py-6 mt-10">Hi, i am Omar</h1>
        <p className="md:text-3xl text-white sm:text-xl  text-l font-body font-light">
          Software Engineer, Front End & App Developer
        </p>
        <p className="md:text-2xl text-xl font-light text-gray-300 font-body">
          Harnessing technology to create stunning web solutions and elevate brands
        </p>

        <div class="flex justify-center items-center  my-6">
          <div class="relative inline-flex  group  my-8">
            <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="#"
              title="Get quote now"
              class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-normal text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-body"
              role="button"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="mx-auto h-10 border mb-12 border-white rounded-full">
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
