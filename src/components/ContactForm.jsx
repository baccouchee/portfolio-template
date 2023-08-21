import React from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const handleSubmit = event => {
    event.preventDefault()

    emailjs
      .sendForm('service_non86fk', 'template_kd5ilzn', event.target, 'PHiz9qTu3n_1ivocF')
      .then(response => {
        console.log('Email sent successfully:', response)
      })
      .catch(error => {
        console.error('Error sending email:', error)
      })
  }

  return (
    <section id="form" className="mb-20">
      <div className="flex items-center justify-center min-h-screen text-white flex-col">
        <h1 className="text-5xl font-bold mb-20 text-center text-white mt-20">Contact Me</h1>
        <div className="bg-white bg-opacity-10 p-8 rounded shadow-md max-w-md w-full">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="user_name" className="block mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                className="w-full p-2 border text-black rounded bg-opacity-20"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="user_email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="w-full p-2 text-black border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block mb-1 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 text-black border rounded"
                required
              />
            </div>

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
