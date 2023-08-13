import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'

const Navbar = () => {
  let tab = [
    { id: 'Home', label: 'Home' },
    { id: 'Company', label: 'Company' },
    { id: 'Ressources', label: 'Ressources' },
    { id: 'About', label: 'About' },
    { id: 'Contact', label: 'Contact' },
  ]

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  let [activeTab, setActiveTab] = useState(tab[0].id)

  return (
    <div className="flex justify-between items-center h-24 bg-body mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-main font-body">OMAR.</h1>
      <ul className="hidden md:flex">
        {tab.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab == tab.id ? '' : 'hover:opacity-50'
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2
            outline-sky-400 focus-visible:outline`}
          >
            {activeTab === tab.id && (
              <motion.div layoutId="active-pill" className="absolute inset-0 px-2 border-b-2 border-main" />
            )}
            <span className="relative font-body">{tab.label}</span>
          </button>
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
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">OMAR.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Ressources</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
          <li className="p-4">Home</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
