import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
//@ts-ignore
import "github-markdown-css";
import "./MarkdownRenderer.css";

function MarkdownRenderer({ children }: any) {
  return (
    <div className="markdown-body">
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {children}
      </Markdown>
    </div>
  );
}

export default MarkdownRenderer;
