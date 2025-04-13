import React from 'react'
import AboutImage from '../assets/AboutImage.jpg'
const About = () => {
    return (
        <div className='bg-black text-white py-20 ' id='aboutme'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={AboutImage} alt="" className='w-72 h-80 rounded-full object-cover mb-8 md:mb-0' />
                    <div className='flex-1'>
                        <p className='text-lg text-gray-400 mb-8'>
                            Hi, I'm Ayushman Praharaj <br />
                            I’m a UI/UX Designer and Full Stack Developer with a passion for creating beautiful, functional, and scalable digital products. Currently pursuing B.Tech at NIST University (2024–2028), I love solving real-world problems through design and code.



                        </p>
                        <div className='space-y-4'>
                            {/* Skill: HTML & CSS */}
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'></div>
                                </div>
                            </div>

                            {/* Skill: JavaScript */}
                            <div className='flex items-center'>
                                <label htmlFor="reactjs" className='w-2/12'>Java Script</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'></div>
                                </div>
                            </div>

                            {/* Skill: MERN Stack */}
                            <div className='flex items-center'>
                                <label htmlFor="mern" className='w-2/12'>MERN Stack</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                                </div>
                            </div>

                            {/* Skill: UI */}
                            <div className='flex items-center'>
                                <label htmlFor="ui" className='w-2/12'>Flask</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-15/20'></div>
                                </div>
                            </div>

                            {/* Skill: UX */}
                            <div className='flex items-center'>
                                <label htmlFor="ux" className='w-2/12'>UI</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'></div>
                                </div>

                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="ux" className='w-2/12'>UX</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-18/20'></div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-12 flex justify-between text-center gap-6 flex-wrap'>
                            {/* Web Dev Projects */}
                            <div className='flex-1'>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    30+
                                </h3>
                                <p>Web Dev Projects Completed</p>
                            </div>

                            {/* UI & UX Projects */}
                            <div className='flex-1'>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    26+
                                </h3>
                                <p>UI & UX Projects</p>
                            </div>

                            {/* Real World Problems */}
                            <div className='flex-1'>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    10+
                                </h3>
                                <p>Solved Real World Problem</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
