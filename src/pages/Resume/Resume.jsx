import { Link } from "react-router-dom";
// import html5 from './skills/html.png';
// import css from './skills/css.png';
// import tailwind from './skills/tailwind-css.png';
// import js from './skills/js.png';
// import react from './skills/react.png';
// import firebase from './skills/firebase.png';
// import mongodb from './skills/mongodb.png';
// import node from './skills/node-jd.png';
// import express from './skills/express.png';

const Resume = () => {
    return (
        <div className='bg-primary'>
            <div className='w-[90%] md:max-w-6xl mx-auto min-h-screen text-white'>
                <div className='flex justify-end pt-8'>
                    <Link to={'/'}>
                        <button className="btn btn-square btn-outline bg-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </Link>
                </div>
                <p className='text-center mb-4 text-[#9f9f9f]'>Skills & Acedemic</p>
                <h2 className='text-3xl md:text-5xl text-center font-bold text-white'>Resume Overview</h2>
                <p className='w-24 h-1 bg-white mx-auto mt-8'></p>
                <div className="flex justify-center md:justify-end gap-4 mt-4">
                    <a className="bg-[#1982c4] text-white hover:bg-white hover:text-black py-3 px-4 rounded-md font-semibold" href="https://docs.google.com/document/d/1Y630pTcynZo8He0bI5FLejhYnozvAVs_U0aa46QKyPs" target="_blank" rel="noopener noreferrer">View Resume</a>
                    <a className="bg-[#ffd60a] text-black hover:bg-white hover:text-black py-3 px-4 rounded-md font-semibold" href="https://drive.google.com/uc?export=download&id=19M9TgFXSFGl8otk8V36G7XER__YlKQN3">Download</a>

                </div>
                {/* Acedemic */}
                <div className="my-8">
                    <h2 className="text-4xl my-6 font-bold">Acedemic</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center text-white">
                                <h1 className="text-3xl font-bold text-[#fefae0]">2018 - 2020</h1>
                                <h2 className="text-xl font-semibold text-white">Secondary School Certificate (SSC)</h2>
                                <h2 className="text-lg text-[#fdf0d5]">Uttara High School & College</h2>
                                <h3 className="text-xl">Science</h3>
                            </div>
                        </div>
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center text-white">
                                <h1 className="text-3xl font-bold text-[#fefae0]">2020 - 2022</h1>
                                <h2 className="text-xl font-semibold text-white">Higher Secondary School Certificate (HSC)</h2>
                                <h2 className="text-lg text-[#fdf0d5]">Vashantek Govt. College, (Mirpur-14)</h2>
                                <h3 className="text-xl">Science</h3>
                            </div>
                        </div>
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center text-white">
                                <h1 className="text-3xl font-bold text-[#fefae0]">2022 - Present</h1>
                                <h2 className="text-xl text-white font-semibold">Undergraduate Program   (Honors)</h2>
                                <h2 className="text-lg text-[#fdf0d5]">National University of Bangladesh</h2>
                                <h3 className="text-xl">Economics</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="space-y-4 py-20">
                    <h2 className="text-4xl my-6 font-bold">Technical Skills</h2>
                    <div className="flex justify-center gap-4 w-1/2 mx-auto">
                        <img src="/public/skills/html.svg" className="w-[90px]" alt="" />
                        <img src="/public/skills/css.svg" className="w-[90px]" alt="" />
                        <img src="/public/skills/tailwind.svg" className="w-[90px]" alt="" />
                        <img src="/public/skills/js.svg" className="w-[90px]" alt="" />
                        <img src="/public/skills/react.svg" className="w-[90px]" alt="" />
                    </div>
                    <div className="flex justify-center gap-4 w-1/2 mx-auto">
                        <img src="/public/skills/firebase.svg" className="w-[90px]" alt="" />
                        <img src="/public/skills/node.svg" className="w-[90px]" alt="" />
                        <img src="/public/skills/express.svg" className="w-[90px]" alt="" />
                        <img src="/public/skills/mongodb.svg" className="w-[90px]" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;