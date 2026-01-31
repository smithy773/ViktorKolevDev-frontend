type BlogItemTypes = {
  postTitle: string;
  postDate: string;
};

function BlogItem({ postTitle, postDate }: BlogItemTypes) {
  return (
    <div>
      <div className="grid grid-rows-1 grid-cols-3 border max-w-md w-md p-1 max-h-8 h-8 items-center justify-items-center border-lines">
        <p>{postDate}</p>
        <p className="col-start-2 col-end-4">{postTitle}</p>
      </div>
    </div>
  );
}

export default BlogItem;
