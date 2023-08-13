import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Analytics from './components/Analytics'
import Technologie from './components/Technologie'
import Expertise from './components/Expertise'
import Experience from './components/Experience'

export function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Expertise />
        <Experience />
        {/* <Technologie /> */}
      </div>
    </>
  )
}

export default App
