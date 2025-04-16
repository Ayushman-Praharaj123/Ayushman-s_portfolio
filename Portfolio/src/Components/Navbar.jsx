import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'aboutme' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="bg-black backdrop-blur-md text-white px-6 md:px-16 lg:px-24 py-4 shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-extrabold tracking-wide text-gray-400">
          Ayushman
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10 text-sm lg:text-base font-medium">
          {navLinks.map(({ name, id }, idx) => (
            <a
              key={idx}
              href={`#${id}`}
              className="hover:text-green-400 transition duration-200"
            >
              {name}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <button className="hidden md:inline-block px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 text-sm lg:text-base">
          Get Started
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden text-center transition-all duration-500 ease-in-out ${
          isOpen
            ? 'max-h-screen opacity-100 mt-4 space-y-4'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {navLinks.map(({ name, id }, idx) => (
          <a
            key={idx}
            href={`#${id}`}
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium hover:text-green-400 transition"
          >
            {name}
          </a>
        ))}
        <button
          className="mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 shadow-md hover:scale-105 transition" id='https://www.linkedin.com/in/ayushman-praharaj-28985231b/'
        >
          LinkDin
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
