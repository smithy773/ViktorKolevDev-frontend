import { blogCont } from "../../../const/Blog/Blog";
import PageCont from "../../Helpers/PageCont/PageCont";
import BlogItem from "./BlogItem/BlogItem";

function Blog() {
  return (
    <PageCont title={blogCont.title} description={blogCont.description}>
      <div className="flex flex-col gap-3">
        {blogCont.blogItems.length > 0
          ? blogCont.blogItems.map((item) => {
              return (
                <BlogItem
                  postDate={item.postDate}
                  postTitle={
                    item.postTitle.length < 30
                      ? item.postTitle
                      : `${item.postTitle.slice(0, 28)}...`
                  }
                />
              );
            })
          : "No blog posts yet!"}
      </div>
    </PageCont>
  );
}

export default Blog;
