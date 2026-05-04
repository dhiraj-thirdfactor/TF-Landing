"use client";

import { useState } from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LayoutWrapper from "../components/common/wrapper/LayoutWrapper";
import InputField from "../components/InputField";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <LayoutWrapper>
        <div className="flex flex-col gap-[28px] mb-10  mt-[60px] ">
          <h1 className="text-d1-desktop leading-[90%] ">
            We’re <br />
            <span className=" font-pixel">Ready to Assist</span>
          </h1>
          <p className="text-body-m max-w-[343px] text-gray-600">
            Reach out to our team for support, demos, partnerships, or media inquiries.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="w-full border border-[#CBD5E1] p-[32px] rounded-[8px] bg-white flex flex-col gap-6 shadow-sm"
        >
          {/* Grid for Name, Email, Company, Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <InputField 
              label="Full Name" 
              name="name" 
              placeholder="Enter your name..."
              value={formData.name} 
              onChange={handleChange} 
            />
            <InputField 
              label="Email Address" 
              name="email" 
              type="email"
              placeholder="Enter your e-mail address..."
              value={formData.email} 
              onChange={handleChange} 
            />
            <InputField 
              label="Company Name" 
              name="company" 
              placeholder="Enter your company name..."
              value={formData.company} 
              onChange={handleChange} 
            />
            <InputField 
              label="Phone Number" 
              name="phone" 
              placeholder="Enter your phone number..."
              value={formData.phone} 
              onChange={handleChange} 
            />
          </div>

          {/* Message / Inquiry Type */}
          <div className="flex flex-col gap-1">
            <label className="text-[14px] font-medium">Inquiry Type</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here."
              className="w-full min-h-[150px] border border-[#E5E5E5] px-[12px] py-[8px] rounded-[8px] text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-medium py-[12px] rounded-[8px] transition-colors"
          >
            Send Message
          </button>
        </form>
      </LayoutWrapper>
      <Footer />
    </>
  );
}