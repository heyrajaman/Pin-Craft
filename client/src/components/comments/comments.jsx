import { useState } from "react";
import Image from "../../components/image/image";
import EmojiPicker from "emoji-picker-react";

const Comments = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col gap-4 min-h-0">
      <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
        <span className="commentCount">5 comments</span>
        <div className="flex gap-4">
          <Image
            src="/general/noAvatar.png"
            alt=""
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1">
            <span className="ont-medium text-sm">Boss Boss</span>
            <p className="text-sm">WoW .. !! 😍</p>
            <span className="text-xs text-[#a6a6a6]">1h ago</span>
          </div>
        </div>
      </div>

      <form className="bg-[#f1f1f1] p-4 rounded-[28px] flex items-center gap-4">
        <input
          type="text"
          placeholder="Add a comment"
          className="flex-1 border-none outline-none bg-transparent text-base"
        />
        <div className="cursor-pointer text-[20px] relative">
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-pointer text-[20px] relative"
          >
            😊
          </div>
          {open && (
            <div className="absolute right-0 bottom-full mb-6 w-auto bg-white rounded-xl shadow-lg z-20 transform scale-75 origin-bottom-right">
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Comments;
