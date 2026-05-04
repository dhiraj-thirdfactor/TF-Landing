"use client";

import React from "react";

type Props = {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
};

export default function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
}: Props) {
  return (
    <div className="flex flex-col gap-[6px] w-full">
      {label && (
        <label className="text-[14px] text-[#111827] font-medium">
          {label}
        </label>
      )}

      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="w-full h-[44px] bg-[#F9FAFB] border border-[#E5E7EB] px-[14px] rounded-[6px] text-[14px] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
      />
    </div>
  );
}