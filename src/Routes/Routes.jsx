import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Service from "../Pages/Service/Service";
import OurPackages from "../Pages/OurPackages/OurPackages";
import CoverageArea from "../Pages/CoverageArea/CoverageArea";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
     errorElement: <Error/>,
        children: [
      { path: "/", element: <Home/> },
      { path: "/our-packages", element: <OurPackages/> },
      { path: "/service", element: <Service/> },
{ path: "/coverage-area", element: <CoverageArea/> },
    
    ],
  },
]);