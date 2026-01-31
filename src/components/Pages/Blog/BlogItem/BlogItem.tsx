import { useNavigate } from "react-router";

type BlogItemTypes = {
  postTitle: string;
  postDate: string;
  postID: string;
  showDate: number;
};

function BlogItem({ postTitle, postDate, postID, showDate }: BlogItemTypes) {
  const navigate = useNavigate();
  return (
    // ADD onClick logic to navigate to "/blog/postID"
    <div className="flex gap-8 items-center">
      <span className="w-10 font-bold border-purple text-purple">
        {showDate == 0 ? "" : <p className="border-b">{showDate}</p>}
      </span>
      <div
        className="grid grid-rows-1 grid-cols-3 items-center ml-10 justify-items-center border border-lines max-w-md w-md p-1 max-h-8 h-8 hover:cursor-pointer hover:text-lines hover:bg-purple transition-all"
        onClick={() => navigate(`/blog/${postID}`)}
      >
        <p>{postDate}</p>
        <p className="col-start-2 col-end-4 ">{postTitle}</p>
      </div>
    </div>
  );
}

export default BlogItem;
