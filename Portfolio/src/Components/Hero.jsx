import React from 'react'
import HeroImage from '../assets/HeroImage.png'
const Hero = () => {
    return (
        <div className='bg-black text-white text-center py-16' id='home'>
            <img src={HeroImage} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
            <h1 className='text-4xl font-bold'>
                I'm{" "}
                <span>
                    Ayushman Praharaj <br />
                </span>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>UI-UX Designer &</span> <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500'>Full Stack Devloper</span>
            </h1>

            <p className='mt-4 text-lg text-gray-400 px-4 md:px-32 '>
            A passionate UI/UX Designer & Full Stack Developer with a creative edge and a problem-solving mindset.

            </p>
            <div className='mt-8 space-x-4'>
                <button className='bg-gradient-to-r from-green-400 to-blue-500  text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'> Hire Me</button>
                <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Dowload CV</button>
            </div>
        </div>
    )
}

export default Hero
