import { useParams } from "react-router";
// import { blogPosts, type blogPost } from "../../../../const/Blog/Blog";
import PageCont from "../../../Helpers/PageCont/PageCont";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

// HERE THE CODE SHOULD FETCH A POST BY TAKING THE postID from the URL AND LOAD THE BLOG POST

function BlogPost() {
  const [content, setContent] = useState("");
  let { id } = useParams();
  // const post: blogPost =
  //   blogPosts[blogPosts.findIndex((post) => post.id == id)].post;
  console.log(id);
  const fetchMarkdown = () => {
    fetch(`/pages-markdown/BlogPosts/post_${id}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Failed to load markdown:", err));
  };

  useEffect(() => {
    fetchMarkdown();
  }, []);
  return (
    <PageCont title="none" description="none">
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {content}
      </Markdown>
    </PageCont>
  );
}

export default BlogPost;
