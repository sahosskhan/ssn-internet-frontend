import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import ChatButton from "../Pages/Home/ChatBtn";
import Footer from "../Pages/Shared/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
          <div className="pt-16">
              <Outlet></Outlet>
          </div>

            <Footer/>
               <ChatButton/>
        </div>
    );
};

export default MainLayout;