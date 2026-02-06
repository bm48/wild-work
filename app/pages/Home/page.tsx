import Image from "next/image";
import Link from "next/link";
import ImageGallery from "../../components/ImageGallery";
import InspirationGallery from "../../components/InspirationGallery";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl py-12">
      {/* Hero: image with overlaid text - full image visible */}
      <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-black">
        <Image
          src="/hero-wildworks.jpg"
          alt="WildWorks - Stone staircase and pathway leading to a rustic house with natural landscaping"
          fill
          className="object-contain object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden />
      </section>

      {/* Text content on black background */}
      <section className="bg-black px-6 py-16 text-white">
        <div className="space-y-12 text-center" style={{ fontFamily: "var(--font-serif), serif" }}>
          <div>
            <p className="text-[0.8rem] font-normal">
              On a Quest to Create Planet Earth&apos;s Ultimate Stone Artwork
            </p>
            <p className="mt-2 text-[0.8rem] font-normal text-white/90">
              Scott G. Dietz - Owner/Artist
            </p>
          </div>

          <div>
            <h2 className="text-[1.15rem] font-normal tracking-wide" style={{ fontFamily: "var(--font-script), serif" }}>
              WildWorks
            </h2>
            <p className="mt-2 text-[0.8rem] font-normal">
              Fine Art and Practical Landscaping
            </p>
          </div>

          <div>
            <p className="text-[0.8rem] font-bold leading-snug">
              Want Something Stunningly Wild Of Your Own This Season?
            </p>
            <p className="mt-6 text-[1.2rem] font-bold">
              Call Now!
            </p>
            <a
              href="tel:+14437972166"
              className="mt-3 inline-block text-[1.2rem] font-bold underline decoration-white/50 underline-offset-4 transition-colors hover:decoration-white"
            >
              1+443-797-2166
            </a>
          </div>

          <div>
            <p className="text-[1.2rem] font-bold">
              G.
            </p>
            <p className="mt-4 text-[0.8rem] font-bold uppercase leading-snug tracking-wide">
              I WILL TRAVEL ANYWHERE IN THE WORLD TO DESIGN, BUILD, AND PROBLEM
              SOLVE FOR YOU
            </p>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-black">
        <Image
          src="/20260121-TreeofLife-Branded-A copy.jpg"
          alt="Tree of Life - A tree with a human face and a tree with a dragon face"
          fill
          className="object-contain object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden />
      </section>

      {/* Current project banner */}
      <section className="flex flex-col items-center justify-center gap-6 bg-black px-6 pt-12 text-center text-white" style={{ fontFamily: "var(--font-serif), serif" }}>
        <p className="text-[0.8rem] font-normal">
          The Tree of Life Natural Stone Patio with Creeping Perennial
          &apos;Leaves&apos;
        </p>
        <h2 className="text-[1.15rem] font-bold">
          Our Current Project: Wildfire
        </h2>
      </section>

      <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-black">
        <Image
          src="/21.jpg"
          alt="WildWorks - Stone staircase and pathway leading to a rustic house with natural landscaping"
          fill
          className="object-contain object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden />
      </section>

      {/* Project Wildfire CTA */}
      <section className="bg-black px-6 py-16 text-white text-center">
        <p
          className="mx-auto text-[0.8rem] leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-serif), serif" }}
        >
          Project Wildfire is a <strong>super wild</strong>,{" "}
          <strong>natural stone outdoor fireplace installation</strong> in
          Lutherville, Maryland
        </p>
        <Link
          href="/pages/Wildfire"
          className=" rounded-2xl bg-white px-8 py-4 font-medium transition-opacity hover:opacity-90"
          style={{ fontFamily: "var(--font-geist-sans), sans-serif", backgroundColor: "white", color: "#555", borderRadius: "10px", padding: "15px 15px" }}
        >
          Click Here To Check Out Project Wildfire
        </Link>
      </section>


        <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-black mt-8">
          <Image
          src="/LewFrenchInspiration-2.png"
          alt="WildWorks - Stone staircase and pathway leading to a rustic house with natural landscaping"
          fill
          className="object-contain object-center"
          priority
          sizes="100vw"
          />
        </section>

      {/* Inspiration: Lew French */}
      <section className="bg-black px-6 py-12 text-white">
        <div
          className="space-y-5 text-left text-[0.8rem] leading-relaxed"
          style={{ fontFamily: "var(--font-serif), serif" }}
        >
          <h2 className="text-[1.15rem] font-bold text-center">
            Inspiration: Lew French
          </h2>
          <p>
            Project Wildfire draws direct inspiration from the work of master
            stone craftsman <strong>Lew French</strong> of{" "}
            <a
            target="_blank"
            href="https://lewfrenchstone.com/"
            className="underline decoration-white/60 underline-offset-2 hover:decoration-white"
            >
            Lew FrenchStone.com
            </a>
            .
          </p>
          <div className="flex align-center justify-center">

            <Link
              href="/pages/Lew-french"
              className=" rounded-2xl bg-white px-8 py-4 font-medium transition-opacity hover:opacity-90"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif", backgroundColor: "white", color: "#555", borderRadius: "10px", padding: "12px 15px" }}
            >
              Click Here To See More
            </Link>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-black">
        <Image
          src="/Ruins-Website-20260127-A copy.jpg"
          alt="The Ruins - site-specific stonework in Federal Hill, Baltimore"
          fill
          className="object-contain object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden />
      </section>

      {/* The Ruins */}
      <section className="bg-black px-6 py-12 text-white">
        <div
          className="space-y-5 text-left text-[0.8rem] leading-relaxed"
          style={{ fontFamily: "var(--font-serif), serif" }}
        >
          <h2 className="text-[1.15rem] font-bold">The Ruins</h2>
          <p className="text-[0.8rem] italic text-white/90">
            Federal Hill, Baltimore City, Maryland
          </p>
          <p>
            The Ruins is a site-specific stonework project located in Federal
            Hill, a short cannonball&apos;s shot from Baltimore&apos;s Inner
            Harbor.
          </p>
          <p>
            The project began with a single question from the client:{" "}
            <em>What do you see here?</em>
          </p>
          <p>
            What I saw was the remains of a colonial American-era munitions
            depot, dating to the War of 1812, a stray cannonball detonated the
            munitions, blowing the structure apart and leaving only fragments
            behind.
          </p>
          <p>
            In that vision, more than 200 years later, the current owners chose
            to preserve those imagined ruins and memorialize them. The space was
            completed with bluestone patios and walks, seating, a reflecting
            pool, and a rusting urn—elements meant to acknowledge time, loss,
            and endurance.
          </p>
          <p>
            Much of the stone used in the project is reclaimed granite salvaged
            from the streets of Baltimore City.
          </p>
          <p>
            <em>The Ruins</em> is a quiet acknowledgment of Baltimore&apos;s
            past, constructed in the present, and I am hoping it will leave
            many to wonder about its origins for centuries.
          </p>
          <p>
            If you are interested in a Ruin of your own, a purpose built party
            area that will have people talking for centuries,{" "}
            <a
              href="tel:+14437972166"
              className="underline decoration-white/60 underline-offset-2 hover:decoration-white"
            >
              call me
            </a>
            .
          </p>
        </div>
      </section>
      
      <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-black">
        <Image
          src="/Travis-G-20260204-A copy.jpg"
          alt="WildWorks - client property and landscape"
          fill
          className="object-contain object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden />
      </section>

      {/* I sell people's homes. Period. */}
      <section className="bg-black px-6 py-12 text-white">
        <div
          className="space-y-5 text-left text-[0.8rem] leading-relaxed"
          style={{ fontFamily: "var(--font-serif), serif" }}
        >
          <h2 className="text-[1.15rem] font-bold">
            I sell people&apos;s homes.
            <br />
            Period.
          </h2>
          <p>
            I don&apos;t work in real estate, or stage houses. But over the
            years—now more than forty of them—I&apos;ve lost count of how many
            clients have said the exact same thing to me: &quot;G—You sold our
            house.&quot;
          </p>
          <div className="flex align-center justify-center">
            <Link
              href="/pages/I-sell"
              className=" rounded-2xl bg-white px-8 py-4 font-medium transition-opacity hover:opacity-90"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif", backgroundColor: "white", color: "#555", borderRadius: "10px", padding: "12px 15px" }}
            >
              Click Here To See Why
            </Link>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-black">
        <Image
          src="/Fireplace.jpg"
          alt="Stone fireplace with classic ironworks and re-purposed wood from a fallen down barn"
          fill
          className="object-contain object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden />
      </section>

      {/* Fireplace caption */}
      <section className="bg-black px-6 py-8 text-white">
        <p
          className="text-center text-[0.8rem] text-white/90"
          style={{ fontFamily: "var(--font-serif), serif" }}
        >
          Stone Fireplace with Classic Ironworks and re-Purposed Wood from a
          Fallen Down Barn
        </p>
      </section>

      {/* Video section - local video to avoid embed timeouts */}
      <section className="bg-black px-6 py-12">
        <div className="w-full">
          <div className="relative aspect-video w-full overflow-hidden bg-black">
            <video
              className="h-full w-full object-contain"
              controls
              playsInline
              preload="metadata"
              poster="/hero-wildworks.jpg"
            >
              <source src="/WildWorksVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Exquisite Art / WildWorks CTA */}
      <section className="bg-black px-6 py-16 text-center text-white">
        <div
          className="space-y-4"
          style={{ fontFamily: "var(--font-serif), serif" }}
        >
          <p className="text-[0.8rem]">Exquisite Art</p>
          <p className="text-[0.8rem] font-bold">
            Unequaled Practicality & Craftsmanship
          </p>
          <h2 className="py-2 text-[1.15rem] font-bold" style={{ fontFamily: "var(--font-script), serif" }}>
            WildWorks
          </h2>
          <p className="text-[0.8rem] text-white/95">
            A Complete Design/Build Global Co.
          </p>
          <a
            href="tel:+14437972166"
            className="inline-block py-4 text-[1.2rem] font-bold underline decoration-white/50 underline-offset-4 transition-colors hover:decoration-white"
          >
            1+443-797-2166
          </a>
          <p className="text-[1.2rem] font-bold">Call or Text Today!</p>
          <p className="pt-12 text-[1.2rem] font-bold">G.</p>
        </div>
      </section>
    </div>
  );
}
