import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className='bg-primary'>
            <div className='w-[90%] md:max-w-6xl mx-auto min-h-screen'>
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
                <p className='text-center mb-4 text-[#9f9f9f]'>Get in Touch</p>
                <h2 className='text-3xl md:text-5xl text-center font-bold text-white'>Reach Out to Me</h2>
                <p className='w-24 h-1 bg-white mx-auto mt-8'></p>
                <div className='w-full md:w-[35%] text-center mx-auto mt-8 text-white'>
                    <p className='text-[#fefae0]'>For the most efficient way to reach me via email, if you seriously expect a reply, please send me an email.</p>
                    <div className='mt-4'>
                        <h3 className='text-white font-semibold'>tr30365s25@gmail.com</h3>
                        <img className='mx-auto w-[320px] h-[280px]' alt='tr30365s25@gmail.com' src={'/assets/email.png'} />
                    </div>
                </div>
                <ul className='flex justify-center md:justify-end gap-4 md:gap-6 pb-6 text-white'>
                    <Link to='https://www.linkedin.com/in/hellotanvir4/' className='flex items-center gap-2 text-[#4ecdc4] font-semibold w-[45px]'>
                        <img alt='facebook' src={'/assets/linkedin.png'} />
                    </Link>
                    <Link to='https://github.com/tanvir244' className='flex items-center gap-2 text-[#fb6f92] font-semibold w-[45px]'>
                        <img alt='github' src={'/assets/github.png'} />
                    </Link>
                    <Link to='https://www.facebook.com/tanvirrahman.saim.7' className='flex items-center gap-2 text-[#faf0ca] font-semibold w-[45px]'>
                        <img alt='facebook' src={'/assets/facebook.png'} />
                    </Link>
                    <Link to='https://www.instagram.com/hellotanvir4/' className='flex items-center gap-2 text-[#faf0ca] font-semibold w-[45px]'>
                        <img alt='instagram' src={'/assets/instagram.png'} />
                    </Link>
                    <Link to='https://x.com/Tanvir339077' className='flex items-center gap-2 text-[#faf0ca] font-semibold w-[45px]'>
                        <img alt='twitter' src={'/assets/twitter.png'} />
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Contact;