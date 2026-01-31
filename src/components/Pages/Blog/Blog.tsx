import { blogCont } from "../../../const/Blog/Blog";
import PageCont from "../../Helpers/PageCont/PageCont";
import BlogItem from "./BlogItem/BlogItem";

// I've added the years on the page, but in reality they will have be limited. Since they are attached to the BlogItems, they should be limited to the amount of posts loaded, therefore it might work out better than expected

function Blog() {
  let prevYear: number = 0;

  return (
    <PageCont title={blogCont.title} description={blogCont.description}>
      <div className="flex w-full h-full">
        <div className="w-0.5 bg-purple mr-3"></div>
        <section className="flex flex-col-reverse gap-3">
          {blogCont.blogItems.length > 0
            ? blogCont.blogItems.map((item) => {
                let showDate = 0;
                if (+item.postDate.slice(8) !== prevYear) {
                  prevYear = +item.postDate.slice(8);
                  showDate = prevYear;
                }
                return (
                  <BlogItem
                    postDate={item.postDate}
                    showDate={showDate}
                    postID={item.postID}
                    key={item.postID}
                    postTitle={
                      item.postTitle.length < 30
                        ? item.postTitle
                        : `${item.postTitle.slice(0, 28)}...`
                    }
                  />
                );
              })
            : "No blog posts yet!"}
        </section>
      </div>
    </PageCont>
  );
}

export default Blog;
