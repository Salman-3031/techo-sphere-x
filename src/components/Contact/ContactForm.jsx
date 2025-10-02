import React from 'react'
import Title from '../Title/Title'

const ContactForm = () => {
  return (
    <div className="w-full bg-bglight dark:bg-bgdark pb-10">
      {/* <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Send Us a Message
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div> */}
      <Title title="Send Us a Message" description="Fill out the form below and we'll get back to you as soon as possible."/>

      {/* Form */}
      <form className="max-w-3xl mx-auto mt-8 space-y-6">
        {/* Name */}
        <div>
          <label className="block text-left text-gray-700 dark:text-gray-200 mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-left text-gray-700 dark:text-gray-200 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-left text-gray-700 dark:text-gray-200 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-left text-gray-700 dark:text-gray-200 mb-1">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm
