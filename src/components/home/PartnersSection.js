import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const partners = [
  "/assets/home/partners/partner-01.svg",
  "/assets/home/partners/partner-02.svg",
  "/assets/home/partners/partner-03.svg",
  "/assets/home/partners/partner-04.svg",
  "/assets/home/partners/partner-05.svg",
];

export default function PartnersSection() {
  return (
    <section className="bg-[#F6F6F6] py-10 lg:h-[202px] lg:py-0">
      <Reveal
        as="div"
        duration={600}
        amount={0.2}
        className="
          mx-auto
          grid
          w-full
          max-w-[1132px]
          grid-cols-2
          items-center
          justify-items-center
          gap-x-8
          gap-y-8
          px-5

          sm:grid-cols-3
          lg:h-full
          lg:grid-cols-5
          lg:gap-0
          lg:px-0
        "
      >
        {partners.map((partner, index) => (
          <Image
            key={partner}
            src={partner}
            alt={`Partner ${index + 1}`}
            width={170}
            height={42}
            className="
              h-auto
              w-[135px]
              object-contain

              sm:w-[150px]
              lg:w-[170px]
            "
          />
        ))}
      </Reveal>
    </section>
  );
}