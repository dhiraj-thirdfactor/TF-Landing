import Image from "next/image";

const organizations = [
  {
    name: "Government of Nepal",
    image: "/illustrations/gon.png",
    imageClassName: "max-h-14 md:max-h-16",
  },
  {
    name: "Cell Pay",
    image: "/illustrations/cellpay.png",
    imageClassName: "max-h-10 md:max-h-12",
  },
  {
    name: "Nepal Bank Limited",
    image: "/illustrations/nepalbank.png",
    imageClassName: "max-h-10 md:max-h-12",
  },
  {
    name: "NMB Bank",
    image: "/illustrations/nmb.png",
    imageClassName: "max-h-10 md:max-h-12",
  },
    {
    name: "Nest Nepal",
    image: "/illustrations/nest.webp",
    imageClassName: "max-h-14 md:max-h-16",
  },
      {
    name: "cr8rs",
    image: "/illustrations/cr8rs.svg",
    imageClassName: "max-h-14 md:max-h-16",
  },
];

export default function TrustLogos() {
  const repeatedOrganizations = [...organizations, ...organizations];

  return (
    <section
      className="border-y border-[#E7EDF3] bg-white"
      aria-labelledby="trusted-by-heading"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-5 px-4 py-7 md:px-8 md:py-8 lg:px-[120px] xl:px-[140px]">
        <p
          id="trusted-by-heading"
          className="m-0 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]"
        >
          Trusted by
        </p>

        <div className="w-full overflow-hidden" aria-label="Organizations using ThirdFactor">
          <div className="trust-marquee flex w-max items-center hover:[animation-play-state:paused]">
            {repeatedOrganizations.map((organization, index) => (
              <div
                key={`${organization.name}-${index}`}
                className="group flex h-16 w-44 shrink-0 items-center justify-center px-4 text-[#334155] opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:w-52"
                title={organization.name}
                aria-hidden={index >= organizations.length}
              >
                <Image
                  src={organization.image}
                  alt={index >= organizations.length ? "" : organization.name}
                  width={180}
                  height={72}
                  className={`w-auto max-w-full object-contain ${organization.imageClassName}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
