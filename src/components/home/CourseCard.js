import Image from "next/image";

const studentImages = [
  "/assets/home/hero/students/student-01.png",
  "/assets/home/hero/students/student-02.png",
  "/assets/home/hero/students/student-03.png",
  "/assets/home/hero/students/student-04.png",
];

export default function CourseCard({ course }) {
  return (
    <div
      className="
        mx-auto
        w-full
        max-w-[373px]
        rounded-[16px]
        border
        border-[#E5E7EB]
        bg-white
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md

        lg:h-[384px]
      "
    >
      {/* Course image */}
      <div className="relative overflow-hidden rounded-[12px]">
        <Image
          src={course.image}
          alt={course.title}
          width={341}
          height={195}
          className="h-[180px] w-full object-cover sm:h-[195px]"
        />

        {/* Image info */}
        <div className="absolute right-2 bottom-3 left-2 flex items-center justify-between gap-1 sm:right-3 sm:left-3 sm:gap-2">
          <span className="whitespace-nowrap rounded-full bg-white/50 px-2 py-[6px] text-[9px] font-medium text-[#4F4F4F] backdrop-blur-xs sm:py-[7px] sm:text-[11px]">
            {course.lessons}
          </span>

          <span className="whitespace-nowrap rounded-full bg-white/50 px-2 py-[6px] text-[9px] font-medium text-[#4F4F4F] backdrop-blur-xs sm:py-[7px] sm:text-[11px]">
            {course.duration}
          </span>

          <span className="whitespace-nowrap rounded-full bg-white/50 px-2 py-[6px] text-[9px] font-medium text-[#4F4F4F] backdrop-blur-xs sm:py-[7px] sm:text-[11px]">
            {course.comments}
          </span>
        </div>
      </div>

      <div className="mt-5">
        {/* Title + rating */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3
              title={course.title}
              className="truncate text-[17px] font-semibold text-[#242528] sm:text-[18px]"
            >
              {course.title}
            </h3>

            <p className="mt-1 text-[13px] font-light text-[#777B82]">
              by{" "}
              <span className="font-normal text-[#003BE2]">
                {course.author}
              </span>
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <span className="text-[15px] text-[#4F4F4F] sm:text-[16px]">
              {course.rating}
            </span>

            <span className="text-[21px] leading-none text-[#CED0D3]">
              ★
            </span>
          </div>
        </div>

        {/* Level + students */}
        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-[32px] shrink-0 items-center gap-2 rounded-full bg-[#F5F5F5] px-3">
            <Image
              src="/assets/icons/level.svg"
              alt=""
              width={13}
              height={20}
            />

            <span className="text-[12px] text-[#4F4F4F]">
              {course.level}
            </span>
          </div>

          <div className="flex min-w-0 -space-x-2">
            {studentImages.map((student) => (
              <Image
                key={student}
                src={student}
                alt=""
                width={32}
                height={32}
                className="h-[32px] w-[32px] shrink-0 rounded-full border-2 border-white object-cover"
              />
            ))}

            <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#CBFC01] text-[10px] font-medium">
              26+
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-end">
          <span className="text-[18px] font-semibold text-[#003BE2]">
            {course.price}
          </span>

          <span className="ml-1 text-[12px] text-[#8B8F98]">
            /lifetime
          </span>
        </div>
      </div>
    </div>
  );
}