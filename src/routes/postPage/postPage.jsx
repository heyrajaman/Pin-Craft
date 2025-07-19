import Image from "../../components/image/image";
import PostInteractions from "../../components/postInteractions/postInteractions";
import Comments from "../../components/comments/comments";
import { Link } from "react-router-dom";

const PostPage = () => {
  return (
    <div className="flex justify-center gap-8">
      <svg
        height="20"
        viewBox="0 0 24 24"
        width="20"
        style={{ cursor: "pointer" }}
      >
        <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z"></path>
      </svg>

      <div className="w-[65%] max-h-[560px] flex border border-[#e9e9e9] rounded-[32px] overflow-hidden max-[1127px]:w-full max-[1127px]:mr-4 max-[751px]:flex-col max-[751px]:max-h-none">
        <div className="flex-1 bg-[#c8bcaf]">
          <Image
            src="pins/pin1.jpeg"
            alt=""
            w={736}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 h-full flex flex-col gap-8 p-4 overflow-hidden">
          <PostInteractions />
          <Link to="/Aman" className="flex items-center gap-2">
            <Image
              src="/general/noAvatar.png"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm">Aman Singh</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
