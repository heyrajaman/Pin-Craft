import Image from "../../components/image/image";

const PostInteractions = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 font-medium">
        <Image src="/general/react.svg" alt="" className="cursor-pointer" />
        273
        <Image src="/general/share.svg" alt="" className="cursor-pointer" />
        <Image src="/general/more.svg" alt="" className="cursor-pointer" />
      </div>
      <button className="bg-[#e50829] text-white border-none rounded-[18px] mt-2 mr-4 p-2 font-bold cursor-pointer">
        Save
      </button>
    </div>
  );
};

export default PostInteractions;
