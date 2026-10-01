"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export default function CoursesIntroSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <section className="bg-white py-14 sm:py-16 lg:pt-[72px] lg:pb-[54px]">
      <div className="mx-auto w-full max-w-[1200px] px-5">
        {/* Heading */}
        <Reveal
          as="div"
          duration={600}
          amount={0.2}
          className="mx-auto max-w-[917px] text-center"
        >
          <h2
            className="
              text-[32px]
              leading-[38px]
              font-semibold
              text-[#242528]

              sm:text-[40px]
              sm:leading-[46px]

              lg:text-[48px]
              lg:leading-[53px]
            "
          >
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[900px]
              text-[14px]
              leading-[23px]
              font-light
              text-[#9A9EA6]

              sm:text-[16px]
              sm:leading-[26px]

              lg:text-[18px]
              lg:leading-[29px]
            "
          >
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </Reveal>

        {/* Category tags */}
        <div
          className="
            mx-auto
            mt-8
            flex
            max-w-[1100px]
            flex-wrap
            justify-center
            gap-x-2
            gap-y-3

            sm:mt-[34px]
            sm:gap-x-3
            sm:gap-y-4
          "
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`
                rounded-full
                px-3
                py-2
                text-[12px]
                transition-colors
                duration-200
                sm:px-4
                sm:py-[9px]
                sm:text-[14px]
                ${
                  isActive
                    ? "bg-[#CBFC01] text-[#242528]"
                    : "bg-[#F4F4F5] text-[#4F4F4F] hover:bg-[#EBECEE]"
    }
  `}
              >
                {category}
              </button>
            );
          })}

          <button
            type="button"
            className="px-2 py-2 text-[12px] font-medium text-[#003BE2] sm:py-[9px] sm:text-[14px]"
          >
            + More
          </button>
        </div>
      </div>
    </section>
  );
}
