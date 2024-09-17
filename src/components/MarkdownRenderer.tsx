import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'; // Import rehypeRaw

const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Ensure client-side hydration happens correctly
  }, []);

  if (!hydrated) {
    return null; // Prevent mismatches during hydration
  }

  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-3xl font-bold mb-4" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl font-semibold mb-3" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="text-base leading-relaxed mb-4" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc list-inside mb-4 ml-4" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal list-inside mb-4 ml-4" {...props} />
        ),
        a: ({ node, ...props }) => (
          <a className="text-[#ba96fd]" {...props} />
        ),
      }}
      rehypePlugins={[rehypeRaw]} // Enable HTML rendering
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
