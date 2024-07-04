import { Link } from "react-router-dom";

const About = () => {
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
                <p className='text-center mb-4 text-[#9f9f9f]'>Get to know me</p>
                <h2 className='text-5xl text-center font-bold'>About Me</h2>
                <p className='w-24 h-1 bg-white mx-auto mt-8'></p>
                <div className='flex flex-col md:flex-row gap-8 my-12'>
                    <div>
                        <img className='rounded-2xl w-[400px] h-[400px] object-cover' alt='author' src="https://i.ibb.co/6mMsMt0/Untitled-design-5.png" />
                    </div>
                    <div className='text-white w-full md:w-[70%] p-4'>
                        <h3 className='text-2xl text-[#219ebc]'>Who Am I?</h3>
                        <h1 className='text-2xl md:text-3xl lg:w-[70%] font-bold mt-2 mb-4'>This is Tanvir, a web developer enthusiast, and passionate learner</h1>
                        <p className='text-[#fefae0]'>I am Tanvir Rahman, living in Uttara, Dhaka, Bangladesh. I am currently working with JavaScript technologies like Next.js, React.js, Node.js, and Express.js to build scalable full-stack applications. I am also focusing on vanilla JavaScript to deepen my understanding. Throughout my extensive journey, I have developed several serious projects using Vanilla JS, Next.js, and React.js, integrating the server side with databases. Academically, I am a first-year bachelor’s student studying Economics at the National University of Bangladesh.</p>

                        <ul className='flex gap-6 text-white mt-8'>
                            <Link to='https://www.linkedin.com/in/hellotanvir4/' className='flex items-center gap-2 text-[#faf0ca] font-semibold'><div className='w-3 h-3 bg-[#faf0ca] rounded-full'></div>LinkedIn</Link>
                            <Link to='https://github.com/tanvir244' className='flex items-center gap-2 text-[#fb6f92] font-semibold'><div className='w-3 h-3 bg-[#fb6f92] rounded-full'></div>Github</Link>
                            <Link to='https://www.facebook.com/tanvirrahman.saim.7' className='flex items-center gap-2 text-[#4ecdc4] font-semibold'><div className='w-3 h-3 bg-[#4ecdc4] rounded-full'></div>Facebook</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;   