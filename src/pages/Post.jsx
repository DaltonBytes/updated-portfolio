import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useParams, Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { earthyTheme } from "../theme/earthyTheme";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
          <div className="absolute top-0 right-0 px-3 py-1 text-xs font-semibold text-[#A3B18A] bg-[#1E2320] rounded-bl-md rounded-tr-md border-l border-b border-[#0F1315] z-10">
            {language.toUpperCase()}
          </div>

          <SyntaxHighlighter
            style={{ ...coldarkDark, ...earthyTheme }}
            language={language}
            PreTag="div"
            showLineNumbers={true}
            lineNumberStyle={{
              minWidth: "3em",
              paddingRight: "1em",
              color: "#8E8F80",
              userSelect: "none",
            }}
            customStyle={{
              margin: 0,
              borderRadius: "0.5rem",
              border: "2px solid #3F4337",
              background: "#2A2E29",
              fontSize: "0.9rem",
            }}
            {...props}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code
          className="px-1.5 py-0.5 bg-[#2A2E29] text-[#E6CFA9] rounded text-sm font-mono border border-[#3F4337]"
          {...props}
        >
          {children}
        </code>
      );
    },
  };

  return (
    <section className="bg-[#1E2320] min-h-screen pt-28 pb-24 px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/blog"
          className="text-[#A3B18A] hover:text-[#E8DCC2] mb-8 inline-block font-medium transition"
        >
          ← Back to Blog
        </Link>

        <div
          className="
            rounded-xl border border-[#0F1315]
            bg-[#34372E] p-10 shadow-[6px_6px_0_#0F1315]
          "
        >
          <div className="prose prose-invert max-w-none text-[#C5C6B3] leading-relaxed">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={renderers}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
}
