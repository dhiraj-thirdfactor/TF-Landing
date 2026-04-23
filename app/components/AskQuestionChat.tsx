"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUp, Bot, User, X } from "lucide-react";

type Message = {
  role: "user" | "ai";
  content: string;
};

export default function AskQuestionChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Shortcut to focus input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "i") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;

    // Open chat window if not open
    setIsOpen(true);
    
    // Add user message
    const userMsg = query.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setQuery("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: "I'm the ThirdFactor AI. I can help you navigate our documentation, explain API endpoints, or write integration code. (This is a simulated response.)",
        },
      ]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[600px] px-4 pointer-events-none flex flex-col justify-end items-center">
      
      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="w-full bg-[#0a0d12] border border-neutral-800 rounded-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] pointer-events-auto mb-4 overflow-hidden flex flex-col" style={{ height: "400px" }}>
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-[#111827]">
            <div className="flex items-center gap-2">
              <Bot size={18} className="text-[#007BE5]" />
              <span className="text-[14px] font-medium text-neutral-200">ThirdFactor AI</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            {messages.length === 0 && (
              <div className="flex-1 flex items-center justify-center text-neutral-500 text-[13px]">
                Ask anything about the ThirdFactor APIs...
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center ${msg.role === "user" ? "bg-neutral-800" : "bg-[#1e1b4b]"}`}>
                  {msg.role === "user" ? <User size={14} className="text-neutral-400" /> : <Bot size={14} className="text-indigo-400" />}
                </div>
                <div className={`px-4 py-2.5 rounded-[12px] max-w-[80%] text-[13.5px] leading-relaxed ${
                  msg.role === "user" 
                    ? "bg-neutral-800 text-neutral-200 rounded-tr-sm" 
                    : "bg-transparent border border-neutral-800 text-neutral-300 rounded-tl-sm"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center bg-[#1e1b4b]">
                  <Bot size={14} className="text-indigo-400" />
                </div>
                <div className="px-4 py-3 rounded-[12px] border border-neutral-800 rounded-tl-sm flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-600 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-600 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-600 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      {/* Floating Input Bar */}
      <form 
        onSubmit={handleSubmit}
        className="w-full bg-[#0a0d12] rounded-[16px] border border-neutral-800 p-1.5 flex items-center gap-2 focus-within:border-neutral-600 focus-within:ring-1 focus-within:ring-neutral-600 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.4)] pointer-events-auto"
      >
        <input 
          ref={inputRef}
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question..." 
          className="bg-transparent text-[14px] text-neutral-300 px-3 py-2 w-full outline-none placeholder:text-neutral-500 font-medium"
        />
        <div className="flex items-center gap-2 pr-1.5 shrink-0">
          {!query && <span className="text-[12px] text-neutral-500 font-medium mr-1">⌘I</span>}
          <button 
            type="submit"
            disabled={!query.trim() && !isOpen}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              query.trim() 
                ? "bg-[#007BE5] text-white hover:bg-[#0069C2]" 
                : "bg-[#1e1b4b] text-indigo-400 hover:bg-indigo-900"
            }`}
          >
            <ArrowUp size={16} strokeWidth={2.5} />
          </button>
        </div>
      </form>
    </div>
  );
}
