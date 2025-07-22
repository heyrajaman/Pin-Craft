import { useState } from "react";
import Image from "../image/image";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  const currentUser = true;

  return currentUser ? (
    <div className="relative hidden max-[475px]:hidden sm:flex items-center gap-4">
      <Image
        src="/general/noAvatar.png"
        alt="user"
        className="w-10 h-10 object-cover rounded-full"
      />
      <Image
        onClick={() => setOpen((prev) => !prev)}
        src="/general/arrow.svg"
        alt="user"
        className="w-4 h-4 cursor-pointer"
      />
      {open && (
        <div className="absolute top-[120%] right-0 z-[999] bg-white p-4 rounded-lg shadow-md flex flex-col text-sm">
          <div className="p-2 rounded-lg hover:bg-gray-100 hover:text-gray-500 cursor-pointer">
            Profile
          </div>
          <div className="p-2 rounded-lg hover:bg-gray-100 hover:text-gray-500 cursor-pointer">
            Setting
          </div>
          <div className="p-2 rounded-lg hover:bg-gray-100 hover:text-gray-500 cursor-pointer">
            Logout
          </div>
        </div>
      )}
    </div>
  ) : (
    <a
      href="/"
      className="text-lg px-4 py-2 rounded-full hover:bg-gray-100 transition"
    >
      Login / Sign Up
    </a>
  );
};

export default UserButton;
