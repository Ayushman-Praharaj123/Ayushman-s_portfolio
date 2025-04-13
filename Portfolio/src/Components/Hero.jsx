import React from 'react';
import HeroImage from '../assets/HeroImage.png';

const Hero = () => {
    return (
        <div className='bg-black text-white text-center py-16 px-4 md:px-16' id='home'>
            <img 
                src={HeroImage} 
                alt="Profile" 
                className='mx-auto mb-8 w-36 h-36 md:w-48 md:h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' 
            />
            <h1 className='text-3xl md:text-4xl font-bold leading-tight'>
                I'm <br />
                <span className='text-white'>Ayushman Praharaj</span> <br />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                    UI-UX Designer &nbsp;
                </span>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500'>
                    Full Stack Developer
                </span>
            </h1>

            <p className='mt-4 text-base md:text-lg text-gray-400 max-w-3xl mx-auto'>
                A passionate UI/UX Designer & Full Stack Developer with a creative edge and a problem-solving mindset.
            </p>

            <div className='mt-8 flex flex-col md:flex-row justify-center items-center gap-4'>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full w-full md:w-auto'>
                    Hire Me
                </button>
                <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full w-full md:w-auto'>
                    Download CV
                </button>
            </div>
        </div>
    );
};

export default Hero;
