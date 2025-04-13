import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const contactCards = [
  {
    icon: <FaPhone className="text-green-400 text-xl" />,
    title: 'Call Me',
    detail: '+91 97770 7231',
    link: 'tel:+91977707231',
  },
  {
    icon: <FaEnvelope className="text-blue-400 text-xl" />,
    title: 'Email Me',
    detail: 'ayushmanpraharaj85@gmail.com',
    link: 'mailto:ayushmanpraharaj85@gmail.com',
  },
  {
    icon: <FaLinkedin className="text-pink-400 text-xl" />,
    title: 'Connect on LinkedIn',
    detail: 'linkedin.com/in/ayushmanpraharaj',
    link: 'https://www.linkedin.com/in/ayushmanpraharaj',
  },
  {
    icon: <FaMapMarkerAlt className="text-yellow-400 text-xl" />,
    title: 'Location',
    detail: 'Berhampur, Odisha, India',
    link: null,
  },
];

const Contact = () => {
  return (
    <div className="relative bg-black text-white py-24 px-6 md:px-16 overflow-hidden" id="contact">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section heading */}
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-16">
          Let's Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Styled Left Section */}
          <div className="md:col-span-1 space-y-6 animate-fade-in-left">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
              Let’s connect
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m always open to <span className="text-green-400 font-semibold">exciting opportunities</span>, 
              <span className="text-blue-400 font-semibold"> creative collaborations</span>, or just a chill convo about 
              <span className="text-yellow-300 font-semibold"> design and tech</span>.
            </p>
            <p className="text-sm text-gray-500 italic">
              “Great design is born of two things: simplicity and clarity.”
            </p>
          </div>

          {/* Contact Cards Section */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactCards.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 shadow-md transition hover:shadow-lg hover:scale-[1.02] space-y-2"
              >
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-1 text-blue-400 hover:underline break-all"
                  >
                    {item.detail}
                  </a>
                ) : (
                  <p className="mt-1 text-gray-300">{item.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
