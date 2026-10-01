import Image from "next/image";

const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function GrowthSection() {
  return (
    <section
      id="creators"
      className="relative overflow-hidden bg-white"
      style={{
        backgroundImage: `
          radial-gradient(
            circle 620px at -5% 2%,
            rgba(203, 252, 1, 0.75) 0%,
            rgba(203, 252, 1, 0.23) 53%,
            rgba(203, 252, 1, 0.06) 75%,
            rgba(203, 252, 1, 0) 100%
          ),
          radial-gradient(
            circle 650px at 105% 5%,
            rgba(0, 59, 226, 0.20) 0%,
            rgba(0, 59, 226, 0.08) 53%,
            rgba(0, 59, 226, 0.03) 75%,
            rgba(0, 59, 226, 0) 100%
          ),
          radial-gradient(
            circle 600px at -5% 100%,
            rgba(203, 252, 1, 0.55) 0%,
            rgba(203, 252, 1, 0.18) 53%,
            rgba(203, 252, 1, 0.05) 75%,
            rgba(203, 252, 1, 0) 100%
          ),
          radial-gradient(
            circle 720px at 105% 100%,
            rgba(0, 59, 226, 0.65) 0%,
            rgba(0, 59, 226, 0.23) 53%,
            rgba(0, 59, 226, 0.06) 75%,
            rgba(0, 59, 226, 0) 100%
          )
        `,
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:py-16 lg:py-[80px]">
        {/* Top row */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:min-h-[600px] lg:gap-20">
          {/* Left text */}
          <div>
            <h2 className="text-[32px] leading-[38px] font-semibold text-[#242528] sm:text-[36px] sm:leading-[42px] lg:text-[40px] lg:leading-[44px]">
              Your Path to Professional
              <br className="hidden sm:block" />
              Growth Starts Here!
            </h2>

            <p className="mt-5 max-w-[500px] text-[14px] leading-[23px] font-light text-[#7F838B] sm:mt-6 sm:leading-[24px] lg:mt-8">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Stats */}
            <div className="mt-8 flex items-center justify-between gap-5 sm:max-w-[390px] sm:justify-start sm:gap-14 lg:mt-10">
              <div>
                <p className="text-[22px] font-semibold text-[#003BE2] lg:text-[24px]">
                  12K
                </p>

                <p className="mt-1 text-[12px] text-[#73777F]">
                  Students
                </p>
              </div>

              <div>
                <p className="text-[22px] font-semibold text-[#003BE2] lg:text-[24px]">
                  70+
                </p>

                <p className="mt-1 text-[12px] text-[#73777F]">
                  Courses
                </p>
              </div>

              <div>
                <p className="text-[22px] font-semibold text-[#003BE2] lg:text-[24px]">
                  16
                </p>

                <p className="mt-1 text-[12px] text-[#73777F]">
                  Creators
                </p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="flex items-center justify-center">
            <Image
              src="/assets/home/growth/growth-student.png"
              alt="Student developing professional skills"
              width={600}
              height={550}
              className="h-auto w-full max-w-[470px] object-contain sm:max-w-[520px] lg:max-w-[600px]"
            />
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-20 grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:mt-[60px] lg:min-h-[600px] lg:gap-20">
          {/* Left image */}
          <div className="flex items-center justify-center">
            <Image
              src="/assets/home/growth/creator-student.png"
              alt="Creator managing online courses"
              width={580}
              height={580}
              className="h-auto w-full max-w-[450px] object-contain sm:max-w-[500px] lg:max-w-[580px]"
            />
          </div>

          {/* Right text */}
          <div>
            <h2 className="text-[32px] leading-[38px] font-semibold text-[#242528] sm:text-[36px] sm:leading-[42px] lg:text-[40px] lg:leading-[44px]">
              Create &amp; Manage
              <br className="hidden sm:block" />
              Courses Easily.
            </h2>

            <p className="mt-5 max-w-[520px] text-[14px] leading-[23px] font-light text-[#3B3B3B] sm:mt-6 sm:leading-[24px] lg:mt-8">
              <span className="font-semibold">ByteSpace </span>
              supports individuals or entities in the creation, publication,
              and administration of educational courses.
            </p>

            {/* Features */}
            <div className="mt-7 space-y-4 lg:mt-8">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#003BE2] text-[11px] font-bold text-white">
                    ✓
                  </div>

                  <span className="text-[14px] font-medium text-[#4F4F4F]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}