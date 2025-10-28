"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Imperial_Script } from "next/font/google";
import React, { useState, useEffect } from "react";
import Logo from "../../public/images/Logo.png";
import Image from "next/image";

const imperial = Imperial_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const NavLink = ({ href, label, mobile = false }) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className={`
          relative
          transition-all duration-300 ease-out
          group
          ${
            mobile
              ? "text-lg py-4 px-6 border-b border-base-200 last:border-b-0"
              : "px-5 py-2 rounded-lg"
          }
          ${
            isActive
              ? "text-primary font-semibold"
              : "text-base-content hover:text-primary"
          }
        `}
      >
        <span className="relative z-10">{label}</span>

        {/* Animated underline for desktop */}
        {!mobile && (
          <span
            className={`
            absolute bottom-1 left-1/2 w-0 h-0.5 bg-primary
            transition-all duration-300 ease-out
            group-hover:left-2 group-hover:w-[calc(100%-1rem)]
            ${isActive ? "left-2 w-[calc(100%-1rem)]" : ""}
          `}
          />
        )}
      </Link>
    );
  };

  return (
    <nav className="navbar bg-main sticky top-0 z-50 shadow-md min-h-16 lg:min-h-20">
      <div className="container mx-auto">
        {/* Logo/Brand */}
        <div className="flex-1">
          <Link
            href="/"
            className={`
              ${imperial.className}
              flex items-start
              text-3xl md:text-4xl lg:text-5xl
              text-black
              hover:opacity-100
              transition-all duration-300
              group
            `}
          >
            <Image
              src={Logo}
              alt="Bottle Bouquets Logo"
              width={50}
              height={50}
              className="w-8 md:w-10 lg:w-12 h-auto transition-transform duration-300"
            />
            Bottle Bouquets
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex-none">
          {/* Mobile Menu Button */}
          <div className="dropdown dropdown-end lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
                btn btn-ghost btn-square transition-all duration-300
                ${isMobileMenuOpen ? "text-primary" : ""}
              `}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`
                  absolute block w-6 h-0.5 bg-current transition-all duration-300
                  ${isMobileMenuOpen ? "rotate-45 top-3" : "top-1"}
                `}
                />
                <span
                  className={`
                  absolute block w-6 h-0.5 bg-current transition-all duration-300
                  top-3
                  ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}
                `}
                />
                <span
                  className={`
                  absolute block w-6 h-0.5 bg-current transition-all duration-300
                  ${isMobileMenuOpen ? "-rotate-45 top-3" : "top-5"}
                `}
                />
              </div>
            </button>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
              <div className="fixed inset-0 top-16 z-40 lg:hidden">
                <div
                  className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <ul
                  className={`
                  absolute right-4 top-4
                  bg-base-100 rounded-2xl 
                  w-64 p-4 shadow-2xl
                  border border-base-300/50
                  transform transition-all duration-300
                  ${
                    isMobileMenuOpen
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0"
                  }
                `}
                >
                  {navLinks.map((link) => (
                    <li key={link.href} className="animate-fadeIn">
                      <NavLink href={link.href} label={link.label} mobile />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <NavLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
