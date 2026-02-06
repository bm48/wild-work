import Image from "next/image";




export default function WhoIsG() {
  return (
    <div className="py-12 text-white">
      {/* Image constrained to same width as header separator line */}
      <section className="relative mx-auto flex min-h-[92vh] max-w-5xl items-center justify-center overflow-hidden bg-black">
        <Image
          src="/EllicotCity.jpeg"
          alt="The Ruins - site-specific stonework in Federal Hill, Baltimore"
          fill
          className="object-contain object-center"
          priority
          sizes="(max-width: 64rem) 100vw, 64rem"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden />
      </section>

      <section className="bg-black text-white py-16 text-center font-serif mx-auto max-w-5xl">
        <h1 className="text-[1.5rem] font-bold mb-8">Who is SG Dietz?</h1>
        <p className="text-[0.8rem] leading-relaxed mb-10">
          Scott Gregory Dietz or &quot;G&quot; was born on November 7, 1968 and grew up in Bel Air, MD, a half hour North of Baltimore City, where both his Parents were Born and Raised. G was an Undisciplined Child that was Impossible to Control. Now as an Adult, he has an <span className="font-bold uppercase">UNBRIDLED MIND</span> with <span className="font-bold uppercase">EXPLOSIVE CREATIVE ENERGY</span>.
        </p>
        <h2 className="text-[1.15rem] font-bold mb-8">Worked Out. Thank God.</h2>
        <p className="text-[0.8rem] leading-relaxed mb-12">
          G is a Master Stone Mason, Fine Artist, and Hard Core Problem Solver. With More than 40 Years of Design and Construction Experience, he is known for Charging Directly into the Most Difficult, Complex, and Unconventional Problems People can Face. He and his Team are Capable of any Type of Design, any Type of Build. WildWorks is Centered in Baltimore, MD, Though He Would be Super Happy to <span className="font-bold uppercase">TRAVEL ANYWHERE ON PLANET EARTH</span> to Design &amp; Build for You.
        </p>
        <h2 className="text-[1.15rem] font-bold mb-4">Call or Text Directly:</h2>
        <p className="text-[1.2rem] font-bold mb-6">
          <a href="tel:+14437972166" className="hover:underline">1+443-797-2166</a>
        </p>
        <p className="text-[0.8rem] opacity-90 mb-12">Or DM Me on WhatsApp or X, below.</p>
        <p className="text-[1.2rem] font-bold">G.</p>
      </section>

    </div>
  );
}
