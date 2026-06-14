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
    <div className="group relative overflow-hidden border border-[#1D2B38] bg-[#0B1219]">
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-[#1D2B38] bg-[#101A24] px-4 py-2.5">
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#718391]">Example</span>
        
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
      <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-[1.7] text-[#D5E2EC] selection:bg-[#007BE5]/30 md:text-[13px]">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
