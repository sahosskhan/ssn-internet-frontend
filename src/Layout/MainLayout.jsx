import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import ChatButton from "../Pages/Home/ChatBtn";
import Footer from "../Pages/Shared/Footer";
import NoticeBar from "../Pages/Shared/NoticeBar";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            
          <div className="pt-16">
          <div>   <NoticeBar/></div>
              <Outlet></Outlet>
          </div>

            <Footer/>
               <ChatButton/>
        </div>
    );
};

export default MainLayout;