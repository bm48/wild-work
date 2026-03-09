"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white">
      {/* Top separator - light gray */}
      <div className="border-t border-[#111]" />

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Email signup - responsive: stacked on mobile, two columns on md+ */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,30%)_minmax(0,40%)] md:gap-6">
          {/* Label: visible in left column on md+, hidden on mobile (label shown in form column below) */}
          <div className="hidden pt-14 md:block" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
            <span className="text-sm text-[#FFFFFF]">
              Email address <span className="text-[#FFFFFF]">*</span>
            </span>
          </div>

          <div>
            <h3
              className="mb-3 text-lg font-normal text-[#FFFFFF] sm:mb-4 md:mb-6 md:text-xl md:pl-6 text-center"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Sign Up For Emails
            </h3>
            <form action="#" method="post" className="flex flex-col gap-4">
              {/* Label: visible only on mobile, above input */}
              <label
                className="text-sm text-[#FFFFFF] md:hidden"
                style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
              >
                Email address <span className="text-[#FFFFFF]">*</span>
              </label>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <input
                  type="email"
                  name="email"
                  required
                  aria-label="Email address"
                  className="w-full min-w-0 rounded border border-[#333] bg-[#1a1a1a] px-3 py-2.5 text-base text-white placeholder-zinc-500 focus:border-[#555] focus:outline-none"
                  placeholder=""
                />
              </div>
              <div className="pl-0">
                <button
                  type="submit"
                  className="min-h-[3rem] w-full rounded bg-[#d4d4d4] px-5 py-2.5 text-sm font-medium text-[#555555] transition-colors hover:bg-[#e0e0e0] sm:w-auto"
                  style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                >
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="space-y-4 text-center mt-8 sm:mt-10 sm:space-y-6">
          <p className="text-3xl sm:text-5xl">
            Questions?
          </p>
          <p className="text-xl sm:text-2xl">Contact Scott G. Dietz directly on his cell at 1+443-797-2166</p>
          <p className="text-xl sm:text-2xl">Email Scott at: <a href="mailto:Wildworks@pm.me" className="underline hover:text-white/90">Wildworks@pm.me</a></p>
          <p className="text-xl sm:text-2xl">or Message Scott directly on X or WhatsApp</p>
        </div>

        {/* Social icons - centered */}
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="https://x.com/OfficialSGDietz"
            aria-label="X (Twitter)"
            className="flex h-12 w-12 items-center justify-center text-[#FFFFFF] transition-opacity hover:opacity-80"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8"
              fill="currentColor"
              aria-hidden
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=14437972166"
            aria-label="WhatsApp"
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#25D366] text-white transition-opacity hover:opacity-90"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8"
              fill="currentColor"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright bar - left and right */}
      <div className="border-t border-[#111]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2  px-4 py-2 text-center text-sm text-[#FFFFFF] sm:flex-row sm:px-6 sm:text-left">
          <span
            style={{ fontFamily: "var(--font-geist-sans), Arial, sans-serif" }}
          >
            © 2026 WildWorks. All Rights Reserved.
          </span>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2  px-4 py-2 text-center text-sm text-[#FFFFFF] sm:flex-row sm:px-6 sm:text-left">
          <span className="ml-4 sm:ml-10 sm:text-sm ">
            <Link href="/pages/Wildworks" target="_blank" className="underline hover:text-white/90">
              Privacy Policy | Terms of Service | Disclaimer | Communications
            </Link>
          </span> 
        </div>
      </div>
    </footer>
  );
}
