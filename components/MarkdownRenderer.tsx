"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  const [mounted, setMounted] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  if (!mounted) {
    return (
      <div className={`markdown-content ${className}`}>
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-800/50 rounded-md w-3/4"></div>
          <div className="h-4 bg-gray-800/50 rounded-md w-full"></div>
          <div className="h-4 bg-gray-800/50 rounded-md w-5/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`markdown-content prose prose-invert max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // Headings with better typography
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-gray-50 mt-10 mb-6 tracking-tight">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold text-gray-50 mt-8 mb-4 tracking-tight">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold text-gray-100 mt-6 mb-3">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-medium text-gray-100 mt-6 mb-3">{children}</h4>
          ),

          // Paragraphs with better spacing
          p: ({ children, node }) => {
            const hasBlockContent = node?.children?.some((child: any) =>
              child.type === 'element' && ['img', 'figure', 'div'].includes(child.tagName)
            );

            if (hasBlockContent) {
              return <>{children}</>;
            }

            return (
              <p className="text-gray-300 leading-7 mb-5">{children}</p>
            );
          },

          // Text styling
          strong: ({ children }) => (
            <strong className="text-gray-50 font-semibold">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="text-gray-300 italic">{children}</em>
          ),

          // Links with better hover effects
          a: ({ href, children }) => {
            const isInternal = href?.startsWith("/") || href?.startsWith("#");

            if (isInternal) {
              return (
                <Link
                  href={href || "#"}
                  className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 hover:decoration-blue-300/50 underline-offset-2 transition-all duration-200"
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
                className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 hover:decoration-blue-300/50 underline-offset-2 transition-all duration-200"
              >
                {children}
              </a>
            );
          },

          // Lists with better responsiveness
          ul: ({ children }) => (
            <ul className="space-y-2 mb-5 pl-6 list-disc marker:text-gray-600">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="space-y-2 mb-5 pl-6 list-decimal marker:text-gray-600">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-300 leading-7 pl-1.5">{children}</li>
          ),

          // Blockquotes with better styling
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500/50 bg-gray-900/50 pl-4 pr-4 py-3 my-6 italic text-gray-400 rounded-r-md">
              {children}
            </blockquote>
          ),

          // Pre blocks (wrapper for code blocks)
          pre: ({ children, ...props }) => {
            // Extract the code element from children
            const codeElement = (children as any)?.props;
            const className = codeElement?.className || '';
            const codeChildren = codeElement?.children;

            // Check if this is a code block with language
            const match = /language-(\w+)/.exec(className);
            const language = match ? match[1] : 'text';
            const codeId = `code-${Math.random().toString(36).substr(2, 9)}`;
            const codeString = String(codeChildren).replace(/\n$/, "");

            return (
              <div className="relative group my-6 -mx-4 sm:mx-0">
                {/* Header with language and copy button */}
                <div className="flex items-center justify-between bg-[#1a1a1a] border border-gray-800/50 border-b-0 rounded-t-lg px-4 py-2">
                  <span className="text-xs font-medium text-gray-400">
                    {language}
                  </span>
                  <button
                    onClick={() => copyToClipboard(codeString, codeId)}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-200 transition-colors duration-200"
                    aria-label="Copy code"
                  >
                    {copiedCode === codeId ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Code block */}
                <div className="overflow-hidden rounded-b-lg border border-gray-800/50 border-t-0">
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={language}
                    PreTag="div"
                    showLineNumbers={codeString.split('\n').length > 5}
                    customStyle={{
                      margin: 0,
                      background: "#0d0d0d",
                      padding: "1.25rem",
                      fontSize: "0.875rem",
                      lineHeight: "1.6",
                      overflow: "auto",
                    }}
                    codeTagProps={{
                      style: {
                        fontSize: "0.875rem",
                        fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
                      }
                    }}
                    lineNumberStyle={{
                      minWidth: "1rem",
                      paddingRight: "1.2rem",
                      color: "#4a5568",
                      userSelect: "none",
                    }}
                  >
                    {codeString}
                  </SyntaxHighlighter>
                </div>
              </div>
            );
          },

          // Inline code
          code: ({ node, inline, className, children, ...props }: any) => {
            // If it has an inline prop or no className (no language), treat as inline
            if (inline !== false) {
              return (
                <code className="text-[0.85em] text-blue-300 bg-gray-900/70 px-1.5 py-0.5 rounded font-mono border border-gray-800/50">
                  {children}
                </code>
              );
            }

            // For code blocks, return children as-is (handled by pre)
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },

          // Images with better loading state
          img: ({ node, src, alt, ...props }: any) => {
            if (!src) return null;

            return (
              <figure className="my-8">
                <div className="relative aspect-auto w-full overflow-hidden rounded-lg bg-gray-900/50 ring-1 ring-gray-800/50">
                  <Image
                    src={src}
                    alt={alt || ""}
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    unoptimized={!src.startsWith('/')}
                  />
                </div>
                {alt && (
                  <figcaption className="text-sm text-gray-500 text-center mt-3">
                    {alt}
                  </figcaption>
                )}
              </figure>
            );
          },

          // Tables with better styling
          table: ({ children }) => (
            <div className="overflow-x-auto my-6 rounded-lg ring-1 ring-gray-800/50">
              <table className="min-w-full divide-y divide-gray-800">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gray-900/50">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-gray-800/50 bg-gray-950/30">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-gray-900/30 transition-colors duration-150">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">{children}</td>
          ),

          // Horizontal rules
          hr: () => (
            <hr className="my-8 border-gray-800/50" />
          ),

          // Task lists with better styling
          input: ({ type, checked, disabled, ...props }: any) => {
            if (type === "checkbox") {
              return (
                <input
                  type="checkbox"
                  checked={checked || false}
                  disabled={disabled}
                  className="mr-2 rounded-sm border-gray-700 bg-gray-900 text-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 focus:ring-offset-gray-950"
                  readOnly
                  onChange={() => { }}
                />
              );
            }
            return null;
          },
        }}
      >
        {content}
      </ReactMarkdown>

      <style jsx global>{`
        /* Custom scrollbar for code blocks */
        .markdown-content pre::-webkit-scrollbar,
        .markdown-content code::-webkit-scrollbar {
          height: 8px;
          width: 8px;
        }
        
        .markdown-content pre::-webkit-scrollbar-track,
        .markdown-content code::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 4px;
        }
        
        .markdown-content pre::-webkit-scrollbar-thumb,
        .markdown-content code::-webkit-scrollbar-thumb {
          background: #4a5568;
          border-radius: 4px;
        }
        
        .markdown-content pre::-webkit-scrollbar-thumb:hover,
        .markdown-content code::-webkit-scrollbar-thumb:hover {
          background: #606f7b;
        }

        /* Ensure code blocks have proper overflow */
        .markdown-content pre > div {
          overflow-x: auto !important;
        }

        /* Better focus styles */
        .markdown-content a:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
          border-radius: 2px;
        }

        /* Responsive typography */
        @media (max-width: 640px) {
          .markdown-content h1 { font-size: 2.25rem; }
          .markdown-content h2 { font-size: 1.875rem; }
          .markdown-content h3 { font-size: 1.5rem; }
          .markdown-content h4 { font-size: 1.25rem; }
          
          /* Better mobile code blocks */
          .markdown-content pre {
            border-radius: 0;
          }
        }
      `}</style>
    </div>
  );
}