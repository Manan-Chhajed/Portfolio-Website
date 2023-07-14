import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='py-2 text-xl text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>
                    MANAN CHHAJED
                </h1>
                <h2 className='py-2 text-4xl sm:text-6xl font-bold text-[#8892b0]'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            "I'm a Full Stack Developer",
                            3000,
                            "I'm a Competitive Programmer",
                            3000,
                            "I'm a Flutter Developer",
                            3000,
                        ]}
                        speed={35}
                        // style={{ fontSize: '2em' }}
                        cursor={false}
                        repeat={Infinity}
                    />
                </h2>
                <p className='md:text-xl    text-[#8892b0] py-4 max-w-[700px]'>
                    I’m a 3rd yerar undergrad at SPIT, Mumbai pursuing Computer Science (AI - ML), looking for SDE Internships.
                </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
