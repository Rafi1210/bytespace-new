import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="mx-auto flex h-[88px] w-full max-w-[1200px] items-center px-5 lg:h-[96px] lg:px-0">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/brand/logo.svg"
            alt="ByteSpace"
            width={29}
            height={32}
          />

          <span className="text-[24px] font-bold text-[#242528]">
            ByteSpace
          </span>
        </Link>
      </header>

      <div className="mx-auto grid w-full max-w-[1200px] lg:grid-cols-[1fr_579px] lg:gap-[80px]">
        {/* Left */}
        <section className="hidden px-5 pt-10 lg:block lg:px-0 lg:pt-16">
          <div className="max-w-[475px]">
            <p className="text-[14px] font-medium text-[#003BE2]">
              LEARN. CREATE. GROW.
            </p>

            <h1 className="mt-5 text-[52px] leading-[59px] font-semibold text-[#242528]">
              Continue Your
              <br />
              Learning Journey.
            </h1>

            <p className="mt-6 max-w-[450px] text-[16px] leading-[28px] font-light text-[#777B82]">
              Sign in to access your courses, track your learning progress, and
              continue building the skills that move you forward.
            </p>

            <div className="mt-12 rounded-[24px] bg-[#003BE2] p-8 text-white">
              <p className="text-[28px] font-semibold">
                Learn at your own pace.
              </p>

              <p className="mt-4 text-[14px] leading-[24px] font-light text-white/75">
                Discover courses from talented creators and develop practical
                skills through ByteSpace.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-2 w-20 rounded-full bg-[#CBFC01]" />
                <div className="h-2 w-8 rounded-full bg-white/20" />
                <div className="h-2 w-8 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Form side */}
        <section className="flex justify-center px-5 py-10 sm:py-14 lg:px-0 lg:py-6">
          {children}
        </section>
      </div>
    </main>
  );
}