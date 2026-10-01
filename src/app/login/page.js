"use client";

import Image from "next/image";
import Link from "next/link";

import AuthShell from "@/components/auth/AuthShell";
import CourseCard from "@/components/home/CourseCard";
import AuthPromo from "@/components/auth/AuthPromo";
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

function FacebookIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="currentColor" />

      <path
        d="M13.4 8.2H15.2V5.3C14.9 5.25 13.8 5.15 12.5 5.15C9.9 5.15 8.1 6.75 8.1 9.7V12.25H5.2V15.5H8.1V23H11.65V15.5H14.55L15 12.25H11.65V10C11.65 9.05 11.9 8.2 13.4 8.2Z"
        fill="white"
        transform="scale(.75) translate(4 1)"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.35 11.1H12v3.8h5.38c-.48 2.42-2.54 3.8-5.38 3.8a6.7 6.7 0 1 1 0-13.4c1.53 0 2.91.53 3.99 1.57l2.82-2.82A10.37 10.37 0 0 0 12 1.4a10.6 10.6 0 1 0 0 21.2c6.13 0 10.18-4.31 10.18-10.38 0-.4-.05-.76-.13-1.12h-.7Z" />
    </svg>
  );
}


export default function LoginPage() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
   <AuthShell
  promo={
    <AuthPromo
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    />
  }
>
      <Reveal
        as="div"
        duration={600}
        amount={0.15}
        y={14}
        className="
          w-full
          rounded-[24px]
          bg-white
          px-6
          py-8
          text-[#242528]

          sm:px-10
          sm:py-12

          xl:h-[784px]
          xl:px-[63px]
          xl:pt-[64px]
          xl:pb-[42px]
        "
      >
        {/* Heading */}
        <p className="text-[16px] leading-[24px] text-[#003BE2] xl:text-[18px]">
          Sign In
        </p>

        <h1 className="mt-1 text-[36px] leading-[43px] font-semibold tracking-[-1px] text-[#242528] sm:text-[40px] sm:leading-[48px] xl:text-[44px] xl:leading-[53px]">
          Welcome Back
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 xl:mt-[28px]">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-[14px] leading-[20px] text-[#242528]"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="designer@example.com"
              required
              className="
                mt-[8px]
                h-[52px]
                w-full
                rounded-[12px]
                border
                border-[#E5E6E8]
                bg-white
                px-6
                text-[16px]
                text-[#242528]
                outline-none
                transition-colors
                placeholder:text-[#9A9EA6]
                focus:border-[#003BE2]
              "
            />
          </div>

          {/* Password */}
          <div className="mt-[24px]">
            <label
              htmlFor="password"
              className="block text-[14px] leading-[20px] text-[#242528]"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="********"
              required
              className="
                mt-[8px]
                h-[52px]
                w-full
                rounded-[12px]
                border
                border-[#E5E6E8]
                bg-white
                px-6
                text-[16px]
                text-[#242528]
                outline-none
                transition-colors
                placeholder:text-[#9A9EA6]
                focus:border-[#003BE2]
              "
            />
          </div>

          {/* Sign In button */}
          <div className="mt-[24px] flex justify-end">
            <button
              type="submit"
              className="
                h-[46px]
                w-full
                rounded-full
                bg-[#D4FB20]
                px-6
                text-[16px]
                font-medium
                text-[#242528]
                transition-transform
                duration-200

                hover:scale-[1.03]
                active:scale-[0.98]

                sm:w-[104px]
              "
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="mt-14 flex items-center gap-3 xl:mt-[73px]">
          <div className="h-px flex-1 bg-[#D1D1D1]" />

          <span className="px-1 text-[14px] text-[#92969D]">or</span>

          <div className="h-px flex-1 bg-[#D1D1D1]" />
        </div>

        {/* Social login */}
        <div className="mt-8 flex items-center justify-center gap-4 xl:mt-[44px]">
          <button
            type="button"
            aria-label="Sign in with Facebook"
            className="flex h-[72px] w-[72px] items-center justify-center rounded-[24px] border border-[#D1D1D1] text-black transition-colors hover:bg-[#F7F7F8]"
          >
            <FacebookIcon />
          </button>

          <button
            type="button"
            aria-label="Sign in with Google"
            className="flex h-[72px] w-[72px] items-center justify-center rounded-[24px] border border-[#D1D1D1] text-black transition-colors hover:bg-[#F7F7F8]"
          >
            <GoogleIcon />
          </button>
        </div>

        {/* Signup link */}
        <p className="mt-12 text-center text-[14px] text-[#9A9EA6] xl:mt-[76px]">
          New user?{" "}
          <Link
            href="/register"
            className="text-[#003BE2] transition-opacity hover:opacity-75"
          >
            Create an account
          </Link>
        </p>
      </Reveal>
    </AuthShell>
  );
}
