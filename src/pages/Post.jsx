import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useParams, Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { earthyTheme } from "../theme/earthyTheme";

export default function Post() {
  const { postId } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../posts/${postId}.md?raw`)
      .then((module) => setContent(module.default))
      .catch(() => setContent("# Post not found"));
  }, [postId]);

  const renderers = {
    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      const language = match ? match[1] : "text";

      return !inline && match ? (
        <div className="relative group my-6">
          <div className="absolute top-0 right-0 px-3 py-1 text-xs font-semibold text-[#6B5E4D] bg-[#D4C9B3] rounded-bl-md rounded-tr-md border-l-2 border-b-2 border-[#C2B69C] z-10">
            {language.toUpperCase()}
          </div>
          <SyntaxHighlighter
            style={earthyTheme}
            language={language}
            PreTag="div"
            showLineNumbers={true}
            lineNumberStyle={{
              minWidth: "3em",
              paddingRight: "1em",
              color: "#9B8B7A",
              userSelect: "none",
            }}
            customStyle={{
              margin: 0,
              borderRadius: "0.5rem",
              border: "2px solid #D4C9B3",
              fontSize: "0.9rem",
            }}
            {...props}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code
          className="px-1.5 py-0.5 bg-[#E8E0D5] text-[#5A4B3A] rounded text-sm font-mono border border-[#D4C9B3]"
          {...props}
        >
          {children}
        </code>
      );
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#F7F1E5] rounded-xl shadow-lg mt-8 mb-16">
      <Link
        to="/blog"
        className="text-[#6B5E4D] hover:underline mb-6 inline-block font-medium transition-all hover:translate-x-1]"
      >
        ← Back to Blog
      </Link>

      <div className="prose prose-lg max-w-none text-[#3B3A30]">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={renderers}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
