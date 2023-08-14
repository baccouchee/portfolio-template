import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-500 bg-opacity-10 backdrop-blur-md text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-2">Designed with ❤️, Contact me at</p>
        <p className="text-xl font-semibold">omar.baccouche.10@gmail.com</p>
        <div className="mt-4">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            GitHub
          </a>
          {/* Add more social media links as needed */}
        </div>
        <p className="mt-4 text-sm">© {new Date().getFullYear()} Omar Baccouche. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
