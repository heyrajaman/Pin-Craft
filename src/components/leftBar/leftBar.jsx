import { Link } from "react-router-dom";
const LeftBar = () => {
  return (
    <div className="flex flex-col items-center justify-between w-[56px] h-screen sticky top-0 py-4 border-r border-[#e9e9e9]">
      <div className="flex flex-col items-center gap-6">
        <Link to="/" className="w-12 h-12 flex items-center justify-center">
          <img src="/general/logo.png" alt="" className="w-12 h-12" />
        </Link>
        <Link to="/" className="w-12 h-12 flex items-center justify-center">
          <img src="/general/home.svg" alt="" />
        </Link>
        <Link to="/" className="w-12 h-12 flex items-center justify-center">
          <img src="/general/create.svg" alt="" />
        </Link>
        <Link to="/" className="w-12 h-12 flex items-center justify-center">
          <img src="/general/updates.svg" alt="" />
        </Link>
        <Link to="/" className="w-12 h-12 flex items-center justify-center">
          <img src="/general/messages.svg" alt="" />
        </Link>
      </div>
      <Link to="/" className="w-12 h-12 flex items-center justify-center">
        <img src="/general/settings.svg" alt="" />
      </Link>
    </div>
  );
};

export default LeftBar;
