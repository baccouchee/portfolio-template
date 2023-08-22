import React, { useEffect, useState } from 'react'
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
      text: 'Software Engineer',
      desc: 'My proficiency in various programming languages and problem-solving techniques allows me to create robust and efficient solutions that meet user needs and business goals.',
      color: '#61dbfb',
      svgPath: desktop,
    },
    {
      text: 'FullStack Developer',
      desc: 'With a deep understanding of both front-end and back-end technologies, I am dedicated to delivering seamless and feature-rich web applications that deliver exceptional user experiences.',
      color: '#303030',
      svgPath: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
      text: 'Mobile Developer',
      desc: 'Experienced in crafting visually appealing and high-performance mobile apps using Flutter. Passionate about delivering engaging user experiences on the Android platform.',
      color: '#FFFFFF',
      svgPath: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg',
    },
  ]

  const [animationIndex, setAnimationIndex] = useState(-1)

  const handleScroll = () => {
    // Vérifiez si l'utilisateur a fait défiler suffisamment pour déclencher l'animation
    if (animationIndex < expertiseData.length - 1 && window.scrollY > 100) {
      setAnimationIndex(animationIndex + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [animationIndex])

  return (
    <section id="expertise">
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

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-20 pop-animation">My Expertise</h1>
        <div className="text-white md:flex space-y-4 md:mx-10 md:space-y-0">
          {expertiseData.map((expertise, index) => (
            <div
              key={index}
              className={`w-full border-slate-500 border-2 p-4 flex-grow ${
                index < expertiseData.length - 1 ? 'md:border-r-0' : ''
              } ${hover ? 'hover:bg-slate-400' : ''} ${index <= animationIndex + 1 ? 'pop-animation' : ''}`}
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
    </section>
  )
}

export default Expertise
