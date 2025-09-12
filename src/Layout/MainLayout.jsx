import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import ChatButton from "../Pages/Home/ChatBtn";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <ChatButton/>
        </div>
    );
};

export default MainLayout;