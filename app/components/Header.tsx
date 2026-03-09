"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navTabs = [
  { label: "HOME", href: "/pages/Home" },
  { label: "WILDFIRE", href: "/pages/Wildfire" },
  { label: "INSPIRATION", href: "/pages/Inspiration" },
  { label: 'THE RUINS', href: "/pages/The-ruins"},
  { label: "I SELL", href: "/pages/I-sell" },
  { label: "BIO", href: "/pages/who-is-g" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-[#000000] text-white">
      {/* Logo + title on top; nav titles in a row below (horizontal scroll on mobile) */}
      <div className="mx-auto flex w-[80%] flex-col items-center py-4 sm:gap-8 sm:pt-10">
        {/* Logo + site title */}
        {/* <div className="flex flex-shrink-0 flex-col items-center sm:flex-row sm:gap-3">
          <Image
            src="/wildLogo.png"
            alt="WildWorks - Stone staircase and pathway leading to a rustic house with natural landscaping"
            width={120}
            height={120}
            className="h-12 w-12 object-contain sm:h-[120px] sm:w-[120px]"
          />
          <span
            className="whitespace-nowrap text-lg font-normal sm:text-4xl"
            style={{ fontFamily: "var(--font-serif), serif" }}
          >
            Wildworks.Live
          </span>
        </div> */}

        {/* Nav titles: one row below logo/title; horizontal scroll on mobile, centered wrap on desktop */}
        <nav className="w-full pt-4 sm:mx-auto sm:w-auto sm:px-6 sm:pb-2 sm:pt-12">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pl-1 [-webkit-overflow-scrolling:touch] md:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:pb-0 sm:pl-0">
            {navTabs.map((tab) => {
              const isActive =
                tab.href === "/pages/Home"
                  ? pathname === "/" || pathname === "/pages/Home"
                  : pathname.startsWith(tab.href);
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`inline-flex flex-shrink-0 min-h-[44px] min-w-[44px] items-center justify-center rounded px-3 py-2.5 text-xs font-normal uppercase tracking-wide transition-colors sm:px-5 sm:text-sm ${
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
      </div>

      {/* Separator line below nav */}
      <div className="border-b mx-auto w-[80%] px-4 sm:px-6" style={{ borderColor: "#222222" }} />
    </header>
  );
}
