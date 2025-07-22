import Image from "../../components/image/image";

const CreatePage = () => {
  return (
    <div className="flex flex-col">
      <div className="border-t border-b border-[#e9e9e9] py-1 flex items-center justify-between">
        <h1 className="text-[20px] font-medium">Create Pin</h1>
        <button className="bg-[#e50829] hover:bg-[#c1011e] text-white font-medium border-none outline-none px-2 py-2 rounded-full cursor-pointer text-[12px]">
          Publish
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-16 max-[1104px]:flex-col max-[1104px]:items-center max-[1104px]:mb-16">
        <div className="bg-[#e9e9e9] cursor-pointer text-[18px] flex items-center justify-center rounded-[32px] border-2 border-dashed border-[#dddddd] w-[320px] h-[440px] p-4 relative max-[380px]:w-full">
          <div className="flex flex-col items-center gap-2">
            <Image src="/general/upload.svg" alt="" />
          </div>
          <div className="absolute bottom-6 text-[13px] text-center text-gray-500 w-full">
            We recommend using high quality .jpg files less than 20 MB or .mp4
            files less than 200 MB.
          </div>
        </div>
        <form className="flex flex-col gap-4 w-[420px] max-[540px]:w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-[13px] text-gray-500">
              Title
            </label>
            <input
              type="text"
              placeholder="Add a title"
              name="title"
              id="title"
              className="text-[13px] border-2 border-[#e9e9e9] p-2 rounded-[16px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-[13px] text-gray-500">
              Description
            </label>
            <input
              type="text"
              placeholder="Add a detailed description"
              name="description"
              id="description"
              className="text-[13px] border-2 border-[#e9e9e9] p-4 rounded-[16px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="link" className="text-[13px] text-gray-500">
              Link
            </label>
            <input
              type="text"
              placeholder="Add a link"
              name="link"
              id="link"
              className="text-[13px] border-2 border-[#e9e9e9] p-2 rounded-[16px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="board" className="text-[13px] text-gray-500">
              Board
            </label>
            <select
              name="board"
              id="board"
              className="text-[13px] border-2 border-[#e9e9e9] p-2 rounded-[16px]"
            >
              <option value="">Choose a board</option>
              <option value="1">Board 1</option>
              <option value="2">Board 2</option>
              <option value="3">Board 3</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="tags" className="text-[13px] text-gray-500">
              Tagged topics
            </label>
            <input
              type="text"
              placeholder="Add a tags"
              name="tags"
              id="tags"
              className="text-[13px] border-2 border-[#e9e9e9] p-2 rounded-[16px]"
            />
            <small className="text-[#a6a6a6] text-[13px]">
              Don&apos;t worry, people won&apos;t see your tags
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
