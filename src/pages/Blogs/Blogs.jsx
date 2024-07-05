import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        fetch('./articles.json')
            .then(res => res.json())
            .then(data => setContents(data))
    }, [])

    return (
        <div className='bg-primary'>
            <div className='w-[90%] md:max-w-6xl mx-auto text-white'>
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
                <p className='text-center mb-4 text-[#9f9f9f]'>Written by hand</p>
                <h2 className='text-5xl text-center font-bold'>Blogs I Wrote</h2>
                <p className='w-24 h-1 bg-white mx-auto mt-8'></p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
                    {
                        contents.map((content, index) => <div
                            key={index}
                            className="card bg-base-100 shadow-xl image-full">
                            <figure><img src={content.img} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-semibold mb-4 text-white">{content.title}</h2>
                                <p className="text-sm font-medium">{content.description}</p>
                                <Link to={content.link}>
                                    <div className="card-actions justify-end">
                                        <button className="btn px-4">See More</button>
                                    </div>
                                </Link>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;