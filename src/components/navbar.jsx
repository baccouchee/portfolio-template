import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'
import '../index.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  let tab = [
    { id: 'Home', label: 'Home', nav: 'hero' },
    { id: 'Expertise', label: 'Expertise', nav: 'expertise' },
    { id: 'Experience', label: 'Experience', nav: 'experience' },
    { id: 'Contact', label: 'Contact', nav: 'form' },
  ]

  const [nav, setNav] = useState(false)
  const handleNavItemClick = tab => {
    setActiveTab(tab.id)
    setNav(false) // Close the menu
  }

  const handleNav = () => {
    setNav(!nav)
  }

  let [activeTab, setActiveTab] = useState(tab[0].id)

  const [scrolling, setScrolling] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setScrolling(true)
    } else {
      setScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`flex justify-between items-center h-24 bg-body mx-auto px-4 text-white ${
        scrolling ? 'fixed-navbar' : ''
      }`}
    >
      <Link to="hero" smooth={true} duration={500}>
        <h1 className="w-full text-3xl font-bold text-main font-body hover:text-opacity-80 cursor-pointer">OMAR.</h1>
      </Link>
      <ul className="hidden md:flex">
        {tab.map(tab => (
          <Link
            key={tab.id}
            to={tab.nav}
            smooth={true}
            duration={500}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab == tab.id ? '' : 'hover:opacity-50'
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2
            outline-sky-400 cursor-pointer focus-visible:outline`}
          >
            {activeTab === tab.id && (
              <motion.div layoutId="active-pill" className="absolute inset-0 px-2 border-b-2 border-main" />
            )}
            <span className="relative font-body">{tab.label}</span>
          </Link>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden'
            : 'fixed left-[-100%]'
        }
        style={{ zIndex: 1000 }}
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 font-body">OMAR.</h1>
        <ul className="uppercase p-4 font-body">
          {tab.map(tabItem => (
            <li
              key={tabItem.id}
              className="p-4 border-b border-gray-600 cursor-pointer transition-colors hover:bg-gray-700"
            >
              <Link to={tabItem.nav} smooth={true} duration={500} onClick={() => handleNavItemClick(tabItem)}>
                {tabItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
