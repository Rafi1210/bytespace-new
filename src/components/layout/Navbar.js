"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-[#003BE2]">
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      <Container className="relative z-10 flex h-[88px] items-center justify-between lg:h-[120px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/brand/logo.svg"
            alt="ByteSpace logo"
            width={29}
            height={32}
          />

          <span className="text-[22px] font-bold text-white lg:text-[24px]">
            ByteSpace
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 text-[15px] text-white lg:flex">
          <Link href="/" className="transition-opacity hover:opacity-80">
            Home
          </Link>
          <Link href="#courses" className="transition-opacity hover:opacity-80">
            Courses
          </Link>
          <Link href="#creators" className="transition-opacity hover:opacity-80">
            Creators
          </Link>
        </nav>

        <div className="hidden items-center gap-6 text-[15px] text-white lg:flex">
          <Link href="/login" className="transition-opacity hover:opacity-80">
            Sign In
          </Link>
          <Link href="/register" className="transition-opacity hover:opacity-80">
            Join Us
          </Link>

          <button type="button" aria-label="Shopping bag">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 8H18L19 21H5L6 8Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M9 9V6C9 4.343 10.343 3 12 3C13.657 3 15 4.343 15 6V9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          {menuOpen ? (
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="relative z-20 border-t border-white/20 bg-[#003BE2] px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-5 text-[16px] text-white">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="transition-opacity hover:opacity-80"
            >
              Home
            </Link>

            <Link
              href="#courses"
              onClick={() => setMenuOpen(false)}
              className="transition-opacity hover:opacity-80"
            >
              Courses
            </Link>

            <Link
              href="#creators"
              onClick={() => setMenuOpen(false)}
              className="transition-opacity hover:opacity-80"
            >
              Creators
            </Link>

            <div className="h-px bg-white/20" />

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="transition-opacity hover:opacity-80"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="transition-opacity hover:opacity-80"
            >
              Join Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}