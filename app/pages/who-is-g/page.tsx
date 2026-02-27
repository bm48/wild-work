import AspectRatioImage from "../../components/AspectRatioImage";

export default function WhoIsG() {
  return (
    <div className="max-w-5xl mx-auto py-6 text-white sm:py-12">
      {/* Image constrained to same width as header separator line */}
      <section className="relative mx-auto flex max-w-5xl items-center justify-center overflow-hidden bg-black">
        <AspectRatioImage
          src="/EllicotCity.jpeg"
          alt="The Ruins - site-specific stonework in Federal Hill, Baltimore"
          priority
          sizes="(max-width: 64rem) 100vw, 64rem"
        />
        <div className="absolute inset-0  pointer-events-none" aria-hidden />
      </section>

      <section className="mx-auto max-w-5xl bg-black px-4 pt-10 text-white font-serif sm:px-6 sm:pt-16">
        <h1 className="mb-6 text-xl sm:mb-8 sm:text-[1.5rem]">Who is G?</h1>
        <p className="mb-8 text-[0.8rem] leading-relaxed sm:mb-10">
          Scott Gregory Dietz or &quot;G&quot; was born on November 7, 1968 and grew up in Bel Air, MD, a half hour North of Baltimore City, where both his Parents were Born and Raised. G was an Undisciplined Child that was Impossible to Control. Now as an Adult, he has an <span className="font-bold uppercase">UNBRIDLED MIND</span> with <span className="font-bold uppercase">EXPLOSIVE CREATIVE ENERGY</span>.
        </p>
        <h2 className="text-[1.15rem] font-bold mb-8">Worked Out. Thank God.</h2>
        <p className="text-[0.8rem] leading-relaxed mb-12">
          G is a Master Stone Mason, Fine Artist, and Hard Core Problem Solver. With More than 40 Years of Design and Construction Experience, he is known for Charging Directly into the Most Difficult, Complex, and Unconventional Problems People can Face. He and his Team are Capable of any Type of Design, any Type of Build. WildWorks is Centered in Baltimore, MD, Though He Would be Super Happy to <span className="font-bold uppercase">TRAVEL ANYWHERE ON PLANET EARTH</span> to Design &amp; Build for You.
        </p>
        <h2 className="mb-4 text-center text-xl sm:text-2xl">Call or Text Directly:</h2>
        <a href="tel:+14437972166" className="block py-6 text-2xl text-center sm:py-8 sm:text-3xl min-h-[44px]">
          1+443-797-2166
        </a>
        <p className="py-4 text-center text-4xl sm:py-6 sm:text-5xl">Just Do It</p>
        <p className="py-4 text-center text-4xl sm:py-6 sm:text-5xl">Call or Text G.</p>

        <p className="pt-4 text-center text-sm text-white/90 sm:text-base">
          or DM Me on X or WhatsApp
        </p>
        <div className="mt-4 flex justify-center gap-4">
          
          <a
            href="https://x.com/OfficialSGDietz"
            aria-label="X (Twitter)"
            className="flex h-10 w-10 items-center justify-center text-[#FFFFFF] transition-opacity hover:opacity-80"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=14437972166"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#25D366] text-white transition-opacity hover:opacity-90"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
        
      </section>

    </div>
  );
}
