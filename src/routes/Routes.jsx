import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Homepage from "../pages/Homepage/Homepage";
import About from "../pages/About/About";
import Contact from "../pages/Contacts/Contacts";

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
        }
      ]
    },
  ]);

export default router;