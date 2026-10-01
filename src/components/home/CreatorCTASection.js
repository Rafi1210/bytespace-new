import Image from "next/image";
import Link from "next/link";

export default function CreatorCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#003BE2] py-14 sm:py-16 xl:h-[488px] xl:py-0">
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      {/* Decorative artwork
          Hidden on mobile/tablet so it can never overlap the text.
      */}
      <Image
        src="/assets/home/cta/cta-decoration.svg"
        alt=""
        width={1714}
        height={803}
        priority
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-20px]
          hidden
          w-[1714px]
          max-w-none
          -translate-x-1/2

          xl:block

          min-[1720px]:top-[-1.4vw]
          min-[1720px]:w-[119vw]
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[964px]
          flex-col
          items-center
          px-5
          text-center

          xl:h-full
          xl:pt-[85px]
        "
      >
        <h2
          className="
            max-w-[710px]
            text-[32px]
            leading-[38px]
            font-semibold
            text-white

            sm:text-[40px]
            sm:leading-[46px]

            xl:text-[48px]
            xl:leading-[53px]
          "
        >
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p
          className="
            mt-6
            max-w-[720px]
            text-[14px]
            leading-[24px]
            font-light
            text-white/80

            sm:text-[15px]
            sm:leading-[26px]

            xl:mt-[40px]
            xl:max-w-[964px]
            xl:text-[16px]
            xl:leading-[29px]
          "
        >
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Link
          href="/register"
          className="
            mt-8
            flex
            h-[46px]
            w-[172px]
            items-center
            justify-center
            rounded-full
            bg-[#CBFC01]
            text-[16px]
            font-medium
            text-[#242528]
            transition-transform
            duration-200

            hover:scale-[1.03]
            active:scale-[0.98]

            xl:mt-[40px]
          "
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}