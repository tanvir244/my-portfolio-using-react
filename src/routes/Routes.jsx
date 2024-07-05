import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Homepage from "../pages/Homepage/Homepage";
import About from "../pages/About/About";
import Contact from "../pages/Contacts/Contacts";
import Blogs from "../pages/Blogs/Blogs";
import Resume from "../pages/Resume/Resume";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Homepage />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/contacts',
            element: <Contact />
        },
        {
            path: '/blogs',
            element: <Blogs />
        },
        {
            path: '/resume',
            element: <Resume />
        }
      ]
    },
  ]);

export default router;