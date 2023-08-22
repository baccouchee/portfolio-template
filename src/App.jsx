import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Expertise from './components/Expertise'
import ExperienceBlock from './components/ExperienceBlock'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import Cursor from './components/Cursor' // Import the Cursor component

export function App() {
  return (
    <>
      {/* Add the Cursor component here */}
      <Cursor />

      <div>
        <Navbar />
        <Hero />
        <Expertise />
        <ExperienceBlock />
        <ContactForm />
        <Footer />
      </div>
    </>
  )
}

export default App
