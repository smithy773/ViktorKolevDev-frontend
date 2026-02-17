import { useParams } from "react-router";
// import { blogPosts, type blogPost } from "../../../../const/Blog/Blog";
import PageCont from "../../../Helpers/PageCont/PageCont";
import { useState } from "react";
import MarkdownRenderer from "../../../Helpers/MarkdownRenderer/MarkdownRenderer";

// HERE THE CODE SHOULD FETCH A POST BY TAKING THE postID from the URL AND LOAD THE BLOG POST

function BlogPost() {
  const [content, setContent] = useState("");
  let { id } = useParams();
  // const post: blogPost =
  //   blogPosts[blogPosts.findIndex((post) => post.id == id)].post;
  const fetchMarkdown = () => {
    fetch(`/pages-markdown/BlogPosts/post_${id}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Failed to load markdown:", err));
  };

  fetchMarkdown();
  return (
    <PageCont title="none" description="none">
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </PageCont>
  );
}

export default BlogPost;
