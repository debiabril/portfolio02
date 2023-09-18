import { createBrowserRouter} from "react-router-dom";
import { AboutMe } from "../components/AboutMe";
import { Hero } from "../components/Hero";
import { Education } from "../components/Education";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Layout } from "../layout/Layout";
import NotFound from "../components/NotFound";

const router = createBrowserRouter ([
    {path: '/', 
    element: <Layout/> , 
    children:[
    {   path: '/', element: <Hero/>  },
    {   path:'/aboutme', element: <AboutMe/> },
    {   path:'/education', element: <Education/> },
    {   path:'/skills', element: <Skills/> },
    {   path:'/projects', element: <Projects/> },
    /* {   path:'/experience', element: <Experience/> }, */
    {   path:'*', element: <NotFound/> },
    {   path:'/404', element: <NotFound/> }
    ]},
])
export default router;