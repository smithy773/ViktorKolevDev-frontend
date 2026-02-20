import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import "./MarkdownRenderer.css";
import "./github-markdown-dark.css";
import "./github-markdown-light.css";
import "./github-markdown-dark-high-contrast.css";
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
