import React, { useEffect } from 'react'
import '../css/Cursor.css'

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor')

    const handleMouseMove = e => {
      cursor.setAttribute('style', `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`)
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

  return <div className="cursor" />
}

export default Cursor
