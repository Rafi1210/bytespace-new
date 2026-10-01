import Image from "next/image";

const categories = [
  {
    name: "Design",
    icon: "/assets/home/categories/design.svg",
  },
  {
    name: "Development",
    icon: "/assets/home/categories/development.svg",
  },
  {
    name: "IT & Software",
    icon: "/assets/home/categories/it-software.svg",
  },
  {
    name: "Business",
    icon: "/assets/home/categories/business.svg",
  },
  {
    name: "Marketing",
    icon: "/assets/home/categories/marketing.svg",
  },
  {
    name: "Photography",
    icon: "/assets/home/categories/photography.svg",
  },
];

export default function CategoriesSection() {
  return (
    <section
      id="categories"
      className="bg-white py-16 sm:py-20 lg:pt-[72px] lg:pb-[120px]"
    >
      {/* Heading */}
      <div className="mx-auto w-full max-w-[1050px] px-5 text-center">
        <h2
          className="
            mx-auto
            max-w-[917px]
            text-[30px]
            leading-[38px]
            font-semibold
            text-[#242528]

            sm:text-[36px]
            sm:leading-[42px]

            lg:text-[40px]
            lg:leading-[43px]
          "
        >
          Explore Diverse Learning Paths at Bytespace
        </h2>

        <p
          className="
            mx-auto
            mt-4
            max-w-[1000px]
            text-[14px]
            leading-[23px]
            font-light
            text-[#9A9EA6]

            sm:text-[15px]
            sm:leading-[25px]

            lg:text-[16px]
            lg:leading-[27px]
          "
        >
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring
          there&apos;s something for everyone. Unleash your potential and
          explore our carefully curated categories.
        </p>
      </div>

      {/* Category cards */}
      <div
        className="
          mx-auto
          mt-10
          grid
          w-full
          max-w-[1202px]
          grid-cols-2
          justify-items-center
          gap-4
          px-5

          sm:mt-12
          sm:grid-cols-3
          sm:gap-6

          lg:mt-[68px]
          lg:grid-cols-6
          lg:gap-[40px]
          lg:px-0
        "
      >
        {categories.map((category) => (
          <div
            key={category.name}
            className="
              flex
              h-[145px]
              w-full
              max-w-[160px]
              flex-col
              items-center
              justify-center
              rounded-[16px]
              border
              border-[#D9DCE1]
              bg-white
              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-[#003BE2]/30
              hover:shadow-md

              sm:h-[155px]
              sm:max-w-[167px]

              lg:h-[167px]
              lg:w-[167px]
            "
          >
            <Image
              src={category.icon}
              alt={`${category.name} category`}
              width={60}
              height={60}
              className="h-[52px] w-[52px] sm:h-[56px] sm:w-[56px] lg:h-[60px] lg:w-[60px]"
            />

            <p className="mt-3 text-center text-[14px] font-medium text-[#242528] sm:text-[15px] lg:text-[16px]">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}