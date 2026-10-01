import Image from "next/image";
import Container from "@/components/ui/Container";

const students = [
  "/assets/home/hero/students/student-01.png",
  "/assets/home/hero/students/student-02.png",
  "/assets/home/hero/students/student-03.png",
  "/assets/home/hero/students/student-04.png",
  "/assets/home/hero/students/student-05.png",
  "/assets/home/hero/students/student-06.png",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#003BE2] lg:h-[900px]">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      {/* Decoration */}
      <Image
        src="/assets/home/hero/hero-decoration.svg"
        alt=""
        fill
        priority
        className="pointer-events-none hidden object-cover lg:block"
      />

      <Container className="relative z-10 lg:h-full">
        {/* Text content */}
        <div className="pt-7 text-center sm:pt-10 lg:pt-[49px]">
          <h1 className="mx-auto max-w-[340px] text-[34px] leading-[39px] font-semibold tracking-[-0.5px] text-white sm:max-w-[650px] sm:text-[50px] sm:leading-[56px] lg:max-w-none lg:text-[72px] lg:leading-[1.08] lg:tracking-normal">
            <span className="block lg:hidden">
              Get Access to
              <br />
              Hundreds Courses
              <br />
              Available
            </span>

            <span className="hidden lg:block">
              Get Access to Hundreds
              <br />
              Courses Available
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-[320px] text-[14px] leading-[22px] font-light text-white/85 sm:max-w-[650px] sm:text-[16px] sm:leading-[26px] lg:mt-6 lg:max-w-none lg:text-[18px]">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* Search */}
          <div className="mx-auto mt-7 flex w-full max-w-[581px] flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:mt-[60px]">
            <div className="flex h-[52px] w-full items-center gap-3 rounded-full bg-white px-6 sm:w-[461px]">
              <Image
                src="/assets/icons/search.svg"
                alt=""
                width={24}
                height={24}
              />

              <input
                type="text"
                placeholder="Course, topic, creator"
                aria-label="Search courses"
                className="w-full bg-transparent text-[14px] text-[#242528] outline-none placeholder:text-[#92969D]"
              />
            </div>

            <button
              type="button"
              aria-label="Search courses"
              className="h-[46px] w-full rounded-full bg-[#CBFC01] text-[14px] font-medium text-[#242528] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] sm:w-[104px]"
              >
              Search
            </button>
          </div>
        </div>

        {/* Hero visual
            Mobile: normal dedicated area
            Desktop: wrapper becomes static, images use original positions
        */}
        <div className="relative mt-0 h-[250px] sm:mt-8 sm:h-[430px] lg:static lg:mt-0 lg:h-auto">
          {/* Green circle */}
          <Image
            src="/assets/home/hero/hero-circle.png"
            alt=""
            width={1149}
            height={1149}
            priority
            className="
              pointer-events-none
              absolute
              bottom-[-10px]
              left-1/2
              w-[560px]
              max-w-none
              -translate-x-1/2

              sm:bottom-[-130px]
              sm:w-[800px]

              lg:top-[480px]
              lg:bottom-auto
              lg:w-[1149px]
            "
          />

          {/* Student - ONLY ONE INSTANCE */}
          <Image
            src="/assets/home/hero/hero-student.png"
            alt="Student"
            width={660}
            height={600}
            priority
            className="
              absolute
              bottom-0
              left-[55%]
              z-10
              w-[330px]
              max-w-none
              -translate-x-1/2

              sm:w-[470px]

              lg:top-[430px]
              lg:bottom-auto
              lg:left-[54%]
              lg:w-[660px]
            "
          />
        </div>

        {/* Desktop floating cards */}
        <div className="absolute top-[519px] left-[284px] z-20 hidden rounded-xl bg-white p-4 lg:block">
          <p className="text-sm font-medium">
            UI/UX Design
          </p>

          <p className="text-xs text-gray-500">
            200 Courses • 1000+ Students
          </p>
        </div>

        <div className="absolute top-[531px] right-[246px] z-20 hidden w-[232px] rounded-xl bg-white p-4 lg:block">
          <p className="text-sm">
            Learning Progress
          </p>

          <p className="mt-2 text-[40px] font-semibold">
            55%
          </p>

          <div className="mt-3 h-2 rounded-full bg-gray-200">
            <div className="h-full w-[55%] rounded-full bg-[#CBFC01]" />
          </div>
        </div>

        <div className="absolute top-[717px] left-[208px] z-20 hidden rounded-xl bg-white p-4 lg:block">
          <p className="text-sm font-medium">
            Happy Students
          </p>

          <p className="text-xs">
            4.5 (240) ⭐
          </p>

          <div className="mt-2 flex -space-x-3">
            {students.map((student) => (
              <Image
                key={student}
                src={student}
                alt=""
                width={43}
                height={43}
                className="h-[43px] w-[43px] rounded-full border-2 border-white object-cover"
              />
            ))}

            <div className="flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#CBFC01] text-xs font-semibold">
              2K+
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}