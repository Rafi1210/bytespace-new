import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "/assets/home/testimonials/testimonial-sarah.png",
    message:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    height: 432,
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "/assets/home/testimonials/testimonial-james.png",
    message:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    height: 436,
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "/assets/home/testimonials/testimonial-alex.png",
    message:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    height: 407,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:h-[784px] lg:py-[74px]"
      style={{
        backgroundImage: `
          radial-gradient(
            circle at 50% 24%,
            rgba(203, 252, 1, 0.55) 0%,
            rgba(203, 252, 1, 0.28) 12%,
            rgba(203, 252, 1, 0.10) 20%,
            rgba(203, 252, 1, 0.03) 32%,
            rgba(203, 252, 1, 0) 34%
          ),

          radial-gradient(
            circle at 88% 20%,
            rgba(203, 252, 1, 0.25) 0%,
            rgba(203, 252, 1, 0.10) 30%,
            rgba(203, 252, 1, 0.03) 52%,
            rgba(203, 252, 1, 0) 70%
          ),

          radial-gradient(
            circle at -5% 95%,
            rgba(0, 59, 226, 0.24) 0%,
            rgba(0, 59, 226, 0.10) 34%,
            rgba(0, 59, 226, 0.03) 55%,
            rgba(0, 59, 226, 0) 72%
          )
        `,
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1204px] px-5 lg:px-0">
        {/* Heading + description */}
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-[577px_580px] lg:gap-[43px]">
          <div className="flex lg:items-end">
            <h2
              className="
                text-[32px]
                leading-[38px]
                font-semibold
                text-[#242528]

                sm:text-[36px]
                sm:leading-[44px]

                lg:text-[40px]
                lg:leading-[53px]
              "
            >
              Discover What Our
              <br className="hidden sm:block" />
              Community Is Saying
            </h2>
          </div>

          <p
            className="
              max-w-[580px]
              text-[14px]
              leading-[24px]
              font-light
              text-[#666A72]

              sm:text-[15px]
              sm:leading-[26px]

              lg:text-[16px]
              lg:leading-[29px]
            "
          >
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-6

            md:grid-cols-2
            md:gap-8

            lg:mt-[72px]
            lg:grid-cols-[374px_374px_374px]
            lg:gap-[41px]
          "
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              style={{
                "--card-height": `${testimonial.height}px`,
              }}
              className="
                rounded-[20px]
                border
                border-[#ECEEF1]
                bg-white
                p-5
                shadow-[0_4px_20px_rgba(0,0,0,0.025)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#003BE2]/15
                hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]

                sm:p-6
                lg:min-h-[var(--card-height)]
              "
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="h-[68px] w-[68px] rounded-full object-cover sm:h-[80px] sm:w-[80px]"
              />

              <div className="mt-5 sm:mt-6">
                <h3 className="text-[17px] font-semibold text-[#242528] sm:text-[18px]">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-[14px] text-[#003BE2] sm:text-[16px]">
                  {testimonial.role}
                </p>
              </div>

              <p className="mt-5 text-[14px] leading-[25px] font-light text-[#5F6269] sm:mt-6 sm:text-[16px] sm:leading-[29px]">
                {testimonial.message}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}