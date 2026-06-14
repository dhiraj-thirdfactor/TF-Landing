"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    company: "Vianet",
    logo: "/illustrations/vianetlogo.png",
    quote:
      "ThirdFactor has become the backbone of our digital onboarding. It helps our risk and compliance teams identify forged documents while giving customers a verification experience built for Nepal.",
    name: "Khemraj Bhujel",
    role: "CEO, Vianet",
    video: "/illustrations/video.mp4",
    poster: "/illustrations/human.png",
    href: "/blogs",
    outcomes: [
      { value: "70%", label: "Fewer manual review escalations" },
      { value: "3x", label: "Faster document verification cycles" },
      { value: "99%+", label: "Local document accuracy target" },
    ],
  },
  {
    company: "NMB Bank",
    logo: "/illustrations/nmb.png",
    quote:
      "Local document intelligence gives our teams a clearer path from identity capture to a confident onboarding decision.",
    name: "Digital Banking Team",
    role: "NMB Bank",
    video: "/techIntegration-video/Comp 2.mp4",
    poster: "/illustrations/mofin.png",
    href: "/blogs",
    outcomes: [
      { value: "24/7", label: "Automated verification availability" },
      { value: "1", label: "Governed identity workflow" },
      { value: "Local", label: "Document and deployment context" },
    ],
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStartX = useRef<number | null>(null);
  const active = testimonials[activeIndex];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = muted;
    video.play().catch(() => undefined);
  }, [activeIndex, muted]);

  function showTestimonial(index: number) {
    setActiveIndex((index + testimonials.length) % testimonials.length);
    setMuted(true);
  }

  function handleTouchEnd(event: React.TouchEvent) {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 50) return;
    showTestimonial(activeIndex + (distance < 0 ? 1 : -1));
  }

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[140px]">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
          <div className="max-w-[720px]">
            <p className="mb-4 w-fit border border-[#D9E8F7] bg-[#F7FBFF] px-2 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[#64748B]">
              Customer evidence
            </p>
            <h2 className="font-sans text-[32px] font-normal leading-[1.12] text-[#00274A] md:text-[40px] lg:text-[44px]">
              Infrastructure trusted in high-volume, regulated environments.
            </h2>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <CarouselButton label="Previous testimonial" onClick={() => showTestimonial(activeIndex - 1)}>
              <ArrowLeft size={18} />
            </CarouselButton>
            <CarouselButton label="Next testimonial" onClick={() => showTestimonial(activeIndex + 1)}>
              <ArrowRight size={18} />
            </CarouselButton>
          </div>
        </div>

        <div
          className="grid h-[860px] touch-pan-y grid-rows-[500px_360px] overflow-hidden border border-[#D9E8F7] bg-[#07101E] lg:h-[620px] lg:grid-cols-[0.95fr_1.05fr] lg:grid-rows-1"
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
          }}
          onTouchEnd={handleTouchEnd}
        >
          <article className="flex h-[500px] min-h-0 flex-col justify-between overflow-hidden p-7 text-white md:p-10 lg:h-[620px] lg:p-12">
            <div className="flex items-center justify-between gap-6">
              <Image
                key={active.logo}
                src={active.logo}
                alt={active.company}
                width={132}
                height={40}
                className="h-9 w-auto object-contain object-left brightness-0 invert"
              />
              <span className="font-mono text-[11px] text-white/50">
                {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-8 max-w-[760px] lg:mt-12">
              <blockquote className="m-0 line-clamp-5 font-sans text-[22px] font-normal leading-[1.35] text-white md:text-[26px] lg:text-[30px]">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
              <div className="mt-8 flex flex-col gap-1 border-l-2 border-[#54AFFF] pl-4">
                <p className="m-0 text-[15px] font-semibold text-white">{active.name}</p>
                <p className="m-0 text-[14px] text-white/60">{active.role}</p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-3 border-t border-white/15 pt-6">
              {active.outcomes.map((outcome) => (
                <div key={outcome.label} className="pr-4">
                  <span className="block text-[24px] font-normal leading-none text-white">{outcome.value}</span>
                  <span className="mt-2 block text-[11px] leading-[1.4] text-white/55">{outcome.label}</span>
                </div>
              ))}
            </div>
          </article>

          <div className="relative h-[360px] min-h-0 bg-black lg:h-[620px]">
            <video
              key={active.video}
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              playsInline
              autoPlay
              muted={muted}
              loop
              preload="metadata"
              poster={active.poster}
            >
              <source src={active.video} type="video/mp4" />
            </video>

            <button
              type="button"
              onClick={() => setMuted((current) => !current)}
              className="absolute right-5 top-5 z-10 flex size-11 items-center justify-center bg-white text-[#00274A] transition-colors hover:bg-[#EAF4FD]"
              aria-label={muted ? "Unmute testimonial video" : "Mute testimonial video"}
            >
              {muted ? <VolumeX size={19} /> : <Volume2 size={19} />}
            </button>

            <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between gap-4">
              <Link href={active.href} className="group flex items-center gap-2 bg-white px-5 py-3 text-[13px] font-medium text-[#00274A]">
                Read the customer story
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="flex items-center gap-2 sm:hidden">
                <CarouselButton label="Previous testimonial" onClick={() => showTestimonial(activeIndex - 1)} dark>
                  <ArrowLeft size={18} />
                </CarouselButton>
                <CarouselButton label="Next testimonial" onClick={() => showTestimonial(activeIndex + 1)} dark>
                  <ArrowRight size={18} />
                </CarouselButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CarouselButton({
  children,
  label,
  onClick,
  dark = false,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  dark?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`flex size-11 items-center justify-center border transition-colors ${
        dark
          ? "border-white/25 bg-[#07101E] text-white hover:bg-[#12233A]"
          : "border-[#C7DDF2] bg-white text-[#00274A] hover:border-[#007BE5] hover:text-[#007BE5]"
      }`}
    >
      {children}
    </button>
  );
}
