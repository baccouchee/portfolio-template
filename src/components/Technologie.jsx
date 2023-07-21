import React, { useState } from 'react'
import imgReact from '../Assets/react.png'
import { motion } from 'framer-motion'

const Technologie = () => {
  let tabDep = [
    { id: 'React', label: 'Tailwind' },
    { id: 'React', label: 'MUi' },
    { id: 'React', label: 'Vite' },
    { id: 'React', label: 'Framer Motion' },
  ]

  let tabTech = [
    { id: 'React', label: 'React' },
    { id: 'NodeJS', label: 'NodeJS' },
    { id: 'Git', label: 'Git' },
  ]

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {tabTech.map(tabTech => (
        <div className="flex flex-col-2 w-full py-8 px-4">
          <motion.div
            transition={{ layout: { duration: 0.4, type: 'just' } }}
            layout
            onClick={() => setIsOpen(!isOpen)}
            className="rounded bg-slate-100 shadow-lg max-w-sm"
          >
            <motion.div layout="position" className="flex p-3 mr-4 items-center">
              <img className="object-cover h-12 w-12 rounded-full" src={imgReact} />
              <div className="font-bold text-xl ml-2">{tabTech.label}</div>
            </motion.div>

            {!isOpen && (
              <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.8 }} animate={{ opacity: 0.8 }}>
                <p className="px-4 text-gray-700 text-base">
                  By synergizing React JS with a carefully curated set of technologies, I craft web applications that
                  redefine user experiences with finesse.
                </p>
                <div className="px-3 pt-4 pb-2">
                  {tabDep.map(tabDep => (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{tabDep.label}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      ))}
    </>
  )
}

export default Technologie
