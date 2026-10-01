import Image from "next/image";
import CourseCard from "@/components/home/CourseCard";
import Reveal from "@/components/ui/Reveal";

const studentImages = [
  "/assets/home/hero/students/student-01.png",
  "/assets/home/hero/students/student-02.png",
  "/assets/home/hero/students/student-03.png",
  "/assets/home/hero/students/student-04.png",
  "/assets/home/hero/students/student-05.png",
  "/assets/home/hero/students/student-06.png",
];

const buildDigitalCourse = {
  title: "Build Digital Asset",
  author: "purepearl studio",
  image: "/assets/home/courses/course-02.png",
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
  level: "Beginner",
  rating: "4.5",
  price: "$25",
};

const bigDataCourse = {
  title: "the Power of Big Data",
  author: "purepearl studio",
  image: "/assets/home/courses/course-03.png",
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
  level: "Beginner",
  rating: "4.5",
  price: "$25",
};

export default function AuthPromo({ title, description }) {
  return (
    <Reveal
      as="div"
      duration={700}
      amount={0.1}
      y={14}
    >
      {/* Intro */}
      <h2 className="text-[20px] leading-[26px] font-semibold text-white">
        {title}
      </h2>

      <p className="mt-4 max-w-[500px] text-[18px] leading-[30px] font-light text-white/90">
        {description}
      </p>

      {/* Artwork */}
      <div className="pointer-events-none relative mt-[83px] h-[590px] w-[525px]">
        {/* Back course card */}
        <div className="absolute top-[89px] left-0 z-10 w-[373px]">
          <CourseCard course={buildDigitalCourse} />
        </div>

        {/* Front course card */}
        <div className="absolute top-0 left-[111px] z-20 w-[373px]">
          <CourseCard course={bigDataCourse} />
        </div>

        {/* Lime ring */}
        <Image
          src="/assets/auth/login-ring.png"
          alt=""
          width={147}
          height={147}
          className="absolute top-[14px] left-[27px] z-30"
        />

        {/* White squiggle */}
        <Image
          src="/assets/auth/login-squiggle.png"
          alt=""
          width={176}
          height={176}
          className="absolute top-[321px] left-[348px] z-30"
        />

        {/* Cone */}
        <Image
          src="/assets/auth/cone.png"
          alt=""
          width={150}
          height={130}
          className="absolute bottom-[50px] left-[-8px] z-30 h-auto w-[120px]"
        />

        {/* Happy Students */}
        <div className="absolute top-[435px] left-[226px] z-40 h-[123px] w-[258px] rounded-[16px] bg-[#D4FB20] p-4 text-[#242528]">
          <p className="text-[16px] font-medium">
            Happy Students
          </p>

          <p className="mt-[2px] text-[12px]">
            4.5 (240){" "}
            <span className="text-[#003BE2]">
              ★
            </span>
          </p>

          <div className="mt-2 flex -space-x-[14px]">
            {studentImages.map((student) => (
              <Image
                key={student}
                src={student}
                alt=""
                width={43}
                height={43}
                className="h-[43px] w-[43px] rounded-full border-2 border-[#D4FB20] object-cover"
              />
            ))}

            <div className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-[#242528] text-[10px] font-medium text-white">
              2K+
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}