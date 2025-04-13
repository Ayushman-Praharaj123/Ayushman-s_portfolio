import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="relative bg-black text-white py-24 px-6 md:px-16 overflow-hidden" id="contact">
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-16 animate-fade-in-down">
          Let's Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm always excited to chat about <span className="text-green-400 font-semibold">Web Development</span>, <span className="text-blue-400 font-semibold">UI/UX Design</span>, or your next big idea.
            </p>
            <div className="space-y-4 text-lg">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-green-400 text-xl" />
                <a href="mailto:ayushmanpraharaj85@gmail.com" className="hover:underline">
                  ayushmanpraharaj85@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-green-400 text-xl" />
                <span>+91 97770 7231</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-green-400 text-xl" />
                <span>Berhampur, Odisha, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 space-y-6 animate-fade-in-right transition-all duration-300">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-300">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full p-3 rounded-lg bg-black/30 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-300">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full p-3 rounded-lg bg-black/30 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-300">Message</label>
                <textarea 
                  id="message"
                  rows="5"
                  className="w-full p-3 rounded-lg bg-black/30 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold hover:scale-105 hover:opacity-90 transition-transform duration-200"
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
