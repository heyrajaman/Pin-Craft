import UserButton from "../userButton/userButton";
import Image from "../image/image";

const TopBar = () => {
  return (
    <div className="my-4 flex items-center gap-4">
      <div className="flex items-center gap-4 flex-1 bg-gray-100 rounded-xl p-2">
        <Image src="general/search.svg" alt="" className="w-6 h-6" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-transparent border-none outline-none text-lg text-gray-700"
        />
      </div>
      <UserButton />
    </div>
  );
};

export default TopBar;
