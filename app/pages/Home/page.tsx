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
        <div className="absolute inset-0 pointer-events-none" aria-hidden />
      </section>

      {/* Promotional / Contact CTA - black background, centered */}
      <section className="flex flex-col items-center justify-center gap-4 bg-black px-6 py-16 text-center text-white" >
        <p className="text-3xl text-white/95">On a Quest to Create Planet Earth&apos;s Ultimate Stone Artwork</p>
        <p className="text-2xl text-white/80 -mt-2">G. Dietz - Owner/Artist</p>

        <h2 className="py-2 text-5xl md:text-6xl tracking-wide mt-8" >
          WildWorks
        </h2>
        <p className="text-xl  mt-2">Fine Art and Practical Landscaping</p>

        <div className="space-y-1 pt-4 text-2xl md:text-2xl" >
          <p className="text-3xl md:text-4xl mt-12">Want Something Stunningly Wild</p>
          <p className="text-3xl md:text-4xl mt-12">That You Own</p>
          <p className="text-3xl md:text-4xl mt-12">At Your Home</p>
        </div>

        <p className="pt-6 mt-2 text-5xl md:text-6xl" >Call Now!</p>
        <p
          className="text-3xl md:text-4xl font-medium text-white hover:opacity-90 transition-opacity mt-8"
        >
          1+443-797-2166
        </p>
        <p className="text-3xl md:text-4xl font-medium text-white hover:opacity-90 transition-opacity mt-8">
        or wildworks@pm.me
        </p>

        <p className="pt-4 text-6xl tracking-widest mt-8" >G.</p>

        <p className="pt-8 text-2xl md:text-3xl  mt-8" >
          I WILL TRAVEL ANYWHERE IN THE WORLD TO DESIGN, BUILD, AND PROBLEM SOLVE FOR YOU
        </p>

        <div className="flex items-center justify-center gap-4 pt-6">
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
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#25D366] text-white transition-opacity hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
        <p className="text-xl text-white/80 pt-2" >
          DM Me on X or WhatsApp:
        </p>
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
        <div className="absolute inset-0 pointer-events-none" aria-hidden />
      </section>

      {/* Current project banner */}
      <section className="flex flex-col items-center justify-center gap-6 bg-black px-6 pt-2 text-center text-white" >
        <p className="text-md font-normal">
          The Tree of Life Natural Stone Patio with Creeping Perennial
          &quot;Leaves&quot;
        </p>
        <h2 className="text-4xl mt-8 mb-2">
          Our Current Project: Wildfire
        </h2>
      </section>

      <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-black">
        <Image
          src="/21.jpg"
          alt="WildWorks - Stone staircase and pathway leading to a rustic house with natural landscaping"
          fill
          className="object-cover object-center"
          priority
          sizes="90vw"
        />
        <div className="absolute inset-0  pointer-events-none" aria-hidden />
      </section>

      {/* Project Wildfire CTA */}
      <section className="bg-black px-6 pb-16 text-white text-center">
        <p
          className="mx-auto text-md leading-relaxed mb-10 mt-2"
          
        >
          Project Wildfire is a Natural Stone Outdoor Fireplace that we&apos;re Building RIGHT NOW
        </p>
        <Link
          href="/pages/Wildfire"
          className=" rounded-2xl bg-white px-8 py-4 font-medium transition-opacity hover:opacity-90"
          style={{ fontFamily: "var(--font-geist-sans), sans-serif", backgroundColor: "white", color: "#555", borderRadius: "10px", padding: "15px 15px" }}
        >
          Click Here To Check Out Project Wildfire
        </Link>
      </section>


        <section className="relative flex min-h-[100vh] w-full items-center justify-center overflow-hidden bg-black mt-8">
          <Image
          src="/LewFrenchInspiration-2.png"
          alt="WildWorks - Stone staircase and pathway leading to a rustic house with natural landscaping"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          />
        </section>

      {/* Inspiration: Lew French */}
      <section className="bg-black px-6 pt-8 pb-16 text-white">
        <div
          className="space-y-5 text-left text-[0.8rem] leading-relaxed"
          
        >
          <h2 className="text-4xl text-center">
            Inspiration: Lew French
          </h2>
          <p className="text-center text-md">
          Project Wildfire Draws Direct Inspiration from the Work of Master Stone Artisan <strong>Lew French</strong>
          </p>
          <div className="flex align-center justify-center">

            <Link
              href="/pages/Lew-french"
              className=" rounded-2xl bg-white px-8 py-4 font-medium transition-opacity hover:opacity-90"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif", backgroundColor: "white", color: "#555", borderRadius: "10px", padding: "12px 15px" }}
            >
              Click Here For Details
            </Link>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[100vh] w-full items-center justify-center overflow-hidden bg-black">
        <Image
          src="/Ruins-Website-20260127-A copy.jpg"
          alt="The Ruins - site-specific stonework in Federal Hill, Baltimore"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0  pointer-events-none" aria-hidden />
      </section>

      {/* The Ruins CTA */}
      <section className="bg-black px-6 pt-8 pb-8 text-white text-center" >
        <h2 className="text-4xl  mb-3">The Ruins</h2>
        <p className="text-md text-white/90 mt-8 mb-8">My Client asked me, as we stood looking at their bland back yard, “What do you see here?”</p>
        <Link
          href="/pages/The-ruins"
          className="inline-block rounded-xl bg-white px-8 py-4 text-[#555] font-medium transition-opacity hover:opacity-90"
          style={{ fontFamily: "var(--font-geist-sans), sans-serif", backgroundColor: "white", color: "#555", borderRadius: "10px", padding: "12px 15px" }}
          >
          Click Here to Find Out What I Saw
        </Link>
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
        <div className="absolute inset-0  pointer-events-none" aria-hidden />
      </section>

      {/* I sell people's homes. Period. */}
      <section className="bg-black px-6 py-16 text-white -mt-12">
        <div
          className="space-y-5 text-left text-[0.8rem] leading-relaxed"
          
        >
          <h2 className="text-3xl text-center ">
            My Work Sells People&apos;s Homes. Period.
          </h2>
          <p className="text-center">
            I&apos;ve lost count of how many clients have said the exact same thing to me: &quot;G—you sold our house.&quot;
          </p>
          <div className="flex align-center justify-center">
            <Link
              href="/pages/I-sell"
              className=" rounded-2xl bg-white px-8 py-4 font-medium transition-opacity hover:opacity-90 text-md"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif", backgroundColor: "white", color: "#555", borderRadius: "10px", padding: "12px 15px" }}
            >
              Click Here To See Why
            </Link>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[100vh] w-full items-center justify-center overflow-hidden bg-black">
        <Image
          src="/Fireplace.jpg"
          alt="Stone fireplace with classic ironworks and re-purposed wood from a fallen down barn"
          fill
          className="object-contain object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0  pointer-events-none" aria-hidden />
      </section>

      {/* Fireplace caption */}
      <section className="bg-black px-6 py-8 text-white">
        <p
          className="text-center text-[0.8rem] text-white/90"
          
        >
          Fireplace with Custom Ironworks and Wood Taken from a Colonial Era Fallen Down Barn
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
        <p className="text-center text-sm text-white/90 mt-8 mb-8">
          Drone Footage of a Project with Boulders, Rock Outcroppings, Boulder Steps, a Seat Wall, and a Mushroom Seat. Check it out!        </p>
      </section>

      {/* Exquisite Art / WildWorks CTA */}
      <section className="bg-black px-6 text-center text-white">
        <div
          className="space-y-4"
          
        >
          <p className="text-2xl">Exquisite Art</p>
          <p className="text-2xl ">
            Unequaled Practicality & Craftsmanship
          </p>
          <h2 className="py-8 text-5xl " >
            WildWorks
          </h2>
          <p className="text-2xl text-white/95">
            A Complete Design/Build Global Co.
          </p>
          <p
            className="no-underline inline-block py-4 text-3xl  decoration-white/50 underline-offset-4 transition-colors hover:decoration-white"
          >
            1+443-797-2166
          </p>
          <p className="text-3xl ">Call or Text Today!</p>
          <p className="pt-4 text-4xl ">G.</p>

          
        <div className="mt-10 flex justify-center gap-4">
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
        <p className="text-xl text-white/90 pt-4">
        or DM Me on X or WhatsApp</p>
        </div>
      </section>
    </div>
  );
}
