import LeftBar from "../../components/leftBar/leftBar"
import TopBar from "../../components/topBar/topBar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="w-full flex gap-4">
      <LeftBar />
      <div className="flex-1 mr-4">
        <TopBar />  
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
