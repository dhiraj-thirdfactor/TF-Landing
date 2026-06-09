"use client";

import Image from "next/image";
import LayoutWrapper from "./common/wrapper/LayoutWrapper";

export default function CircularAnimation() {
  const totalLogos = 5;

  return (
    <LayoutWrapper>
      <section className="relative hidden lg:flex h-screen lg:min-h-[1092px] w-full items-center justify-center overflow-hidden bg-white px-4 py-[120px]">
        {/* Center Circle */}
        <div className="pointer-events-none absolute z-0 flex items-center justify-center">
          <div className="relative h-[260px] w-[260px] sm:h-[360px] sm:w-[360px] md:h-[450px] md:w-[450px] lg:h-[800px] lg:w-[800px]">
            <Image
              src="/circlecenter.svg"
              fill
              alt="Center background"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 flex max-w-[90%] flex-col items-center text-center">
          <button className=" border border-[#BFDBFE] px-4 py-2 text-xs  text-black sm:text-sm">
            Industries
          </button>

          <p className="mt-4 tracking-[-1px] text-[24px] leading-[32px] text-black sm:text-[32px] sm:leading-[40px] md:text-[42px] md:leading-[52px] lg:text-[32px] lg:leading-[40px]">
            Automation, speed,
            <br />
            and compliance at every step
          </p>
        </div>

       
        <div className="absolute inset-0 z-10">
          {[...Array(totalLogos)].map((_, index) => {
            const angle = index * (360 / totalLogos);

            return (
              <div
                key={index}
                className="orbit-wrapper absolute left-1/2 top-1/2"
                style={
                  {
                    "--angle": `${angle}deg`,
                  } as React.CSSProperties
                }
              >
                <div className="orbit-item relative h-[60px] w-[60px] sm:h-[75px] sm:w-[75px] md:h-[90px] md:w-[90px] lg:h-[110px] lg:w-[110px]">
                  <Image
                    src="/circallogo.svg"
                    fill
                    alt={`Logo ${index + 1}`}
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <style jsx global>{`
        :root {
          --orbit-radius: 140px;
        }

        @media (min-width: 640px) {
          :root {
            --orbit-radius: 190px;
          }
        }

        @media (min-width: 768px) {
          :root {
            --orbit-radius: 240px;
          }
        }

        @media (min-width: 1024px) {
          :root {
            --orbit-radius: 400px;
          }
        }

        .orbit-wrapper {
          transform: translate(-50%, -50%);
        }

        .orbit-item {
          animation: orbit 25s linear infinite;
        }

        @keyframes orbit {
          from {
            transform: rotate(var(--angle))
              translateY(calc(-1 * var(--orbit-radius)))
              rotate(calc(-1 * var(--angle)));
          }

          to {
            transform: rotate(calc(var(--angle) + 360deg))
              translateY(calc(-1 * var(--orbit-radius)))
              rotate(calc(-1 * (var(--angle) + 360deg)));
          }
        }
      `}</style>
    </LayoutWrapper>
  );
}
