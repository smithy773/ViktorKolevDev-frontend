import { useParams } from "react-router";
import { blogPosts, type blogPost } from "../../../../const/Blog/Blog";
import PageCont from "../../../Helpers/PageCont/PageCont";

// HERE THE CODE SHOULD FETCH A POST BY TAKING THE postID from the URL AND LOAD THE BLOG POST

function BlogPost() {
  let { id } = useParams();
  const post: blogPost =
    blogPosts[blogPosts.findIndex((post) => post.id == id)].post;

  console.log(post);

  return (
    <PageCont title={post.title} description="none">
      <div>
        <p>{post.content}</p>
      </div>
    </PageCont>
  );
}

export default BlogPost;
