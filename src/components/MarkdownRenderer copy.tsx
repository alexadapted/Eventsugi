import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Ensure client-side hydration happens correctly
  }, []);

  if (!hydrated) {
    return null; // Prevent mismatches during hydration
  }

  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default MarkdownRenderer;
