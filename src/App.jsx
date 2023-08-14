import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'

import Expertise from './components/Expertise'
import ExperienceBlock from './components/ExperienceBlock'
import Footer from './components/Footer'

export function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Expertise />
        <ExperienceBlock />
        <Footer />
      </div>
    </>
  )
}

export default App
