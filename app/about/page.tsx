import React from "react";
import Image from "next/image";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";

const team = [
  {
    name: "Sudip Dawadi",
    role: "Chief Executive Officer",
    desc: "A visionary leader with a decade of experience in identity and security.",
    img: "https://i.pravatar.cc/300?img=11"
  },
  {
    name: "Suman Bhattarai",
    role: "Chief Technology Officer",
    desc: "Engineering leader focused on scalable distributed systems and AI.",
    img: "https://i.pravatar.cc/300?img=12"
  },
  {
    name: "Aarav Sharma",
    role: "Head of Product",
    desc: "Product strategist dedicated to building frictionless user experiences.",
    img: "https://i.pravatar.cc/300?img=60"
  },
  {
    name: "Priya Thapa",
    role: "Head of Growth",
    desc: "Growth hacker scaling operations across emerging markets.",
    img: "https://i.pravatar.cc/300?img=5"
  },
];

const storyMilestones = [
  {
    year: "Early 2022",
    title: "The vision of modern identity",
    desc: "We started with a simple belief: proving who you are online shouldn't be harder than proving it in person. The existing systems were slow, biased, and full of friction.",
  },
  {
    year: "Late 2022",
    title: "Building the foundation",
    desc: "We built our first proprietary OCR and face-matching engines, focusing specifically on underrepresented demographics and diverse document types in emerging markets.",
  },
  {
    year: "Mid 2023",
    title: "Scaling across borders",
    desc: "Processed our first million verifications. We expanded our infrastructure to support multi-region compliance and sub-second latency for enterprise clients.",
  },
  {
    year: "Early 2024",
    title: "Earning enterprise trust",
    desc: "Adopted by leading fintechs and neo-banks as their core compliance engine. We proved that security and user experience don't have to be a trade-off.",
  },
  {
    year: "Looking Ahead",
    title: "The universal trust layer",
    desc: "We are building the definitive trust layer for the digital economy. Replacing friction with confidence, everywhere humans interact with digital systems.",
  },
];

// A helper component to generate the blocky blue patterns seen in the mockup
const AbstractBlockPattern = ({ variant }: { variant: number }) => {
  const blocks = Array.from({ length: 48 });
  return (
    <div className="w-full aspect-video grid grid-cols-8 grid-rows-6 gap-1 opacity-80">
      {blocks.map((_, i) => {
        const isBlue = (i * variant) % 7 === 0 || (i + variant) % 5 === 0 || (i % 11 === variant);
        const isLightBlue = (i * variant) % 3 === 0;
        return (
          <div
            key={i}
            className={`w-full h-full rounded-[2px] transition-all duration-500 hover:scale-95 ${
              isBlue ? 'bg-[#007BE5]' : isLightBlue ? 'bg-[#F0F7FF]' : 'bg-transparent'
            }`}
          />
        );
      })}
    </div>
  );
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <TopBar />
      <Navbar />

      <main>
        {/* Abstract Hero Graphic */}
        <section className="w-full max-w-[1200px] mx-auto pt-24 px-6 overflow-hidden">
          <div className="w-full h-[300px] md:h-[400px] relative grid grid-cols-12 grid-rows-6 gap-2 opacity-90">
            {/* Generate random-looking blocks for the top graphic */}
            {Array.from({ length: 72 }).map((_, i) => {
              const isSolid = i % 8 === 0;
              const isLight = i % 5 === 0;
              const isImage = i === 15 || i === 34 || i === 45;
              
              if (isImage) {
                return (
                  <div key={i} className="col-span-2 row-span-2 bg-[#E5E5E5] overflow-hidden rounded-sm">
                    <img src={`https://i.pravatar.cc/150?img=${i}`} alt="" className="w-full h-full object-cover grayscale mix-blend-multiply" />
                  </div>
                );
              }
              
              if (isSolid) {
                return <div key={i} className="col-span-2 row-span-2 bg-[#007BE5] rounded-sm mix-blend-multiply opacity-80" />;
              }
              if (isLight) {
                return <div key={i} className="col-span-1 row-span-1 bg-[#F0F7FF] rounded-sm" />;
              }
              return <div key={i} className="col-span-1 row-span-1" />; // empty space
            })}
          </div>
        </section>

        {/* Hero Text */}
        <section className="px-6 py-16">
          <div className="max-w-[1200px] mx-auto">
            <h1 
              className="text-[40px] md:text-[56px] text-[#00274A] tracking-[-0.02em] leading-[1.1] mb-12 max-w-[800px]"
              style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 400 }}
            >
              Experience Instant,<br />
              Trusted Identity Verification
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-24">
              <p className="text-[20px] md:text-[24px] text-[#00274A] leading-[1.4]" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 400 }}>
                The Trust Layer for the digital world.<br />
                Authentic, Accurate and friction-free.
              </p>
              <p className="text-[16px] text-[#525252] leading-[1.6]" style={{ fontFamily: "var(--font-geist-sans, system-ui)" }}>
                We are building an identity verification and KYC platform that replaces friction with confidence and helps organizations empower users, not gatekeep them.
              </p>
            </div>
          </div>
        </section>

        {/* Humans at the Center Banner */}
        <section className="bg-[#F0F7FF] py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#007BE5 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          <div className="max-w-[800px] mx-auto text-center relative z-10">
            {/* Center abstract node graphic */}
            <div className="w-[120px] h-[80px] mx-auto mb-8 relative flex items-center justify-center">
              <div className="absolute w-full h-full bg-[#007BE5]/10 rounded-full blur-xl"></div>
              <div className="grid grid-cols-4 gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#007BE5]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#007BE5]/40"></div>
                 <div className="w-3 h-3 rounded-full bg-[#007BE5]/70"></div>
                 <div className="w-3 h-3 rounded-full bg-[#007BE5]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#007BE5]/50"></div>
                 <div className="w-3 h-3 rounded-full bg-[#007BE5]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#007BE5]/30"></div>
                 <div className="w-3 h-3 rounded-full bg-[#007BE5]"></div>
              </div>
            </div>
            
            <h2 className="text-[28px] md:text-[36px] text-[#00274A] tracking-[-0.02em] mb-6" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 400 }}>
              Humans at the Center of<br />Every Digital Interaction
            </h2>
            <p className="text-[16px] text-[#525252] leading-relaxed max-w-[600px] mx-auto" style={{ fontFamily: "var(--font-geist-sans, system-ui)" }}>
              We believe that the future of identity is seamless, secure, and user-centric. Our mission is to build the trust layer for the digital world, empowering both organizations and individuals.
            </p>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-[32px] text-[#00274A] tracking-[-0.02em] mb-12" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 400 }}>
              Leadership Team
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="flex flex-col group">
                  <div className="w-full aspect-square bg-[#F5F5F5] mb-6 overflow-hidden relative">
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h3 className="text-[18px] text-[#00274A] mb-1" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 500 }}>{member.name}</h3>
                  <p className="text-[14px] text-[#007BE5] mb-3">{member.role}</p>
                  <p className="text-[14px] text-[#525252] leading-relaxed">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="text-[32px] text-[#00274A] tracking-[-0.02em] text-center mb-24" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 400 }}>
              Our Story
            </h2>
            
            <div className="relative">
              {/* Central Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#E5E5E5] -translate-x-1/2"></div>
              
              <div className="flex flex-col gap-24">
                {storyMilestones.map((milestone, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div key={milestone.title} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                      
                      {/* Text Content */}
                      <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                        <span className="text-[12px] font-semibold tracking-wider text-[#A3A3A3] uppercase mb-2 block">
                          {milestone.year}
                        </span>
                        <h3 className="text-[24px] text-[#00274A] tracking-tight mb-4" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 400 }}>
                          {milestone.title}
                        </h3>
                        <p className="text-[16px] text-[#525252] leading-relaxed">
                          {milestone.desc}
                        </p>
                      </div>
                      
                      {/* Timeline Dot (Desktop only) */}
                      <div className="hidden md:block absolute left-1/2 w-3 h-3 bg-white border-2 border-[#007BE5] rounded-full -translate-x-1/2"></div>
                      
                      {/* Graphic/Image Content */}
                      <div className="flex-1 w-full">
                        <AbstractBlockPattern variant={idx + 1} />
                      </div>
                      
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Deep Blue Banner */}
        <section className="bg-[#2563EB] text-white py-24 px-6 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-2 mix-blend-overlay">
              {Array.from({ length: 72 }).map((_, i) => (
                <div key={i} className={`bg-white rounded-sm ${(i % 7 === 0 || i % 11 === 0) ? 'opacity-100' : 'opacity-0'}`}></div>
              ))}
            </div>
          </div>

          <div className="max-w-[1200px] mx-auto relative z-10 grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h3 className="text-[14px] font-semibold tracking-widest uppercase text-blue-200 mb-6">Our Mission</h3>
              <p className="text-[24px] md:text-[32px] leading-[1.4] tracking-[-0.01em]" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 400 }}>
                Prevent fraud and ensure data sovereignty. Bridge the gap between proving you exist and being allowed to act. Help people prove identity and operate with trust across digital systems. Keep humans at the center of every digital interaction.
              </p>
            </div>
            
            <div className="flex flex-col justify-end">
              <h3 className="text-[14px] font-semibold tracking-widest uppercase text-blue-200 mb-6 md:text-right">Our Vision</h3>
              <p className="text-[20px] md:text-[24px] leading-[1.5] text-blue-50 md:text-right" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 400 }}>
                Become the trust layer for emerging markets. Deliver instant, predictable identity verification. Make proving "I am" effortless. Replace friction with confidence and help organizations empower users, not gatekeep them.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <div className="bg-[#F0F7FF] py-12">
          <Testimonial />
        </div>

        {/* CTA */}
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
}
