import { Link } from "react-router-dom";

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
                    <a className="bg-[#1982c4] text-white hover:bg-white hover:text-black py-3 px-4 rounded-md font-semibold" href="https://drive.google.com/file/d/1Ja0-TunB4uEvqtQ85OM_Zj03gJHMpHaf/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume</a>
                    <a className="bg-[#ffd60a] text-black hover:bg-white hover:text-black py-3 px-4 rounded-md font-semibold" href="https://drive.google.com/uc?export=download&id=1Ja0-TunB4uEvqtQ85OM_Zj03gJHMpHaf" target="_blank" rel="noopener noreferrer">Download</a>
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
                <div className="space-y-4 pt-2 pb-20">
                    <h2 className="text-4xl my-6 font-bold">Technical Skills</h2>
                    <div className="flex justify-center gap-4 w-1/2 mx-auto">
                        <img src="https://i.ibb.co/Z8k9JyW/html.png" className="w-[90px]" alt="" />
                        <img src="https://i.ibb.co/wR0prXY/css.png" className="w-[90px]" alt="" />
                        <img src="https://i.ibb.co/CJmY0ZV/tailwind.png" className="w-[90px]" alt="" />
                        <img src="https://i.ibb.co/857z8g1/js.png" className="w-[90px]" alt="" />
                        <img src="https://i.ibb.co/ZHK08w0/react.png" className="w-[90px]" alt="" />
                    </div>
                    <div className="flex justify-center gap-4 w-1/2 mx-auto">
                        <img src="https://i.ibb.co/VMFnxpX/firebase.png" className="w-[90px]" alt="" />
                        <img src="https://i.ibb.co/9yDZLtV/node.png" className="w-[90px]" alt="" />
                        <img src="https://i.ibb.co/gDjt3mT/express.png" className="w-[90px]" alt="" />
                        <img src="https://i.ibb.co/1dDp6bc/mongodb.png" className="w-[90px]" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;