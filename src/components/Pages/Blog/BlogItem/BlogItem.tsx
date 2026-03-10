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
    <div className="flex gap-8 items-center">
      <span className="blog-date w-10 font-bold text-highlight">
        {showDate == 0 ? "" : <p className="border-b">{showDate}</p>}
      </span>
      <div
        className="grid grid-rows-1 grid-cols-3 items-center justify-items-center border border-lines blog-item-cont hover:cursor-pointer hover:text-background hover:bg-highlight transition-all bg-item-background rounded-md"
        onClick={() => navigate(`/blog/${postID}`)}
      >
        <span>{postDate}</span>
        <p className="col-start-2 col-end-4 ">{postTitle}</p>
      </div>
    </div>
  );
}

export default BlogItem;
