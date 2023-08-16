import React from 'react'

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded" required />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
