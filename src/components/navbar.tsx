"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, Heart, UserSearch } from "lucide-react";
import { useSession } from "next-auth/react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <nav className="from-homepagegradient1 to-homepagegradient2 top-0 z-50 bg-gradient-to-r">
      <div className="text-homepageforeground mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Brand Name */}
          <div className="flex items-center">
            <Link
              href="/public"
              className="flex items-center text-xl font-bold"
            >
              <Image
                src="/logo-with-text.png"
                alt="logo-with-text"
                height={300}
                width={250}
              />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 space-x-4">
              <div className="flex items-center">
                <Link
                  className={
                    "hover:text-homepagecardforeground flex gap-2 rounded-md px-3 py-2 text-sm font-medium"
                  }
                  href="/login-apply"
                >
                  <Briefcase className="h-5 w-5" />
                  Apply
                </Link>
                |
                <Link
                  className={
                    "hover:text-homepagecardforeground flex gap-2 rounded-md px-3 py-2 text-sm font-medium"
                  }
                  href="/login-recruit"
                >
                  <UserSearch className="h-5 w-5" />
                  Recruit
                </Link>
                <Link
                  className={
                    "hover:text-homepagecardforeground flex gap-2 rounded-md px-3 py-2 text-sm font-medium"
                  }
                  href="/about"
                >
                  <Heart className="h-5 w-5" />
                  Saved Jobs
                </Link>
                {status === "authenticated" && (
                  <Link
                    className={
                      "hover:text-homepagecardforeground flex gap-2 rounded-md px-3 py-2 text-sm font-medium"
                    }
                    href="/profile/builder"
                  >
                    <UserSearch className="h-5 w-5" />
                    Dashboard
                  </Link>
                )}
              </div>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 text-center sm:px-3">
            <Link
              className="text-homepagecardforeground block rounded-md px-3 py-2 font-medium"
              href="/public"
            >
              Home
            </Link>
            <Link
              className="text-homepagecardforeground block rounded-md px-3 py-2 font-medium"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-homepagecardforeground block rounded-md px-3 py-2 font-medium"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="text-homepagecardforeground block rounded-md px-3 py-2 font-medium"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
