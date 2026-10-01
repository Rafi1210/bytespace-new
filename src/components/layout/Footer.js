import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-5 pt-14 pb-10 sm:pt-16 lg:px-0 lg:pt-[71px] lg:pb-[48px]">
        {/* Top content */}
        <Reveal
          as="div"
          duration={600}
          amount={0.15}
          className="grid gap-12 lg:grid-cols-[528px_580px] lg:gap-[92px]"
        >
          {/* Left side */}
          <div>
            {/* Logo */}
            <Link href="/" className="flex w-fit items-center gap-2">
              <Image
                src="/assets/brand/logo.svg"
                alt="ByteSpace"
                width={29}
                height={32}
              />

              <span className="text-[24px] font-bold leading-none text-[#242528]">
                ByteSpace
              </span>
            </Link>

            {/* Newsletter description */}
            <p className="mt-4 max-w-[528px] text-[14px] leading-[22px] font-light text-[#4F4F4F] lg:whitespace-nowrap">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter form */}
            <form className="mt-8 flex w-full max-w-[504px] flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 lg:mt-[45px]">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-[52px] w-full rounded-full border border-[#CED0D3] px-6 text-[16px] text-[#242528] outline-none transition-colors placeholder:text-[#9A9EA6] focus:border-[#003BE2] sm:w-[376px]"
              />

              <button
                type="submit"
                className="h-[46px] w-full rounded-full bg-[#CBFC01] text-[16px] font-medium text-[#242528] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] sm:w-[104px]"
              >
                Search
              </button>
            </form>

            <p className="mt-5 max-w-[504px] text-[12px] leading-[19px] font-light text-[#4F4F4F] lg:mt-6">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right side */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:grid-cols-[167px_167px_166px] lg:gap-[40px] lg:pt-[38px]">
            {/* Column 1 */}
            <div className="flex flex-col gap-[18px] text-[13px] font-light text-[#3F4147] lg:gap-[22px]">
              <Link href="#courses" className="transition-colors hover:text-[#003BE2]">
                Featured Courses
              </Link>

              <Link
                href="#categories"
                className="transition-colors hover:text-[#003BE2]"
              >
                Featured Categories
              </Link>

              <Link href="#courses" className="transition-colors hover:text-[#003BE2]">
                Business
              </Link>

              <Link href="#courses" className="transition-colors hover:text-[#003BE2]">
                IT
              </Link>

              <Link href="#courses" className="transition-colors hover:text-[#003BE2]">
                Design
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-[18px] text-[13px] font-light text-[#3F4147] lg:gap-[22px]">
              <Link href="#courses" className="transition-colors hover:text-[#003BE2]">
                Development
              </Link>

              <Link href="#courses" className="transition-colors hover:text-[#003BE2]">
                Marketing
              </Link>

              <Link href="#courses" className="transition-colors hover:text-[#003BE2]">
                Photography
              </Link>

              <Link href="#courses" className="transition-colors hover:text-[#003BE2]">
                Finance
              </Link>

              <Link href="#courses" className="transition-colors hover:text-[#003BE2]">
                Sport
              </Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-[18px] text-[13px] font-light text-[#3F4147] lg:gap-[22px]">
              <Link
                href="/register"
                className="transition-colors hover:text-[#003BE2]"
              >
                Become a Creator
              </Link>

              <Link href="#" className="transition-colors hover:text-[#003BE2]">
                Affiliate Program
              </Link>

              <Link href="#" className="transition-colors hover:text-[#003BE2]">
                Contact
              </Link>

              <Link href="#" className="transition-colors hover:text-[#003BE2]">
                Help
              </Link>

              <Link href="#" className="transition-colors hover:text-[#003BE2]">
                About
              </Link>
            </div>
          </div>
          </Reveal>

        {/* Bottom */}
        <div className="mt-16 border-t border-[#CED0D3] pt-6 lg:mt-[130px] lg:pt-[23px]">
          <div className="flex flex-col gap-4 text-[12px] font-light text-[#4F4F4F] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2023 ByteSpace. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link href="#" className="transition-colors hover:text-[#003BE2]">
                Privacy Policy
              </Link>

              <Link href="#" className="transition-colors hover:text-[#003BE2]">
                Terms of Service
              </Link>

              <Link href="#" className="transition-colors hover:text-[#003BE2]">
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}