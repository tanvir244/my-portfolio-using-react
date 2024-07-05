import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            <div className='w-full md:w-1/2'>
                <h1 className='text-3xl lg:text-5xl font-bold text-white mb-4'>Tanvir Rahman</h1>
                <p className='text-[#858383] text-md font-normal mb-7'>Currently, I am working with JavaScript technologies such as Next.js, React.js, Node.js, and Express.js to create scalable full-stack applications. I am also focusing significantly on vanilla JavaScript to clarify my concepts and deepen my understanding of it.</p>

                <ul className='flex gap-6 text-white'>
                    <Link to='https://www.linkedin.com/in/hellotanvir4/' className='flex items-center gap-2 text-[#faf0ca] font-semibold'><div className='w-3 h-3 bg-[#faf0ca] rounded-full'></div>LinkedIn</Link>
                    <Link to='https://github.com/tanvir244' className='flex items-center gap-2 text-[#fb6f92] font-semibold'><div className='w-3 h-3 bg-[#fb6f92] rounded-full'></div>Github</Link>
                    <Link to='https://www.facebook.com/tanvirrahman.saim.7' className='flex items-center gap-2 text-[#4ecdc4] font-semibold'><div className='w-3 h-3 bg-[#4ecdc4] rounded-full'></div>Facebook</Link>
                </ul>
            </div>
            <div className='w-full md:w-1/2 flex justify-end'>
                <img className='rounded-2xl w-[400px] h-[400px] object-cover' alt='author' src="https://i.ibb.co/6mMsMt0/Untitled-design-5.png" />
            </div>
        </div>
    );
};

export default Banner;