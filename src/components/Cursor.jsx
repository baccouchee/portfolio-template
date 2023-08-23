import React, { useEffect, useState } from 'react'
import '../css/Cursor.css'

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    const cursor = document.querySelector('.cursor')

    const handleMouseMove = e => {
      setCursorPosition({
        top: e.clientY + window.scrollY - 10,
        left: e.clientX + window.scrollX - 10,
      })
    }

    const handleClick = () => {
      cursor.classList.add('expand')

      setTimeout(() => {
        cursor.classList.remove('expand')
      }, 500)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const windowWidth = window.innerWidth

  // Conditionally render the cursor component based on the screen width
  if (windowWidth <= 768) {
    return null // Don't render the cursor on smaller screens
  }

  return <div className="cursor" style={{ top: cursorPosition.top + 'px', left: cursorPosition.left + 'px' }} />
}

export default Cursor
