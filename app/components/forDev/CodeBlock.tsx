"use client";
import React, { useState } from 'react';
import { Clipboard, Check } from 'lucide-react'; // Optional: for icons

const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative bg-[#0a0d12] rounded-xl border border-neutral-800 overflow-hidden shadow-lg transition-all">
      {/* Terminal Header */}
      <div className="px-4 py-3 border-b border-neutral-800 flex justify-between items-center bg-[#0d1117]">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
        </div>
        
        {/* Copy Button */}
        <button 
          onClick={handleCopy}
          className="text-neutral-500 hover:text-white transition-colors p-1"
          aria-label="Copy code"
        >
          {copied ? (
            <span className="flex items-center gap-1.5 text-[11px] text-green-400 font-medium">
              <Check size={14} /> Copied
            </span>
          ) : (
            <Clipboard size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </button>
      </div>

      {/* Code Area */}
      <pre className="p-5 overflow-x-auto text-[13px] text-neutral-300 font-mono leading-relaxed selection:bg-[#007BE5]/30">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;