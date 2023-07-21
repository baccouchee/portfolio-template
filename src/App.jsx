import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Analytics from './components/Analytics'
import Technologie from './components/Technologie'

export function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Analytics />
        <Technologie />
      </div>
    </>
  )
}

export default App
