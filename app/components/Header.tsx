"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navTabs = [
  { label: "HOME", href: "/pages/Home" },
  { label: "WILDFIRE", href: "/pages/Wildfire" },
  { label: "LEWFRENCH", href: "/pages/Lew-french" },
  { label: "I SELL", href: "/pages/I-sell" },
  { label: "WHO IS G", href: "/pages/who-is-g" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-[#000000] text-white">
      {/* Logo + site title block */}
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-6 py-10">
        <div className="flex flex-col items-center justify-center text-left sm:items-start">
          <Image
            src="/wildLogo.png"
            alt="WildWorks - Stone staircase and pathway leading to a rustic house with natural landscaping"
            width={120}
            height={120}
          />
        </div>
        <span
          className="text-3xl font-normal sm:text-4xl"
          style={{ fontFamily: "var(--font-serif), serif" }}
        >
          Wildworks.Live
        </span>
      </div>

      {/* Nav tabs - centered */}
      <nav className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex items-center justify-center gap-6">
          {navTabs.map((tab) => {
            const isActive =
              tab.href === "/pages/Home"
                ? pathname === "/" || pathname === "/pages/Home"
                : pathname.startsWith(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`rounded px-5 py-2.5 text-sm font-normal uppercase tracking-wide transition-colors ${
                  isActive
                    ? "border border-[#DCDCDC] bg-[#FFFFFF] text-[#666666] hover:bg-[#f5f5f5]"
                    : "text-[#FFFFFF] hover:text-white/85"
                }`}
                style={{
                  fontFamily: "var(--font-serif), serif",
                }}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Separator line below nav */}
      <div className="border-t border-[#444444] mx-auto max-w-5xl px-6" />
    </header>
  );
}
