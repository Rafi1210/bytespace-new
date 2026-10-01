import Image from "next/image";
import Link from "next/link";

export default function AuthShell({ children, promo }) {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#003BE2]">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 2px, transparent 2px), linear-gradient(to bottom, white 2px, transparent 2px)",
          backgroundSize: "120px 120px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-10 sm:px-8 xl:px-0 xl:pb-[120px]">
        {/* Logo */}
        <header className="pt-5 xl:pt-[35px]">
          <Link
            href="/"
            aria-label="Go to ByteSpace homepage"
            className="inline-flex"
          >
            <Image
              src="/assets/brand/logo.svg"
              alt="ByteSpace"
              width={29}
              height={32}
              priority
            />
          </Link>
        </header>

        {/* Main content */}
        <div className="mt-8 xl:mt-[53px] xl:grid xl:grid-cols-[520px_579px] xl:gap-[101px]">
          {/* Left promotional section */}
          <section className="hidden xl:block">
            {promo}
          </section>

          {/* Auth form */}
          <section className="mx-auto w-full max-w-[579px]">
            {children}
          </section>
        </div>
      </div>
    </main>
  );
}