import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
//@ts-ignore
import "github-markdown-css";
import "./MarkdownRenderer.css";
import rehypeHighlight from "rehype-highlight";

function MarkdownRenderer({ children }: any) {
  return (
    <div className="markdown-body">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
      >
        {children}
      </Markdown>
    </div>
  );
}

export default MarkdownRenderer;
