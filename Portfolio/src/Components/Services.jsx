import React from 'react';

const services = [
  {
    id: 1,
    title: 'UI/UX Design',
    description: 'Designing intuitive and visually engaging user interfaces with a focus on user experience, wireframing, and prototyping.'
  },
  {
    id: 2,
    title: 'Frontend Development',
    description: 'Building responsive and interactive UIs using React.js, HTML, CSS, JavaScript, and modern UI libraries like Tailwind and Bootstrap.'
  },
  {
    id: 3,
    title: 'Backend Development',
    description: 'Creating robust server-side logic with Node.js, Express.js, MongoDB, and Firebase to support your frontend apps.'
  },
  {
    id: 4,
    title: 'Full Stack Development',
    description: 'Developing complete web applications using the MERN stack — from designing frontend to building and connecting the backend.'
  },
  {
    id: 5,
    title: 'Portfolio & Landing Pages',
    description: 'Creating visually stunning and fast-loading personal portfolios, product pages, and custom landing pages.'
  },
  {
    id: 6,
    title: 'Project Support & Maintenance',
    description: 'Offering continuous project updates, bug fixes, feature additions, and performance optimization post-delivery.'
  }
];

const Services = () => {
  return (
    <div className="relative bg-black text-white py-24" id="services">
      {/* Glowing Background Blurs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/3 w-[30rem] h-[30rem] bg-blue-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-10 right-1/4 w-[25rem] h-[25rem] bg-green-400/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-fade-in-down">
          My Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-[1.03] hover:shadow-green-400/10 group"
            >
              <div className="text-2xl font-bold text-right text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.id}
              </div>
              <h3 className="mt-3 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 group-hover:underline">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
