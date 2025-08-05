"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`markdown-content ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-800 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-800 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-800 rounded w-5/6 mb-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // Headings
          h1: ({ children }) => (
            <h1 className="text-3xl font-medium text-gray-100 mt-8 mb-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-medium text-gray-100 mt-8 mb-4">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-medium text-gray-100 mt-6 mb-3">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-lg font-medium text-gray-100 mt-6 mb-3">{children}</h4>
          ),

          // Paragraphs - Handle block content
          p: ({ children, node }) => {
            // Check if paragraph contains only images or other block elements
            const hasBlockContent = node?.children?.some((child: any) => 
              child.type === 'element' && ['img', 'figure', 'div'].includes(child.tagName)
            );

            if (hasBlockContent) {
              return <>{children}</>;
            }

            return (
              <p className="text-gray-300 leading-relaxed mb-4">{children}</p>
            );
          },

          // Text elements
          strong: ({ children }) => (
            <strong className="text-gray-100 font-medium">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="text-gray-300 italic">{children}</em>
          ),

          // Links
          a: ({ href, children }) => {
            const isInternal = href?.startsWith("/") || href?.startsWith("#");
            
            if (isInternal) {
              return (
                <Link
                  href={href || "#"}
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
                >
                  {children}
                </Link>
              );
            }
            
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
              >
                {children}
              </a>
            );
          },

          // Lists
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-300">
              <span className="ml-2">{children}</span>
            </li>
          ),

          // Blockquotes
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-700 pl-4 my-4 italic text-gray-400">
              {children}
            </blockquote>
          ),

          // Code blocks
          code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "";

            if (!inline && match) {
              return (
                <div className="relative group my-6">
                  <div className="absolute top-0 right-0 px-2 py-1 text-xs text-gray-500 bg-gray-900 rounded-bl z-10">
                    {language}
                  </div>
                  <SyntaxHighlighter
                    style={oneDark}
                    language={language}
                    PreTag="div"
                    customStyle={{
                      margin: 0,
                      borderRadius: "0.5rem",
                      background: "#111111",
                      border: "1px solid rgb(31 41 55)",
                      fontSize: "0.875rem",
                      padding: "1rem",
                    }}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                </div>
              );
            }

            return (
              <code className="text-sm text-gray-300 bg-gray-900 px-1.5 py-0.5 rounded font-mono">
                {children}
              </code>
            );
          },

          // Images - Render as div to avoid nesting issues
          img: ({ node, src, alt, ...props }: any) => {
            if (!src) return null;
            
            const imageSrc = src.startsWith('http') ? src : src;
            
            return (
              <div className="my-8">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-900">
                  <Image
                    src={imageSrc}
                    alt={alt || ""}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    unoptimized={!imageSrc.startsWith('/')}
                  />
                </div>
                {alt && (
                  <p className="text-sm text-gray-500 text-center mt-2">
                    {alt}
                  </p>
                )}
              </div>
            );
          },

          // Tables
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-800">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gray-900">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-gray-800">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-gray-900/50 transition-colors">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-100">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-sm text-gray-300">{children}</td>
          ),

          // Horizontal rules
          hr: () => (
            <hr className="my-8 border-gray-800" />
          ),

          // Pre for code blocks
          pre: ({ children }) => (
            <>{children}</>
          ),

          // Task lists
          input: ({ type, checked, disabled, ...props }: any) => {
            if (type === "checkbox") {
              return (
                <input
                  type="checkbox"
                  checked={checked || false}
                  disabled={disabled}
                  className="mr-2 rounded border-gray-700 bg-gray-900 text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
                  readOnly
                  onChange={() => {}}
                />
              );
            }
            return null;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}