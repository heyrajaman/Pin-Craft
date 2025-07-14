const LeftBar = () => {
  return (
    <div className="flex flex-col items-center justify-between w-[56px] h-screen sticky top-0 py-4 border-r border-[#e9e9e9]">
      <div className="flex flex-col items-center gap-6">
        <a href="/" className="w-12 h-12 flex items-center justify-center">
          <img src="/general/logo.png" alt="" className="w-12 h-12" />
        </a>
        <a href="/" className="w-12 h-12 flex items-center justify-center">
          <img src="/general/home.svg" alt="" />
        </a>
        <a href="/" className="w-12 h-12 flex items-center justify-center">
          <img src="/general/create.svg" alt="" />
        </a>
        <a href="/" className="w-12 h-12 flex items-center justify-center">
          <img src="/general/updates.svg" alt="" />
        </a>
        <a href="/" className="w-12 h-12 flex items-center justify-center">
          <img src="/general/messages.svg" alt="" />
        </a>
      </div>
      <a href="/" className="w-12 h-12 flex items-center justify-center">
        <img src="/general/settings.svg" alt="" />
      </a>
    </div>
  );
};

export default LeftBar;
