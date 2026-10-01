"use client";

import Link from "next/link";

import AuthShell from "@/components/auth/AuthShell";
import AuthPromo from "@/components/auth/AuthPromo";
import Reveal from "@/components/ui/Reveal";

export default function RegisterPage() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <AuthShell
      promo={
        <AuthPromo
          title="Sign up and come in"
          description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
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
          Create an Account
        </p>

        <h1
          className="
            mt-1
            text-[36px]
            leading-[43px]
            font-semibold
            tracking-[-1px]
            text-[#242528]

            sm:text-[40px]
            sm:leading-[48px]

            xl:max-w-[360px]
            xl:text-[44px]
            xl:leading-[53px]
          "
        >
          Welcome to
          <br />
          ByteSpace
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 xl:mt-[35px]"
        >
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-[14px] leading-[20px] text-[#242528]"
            >
              Full Name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              placeholder="Jamie Davis"
              className="
                mt-2
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

          {/* Email */}
          <div className="mt-[24px]">
            <label
              htmlFor="register-email"
              className="block text-[14px] leading-[20px] text-[#242528]"
            >
              Email
            </label>

            <input
              id="register-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="designer@example.com"
              className="
                mt-2
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
              htmlFor="register-password"
              className="block text-[14px] leading-[20px] text-[#242528]"
            >
              Password
            </label>

            <input
              id="register-password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              minLength={6}
              placeholder="********"
              className="
                mt-2
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

          {/* Continue */}
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

                sm:w-[123px]
              "
            >
              Continue
            </button>
          </div>
        </form>

        {/* Login link */}
        <p className="mt-12 text-center text-[14px] text-[#9A9EA6] xl:mt-[78px]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#003BE2] transition-opacity hover:opacity-75"
          >
            Login
          </Link>
        </p>
      </Reveal>
    </AuthShell>
  );
}