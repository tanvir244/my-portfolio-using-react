import { Link } from "react-router-dom";


const Navbar = () => {

    const navItems = [
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Resume",
            path: "/resume"
        },
        {
            title: "Projects",
            path: "/projects"
        },
        {
            title: "Blogs",
            path: "/blogs"
        },
        {
            title: "Contacts",
            path: "/contacts"
        },
    ]

    return (
        <div className="navbar text-white py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems.map(item => (
                            <li key={item.path}><Link to={item.path}>{item.title}</Link></li>
                        ))}
                    </ul>
                </div>
                <Link href={'/'}>
                    <img alt='logo' src={'/logo3.png'} className="w-[80px] h-[80px]" />
                </Link>
            </div>
            <div className="navbar-end hidden md:flex w-[78%]">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map(item => (
                        <li key={item.path}><Link to={item.path}>{item.title}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;