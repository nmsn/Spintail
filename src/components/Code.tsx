'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function Code({
  code,
  language = 'tsx',
  filename,
  showLineNumbers = true,
  className = ''
}: CodeProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className={`relative bg-gray-900 rounded-lg border border-gray-700 overflow-hidden ${className}`}>
      {/* Header with filename and copy button */}
      {(filename || true) && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <span className="text-sm text-gray-300 font-mono">
            {filename || `code.${language}`}
          </span>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-2 py-1 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
            title="Copy code"
          >
            {copied ? (
              <>
                <Check size={14} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={14} />
                Copy
              </>
            )}
          </button>
        </div>
      )}

      {/* Code content */}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="text-gray-100 font-mono whitespace-pre">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}

// Export default for backward compatibility
export default Code;
