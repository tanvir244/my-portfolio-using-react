import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

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
                <p className='text-center mb-4 text-[#9f9f9f]'>Experience</p>
                <h2 className='text-3xl md:text-5xl text-center font-bold text-white'>Projects</h2>
                <p className='w-24 h-1 bg-white mx-auto mt-8'></p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-20">
                    {
                        projects.map(project => (
                            <div key={project.name} className="card bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        className="w-[564px] h-[290px] object-cover"
                                        src={project.demo_img}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <div className="flex text-black">
                                        <div className="w-[70%] pr-4">
                                            <h3 className="text-2xl font-bold text-[#14213d] mb-6">{project.name}</h3>
                                            <div className="grid grid-cols-4 md:grid-cols-5 gap-2 w-[80%]">
                                                {project.technologies ? (
                                                    project.technologies.map((technology, index) => (
                                                        <img key={index} src={technology} className="w-[30px]" alt={`Technology ${index}`} />
                                                    ))
                                                ) : (
                                                    console.log(`Technologies for project ${project.name} is undefined or null`)
                                                )}
                                            </div>
                                        </div>
                                        <div className="w-[1%] max-h-full bg-[#6c757d] mx-auto"></div>
                                        <div className="w-[29%] pl-4">
                                            <Link to={`${project.live_link}`}><h3 className="font-bold text-xl mb-3 text-[#023047]">Project Link</h3></Link>
                                            <Link to={`${project.project_requriment}`}><h3 className="font-semibold text-black">Requirement</h3></Link>
                                            <Link to={`${project.client_code}`}><h3 className="font-semibold text-black">Client Code</h3></Link>
                                            <Link to={`${project.server_code}`}><h3 className="font-semibold text-black">Server Code</h3></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;