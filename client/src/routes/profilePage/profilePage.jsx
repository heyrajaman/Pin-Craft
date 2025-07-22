import { useState } from "react";
import Image from "../../components/image/image";
import Gallery from "../../components/gallery/gallery";
import Collections from "../../components/collections/collections";

const ProfilePage = () => {
  const [type, setType] = useState("saved");

  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        src="general/noAvatar.png"
        alt=""
        className="rounded-full object-cover w-32 h-32"
      />
      <h1 className="text-3xl font-medium">Aman Singh</h1>
      <span className="font-light text-gray-500">@aman</span>
      <div className="font-medium">10 followers • 20 followings</div>
      <div className="flex items-center gap-8">
        <Image src="/general/share.svg" alt="" className="w-6 h-6" />
        <div className="flex gap-4">
          <button className="border-none px-4 py-2 rounded-full font-bold cursor-pointer bg-gray-100 hover:bg-gray-200">
            Message
          </button>
          <button className="border-none px-4 py-2 rounded-full font-bold cursor-pointer bg-[#e50829] text-white hover:bg-[#c1011e] disabled:cursor-not-allowed disabled:opacity-50">
            Follow
          </button>
        </div>
        <Image src="/general/more.svg" alt="" className="w-6 h-6" />
      </div>
      <div className="flex gap-4 mt-8 mb-4 font-medium">
        <span
          onClick={() => setType("created")}
          className={`cursor-pointer py-2 ${
            type === "created"
              ? "border-b-4 border-black"
              : "hover:text-gray-500"
          }`}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={`cursor-pointer py-2 ${
            type === "saved" ? "border-b-4 border-black" : "hover:text-gray-500"
          }`}
        >
          Saved
        </span>
      </div>
      {type === "created" ? <Gallery /> : <Collections />}
    </div>
  );
};

export default ProfilePage;
