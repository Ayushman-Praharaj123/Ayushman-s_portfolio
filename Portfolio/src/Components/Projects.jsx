import React, { useState } from 'react';

const webProjects = [
  { id: 1, title: "Portfolio Website", description: "A responsive personal portfolio showcasing skills, projects, and resume." },
  { id: 2, title: "Student Attendance System", description: "A web app to help students and teachers manage attendance efficiently." },
  { id: 3, title: "Blog Platform", description: "A full-featured blog platform with authentication, posting, and comments." },
  { id: 4, title: "Task Manager", description: "A to-do list application with task deadlines, priorities, and reminders." },
  { id: 5, title: "E-commerce Store", description: "A complete shopping platform with cart, payment, and admin panel." },
  { id: 6, title: "Weather App", description: "A live weather app using public API and location-based weather forecasts." },
  { id: 7, title: "Quiz App", description: "An interactive quiz application with a timer and score calculation." },
  { id: 8, title: "Chat Application", description: "A real-time chat app using WebSockets and Node.js backend." },
  { id: 9, title: "Movie Search Engine", description: "A UI to search and filter movies using a movie API." },
  { id: 10, title: "Fitness Tracker", description: "Tracks exercise logs, calories, and fitness goals for users." },
  { id: 11, title: "Recipe Finder", description: "Find recipes based on ingredients using a public API." },
  { id: 12, title: "Job Portal", description: "Post and apply for jobs with resume upload and filtering." },
  { id: 13, title: "Expense Tracker", description: "Manage and analyze personal finances using charts." },
  { id: 14, title: "Notes App", description: "A simple note-taking app with local storage integration." },
  { id: 15, title: "Online Code Editor", description: "Run HTML, CSS, JS code in real-time directly in browser." },
  { id: 16, title: "Booking System", description: "An online system to book appointments or tickets." },
  { id: 17, title: "Resume Builder", description: "Generate resumes dynamically from input and download as PDF." },
  { id: 18, title: "Music Player", description: "A web-based audio player with playlist management." },
  { id: 19, title: "Online Poll App", description: "Create and vote in polls with live results." },
  { id: 20, title: "Product Landing Page", description: "One-page site for showcasing and marketing a product." },
  { id: 21, title: "Portfolio CMS", description: "A personal CMS to manage projects dynamically." },
  { id: 22, title: "Blog CMS", description: "A content management system for blog owners." },
  { id: 23, title: "Crypto Tracker", description: "Track cryptocurrency prices and stats in real-time." },
  { id: 24, title: "Instagram Clone", description: "A simplified clone of Instagram with post and comment features." },
  { id: 25, title: "Netflix UI Clone", description: "Frontend clone of Netflix homepage using ReactJS." },
  { id: 26, title: "AI Chatbot", description: "Simple chatbot with preset responses or GPT API integration." },
  { id: 27, title: "News Aggregator", description: "Displays latest news articles from multiple sources." },
  { id: 28, title: "Donation Platform", description: "Platform for raising funds and accepting donations." },
  { id: 29, title: "Real Estate Listing", description: "A portal to list, browse, and filter property listings." },
  { id: 30, title: "Online Portfolio Generator", description: "Auto-generate and host portfolios using templates." },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? webProjects : webProjects.slice(0, 9);

  return (
    <div className="relative bg-black text-white py-24 overflow-hidden" id="projects">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[40rem] h-[40rem] bg-pink-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-10 right-1/4 w-[30rem] h-[30rem] bg-yellow-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-16 animate-fade-in-down">
          Projects & Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-pink-500/10 group"
            >
              <div className="text-2xl font-bold text-right text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400">
                {project.id}
              </div>
              <h3 className="mt-2 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 group-hover:underline">
                {project.title}
              </h3>
              <p className="mt-3 text-gray-300 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>

        {webProjects.length > 9 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 to-yellow-500 hover:opacity-90 hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              {showAll ? 'Show Less 🔽' : 'Show More 🚀'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
