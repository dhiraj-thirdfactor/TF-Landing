"use client";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

export default function DocSearch() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  // Simple Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("doc-search-input")?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div 
      className={`flex items-center justify-between w-full px-3 py-2 text-[13px] bg-white border rounded-lg transition-all shadow-sm ${
        focused ? "border-[#007BE5] ring-2 ring-[#007BE5]/20" : "border-neutral-200 hover:border-neutral-300"
      }`}
    >
      <div className="flex items-center gap-2 flex-1">
        <Search size={14} className={focused ? "text-[#007BE5]" : "text-neutral-400"} />
        <input
          id="doc-search-input"
          type="text"
          placeholder="Search docs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent outline-none text-neutral-800 placeholder:text-neutral-400 font-sans"
        />
      </div>
      {!focused && !query && (
        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border border-neutral-200 bg-neutral-50 text-neutral-500 shrink-0">
          ⌘K
        </span>
      )}
    </div>
  );
}
