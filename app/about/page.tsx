import React from "react";
import Image from "next/image";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";

const team = [
  {
    name: "Manish Sharma",
    role: "Founder, CEO",
    desc: "A visionary leader with a decade of experience in identity and security.",
    img: "/illustrations/manish.png"
  },
  {
    name: "Sojan Prajapati",
    role: "Chief Business Officer",
    desc: "Driving strategic partnerships and business growth across emerging markets.",
    img: "/illustrations/sojan.png"
  },
  {
    name: "Sudip Dawadi",
    role: "Chief Product Officer",
    desc: "Product strategist dedicated to building frictionless user experiences.",
    img: "/illustrations/sudip.png"
  },
  {
    name: "Niranjan Udas",
    role: "COO",
    desc: "Operations expert focused on scaling infrastructure and compliance pipelines.",
    img: "/illustrations/niranjan.png"
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
        {/* Hero Graphic */}
        <section className="w-full max-w-[1200px] mx-auto pt-24 px-6 overflow-hidden">
          <div className="w-full h-[300px] md:h-[450px] relative rounded-2xl overflow-hidden flex items-center justify-center">
            <Image 
              src="/illustrations/about.png" 
              alt="About Third Factor" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </section>

        {/* Hero Text */}
        <section className=" py-16 ">
          <div className="max-w-[1400px] md:px-6 px-4 lg:px-[140px] mx-auto">
            <h1 
              className="text-[40px] md:text-[56px] text-[#000000] tracking-[-0.02em] leading-[1.1] mb-10 max-w-[800px]"
              style={{  fontWeight: 400 }}
            >
              Experience Instant,<br />
              Trusted <span className="font-pixel tracking-normal font-normal">Identity Verification</span>
            </h1>
            
            <div className=" flex justify-between w-full flex-wrap md:gap-0 gap-4">
              <p className="text-[20px] md:text-[24px] md:max-w-[426px]  text-[#000000] leading-[130%]" style={{  fontWeight: 400 }}>
                Third Factor exists to make identity verification effortless, secure, and human at scale.
              </p>
              <p className="text-[16px] text-[#525252] leading-[1.6] max-w-[535px]" style={{ }}>
               As digital interactions grow, proving identity often becomes slow and frustrating. We built Third Factor to remove friction, so organizations can onboard users, prevent fraud, and ensure compliance instantly, without compromising privacy.
              </p>
            </div>
          </div>
        </section>

        {/* Humans at the Center Banner */}
        <section className="bg-[#F0F7FF] py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#007BE5 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          <div className="max-w-[800px] mx-auto text-center relative z-10">
            {/* Center human icon graphic */}
            <div className="w-[120px] h-[120px] mx-auto mb-8 relative flex items-center justify-center">
              <div className="absolute w-full h-full bg-[#007BE5]/10 rounded-full blur-2xl pointer-events-none"></div>
              <Image 
                src="/illustrations/human.png" 
                alt="Humans at the center" 
                fill 
                className="object-contain"
              />
            </div>
            
            <h2 className="text-[28px] md:text-[40px] leading-[100%]  tracking-[-2px]  text-[#0D0D0D]  mb-6" >
              Humans at the Center of 
              <br />
              <span className={` font-pixel`}>
              Every Digital Interaction
              </span>
            </h2>
            <p className="text-[16px] text-[#525252] leading-relaxed max-w-[600px] mx-auto">
              Our AI-powered platform combines facial recognition, dual liveness detection, and intelligent document processing. We verify users quickly and accurately, reducing multi-day processes to seconds.
            </p>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="md:pt-[70px] pt-[40px] px-6">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-[32px] text-[#000000] tracking-[-0.02em] mb-12" style={{  fontWeight: 400 }}>
              Leadership Team
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="flex flex-col group cursor-pointer">
                  <div className="w-full aspect-[4/5] bg-[#F5F5F5] mb-6 overflow-hidden relative">
                    <Image 
                      src={member.img} 
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-[20px] text-[#000000] mb-1 tracking-tight" style={{  fontWeight: 500 }}>{member.name}</h3>
                  <p className="text-[16px] leading-[130%] text-[#000000] mb-3 ">{member.role}</p>
                  <p className="text-[14px] leading-[130%] text-[#000000] ">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="text-[32px] md:text-[40px] text-[#000000] tracking-[-0.02em] text-center mb-24" style={{  fontWeight: 400 }}>
              Our Story
            </h2>
            
            <div className="relative">
              {/* Central Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#E5E5E5] -translate-x-1/2"></div>
              
              <div className="flex flex-col gap-24">
                {storyMilestones.map((milestone, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div key={milestone.title} className={`flex flex-col  md:flex-row items-center gap-12 md:gap-24 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                      
                      {/* Text Content */}
                      <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-left'}`}>
                        <span className="text-[20px] font-pixel  text-[#000000]  mb-2 block">
                          {milestone.year}
                        </span>
                        <h3 className="text-[24px] text-[#000000] " style={{  fontWeight: 400 }}>
                          {milestone.title}
                        </h3>
                        <p className="text-[16px] text-[#000000]">
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
        <section className="bg-[#2563EB] text-white py-24 px-6 relative overflow-hidden flex flex-col items-center justify-between lg:gap-[120px] md:gap-[60px] gap-[30px] ">
         <div className="flex max-w-[1160px] flex-col gap-[20px] md:gap-[36px] ">
          <h3 className="  text-[24px] md:text-[32px] leading-[130%]">Our Mission</h3>
          <p className=" text-[18px] md:text-[40px] leading-[130%]">Prevent fraud and ensure data sovereignty. Bridge the gap between proving you exist and being allowed to act. Help people prove identity and operate with trust across digital systems. Keep humans at the center of every digital interaction.</p>
         </div>
         <div className="flex items-end  text-end max-w-[1160px] flex-col gap-[20px] md:gap-[36px]">
          <h3 className=" text-[24px] md:text-[32px] leading-[130%]">Our Mission</h3>
          <p className=" text-[18px] md:text-[40px] leading-[130%]">Become the core trust layer for emerging markets. Deliver instant and reliable identity verification. Make proving "I am" effortless. Replace friction with confidence and help organizations empower users, not gatekeep them.</p>
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
