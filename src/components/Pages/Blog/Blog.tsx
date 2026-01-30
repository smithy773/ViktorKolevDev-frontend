import PageCont from "../../Helpers/PageCont/PageCont";
import BlogItem from "./BlogItem/BlogItem";

function Blog() {
  return (
    <PageCont title="Blog page" description="BLOG DESCRIPTION">
      <div>
        <BlogItem />
      </div>
    </PageCont>
  );
}

export default Blog;
