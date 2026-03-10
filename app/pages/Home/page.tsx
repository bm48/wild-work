import Link from "next/link";
import Script from "next/script";
import AspectRatioImage from "../../components/AspectRatioImage";
import YouTubeVideoBlock from "../../components/YouTubeVideoBlock";

export default function Home() {
  return (
    <div className="mx-auto lg:max-w-5xl py-4">
      {/* Hero: image with overlaid text - full image visible */}
      <section className="relative flex w-full items-center justify-center overflow-hidden bg-black px-4 sm:px-6">
        <AspectRatioImage
          src="/hero-wildworks.jpg"
          alt="WildWorks - Stone staircase and pathway leading to a rustic house with natural landscaping"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 pointer-events-none" aria-hidden />
      </section>

      {/* Promotional / Contact CTA - black background, centered */}
      <section className="flex flex-col items-center justify-center gap-3 bg-black px-4 py-6 text-center text-white sm:gap-4 sm:px-6 sm:py-8" >
        <p className="text-xl text-white/95 sm:text-3xl">On a Quest to Create Planet Earth&apos;s Ultimate Stone Artwork</p>
        <p className="text-lg text-white/80 -mt-2 sm:text-2xl">Scott G. Dietz - Owner/Artist</p>

        <h2 className="pt-2 text-4xl tracking-wide mt-6 sm:mt-8 sm:text-5xl md:text-6xl" >
          WildWorks
        </h2>

        <div className="space-y-1 pt-2 sm:pt-4 -mt-5 sm:mt-0 " >
          <p className="text-lg mt-3 sm:text-xl md:2xl">Fine Art and Practical Landscaping</p>
          <p className="text-xl mt-3 sm:mt-9 sm:text-2xl md:text-3xl">Want Something Stunningly Wild</p>
          <p className="text-2xl mt-3 sm:mt-9 sm:text-3xl md:text-4xl">In Your Back Yard This Season?</p>
        </div>

        <p className="pt-4 mt-2 text-4xl sm:pt-6 sm:text-5xl md:text-6xl" >Call Now!</p>
        <a
          href="tel:+14437972166"
          className="text-2xl font-medium text-white hover:opacity-90 transition-opacity mt-1 inline-block min-h-[44px] sm:mt-8 sm:text-4xl md:text-5xl"
        >
          1+443-797-2166
        </a>
        <a
          href="mailto:Wildworks@pm.me"
          className="text-2xl font-medium text-white hover:opacity-90 transition-opacity -mt-2 inline-block min-h-[44px] sm:mt-8 sm:text-3xl md:text-4xl"
        >
          or Wildworks@pm.me
        </a>

        <p className="text-5xl tracking-widest -mt-2 sm:mt-8 sm:text-6xl" >Scott</p>

        <p className="text-lg mt-6 sm:mt-8 sm:text-2xl md:text-3xl" >
          I WILL TRAVEL ANYWHERE IN THE WORLD TO DESIGN, BUILD, AND PROBLEM SOLVE FOR YOU
        </p>

        <div className="flex items-center justify-center gap-4 pt-4 sm:pt-6">
          <a
            href="https://x.com/OfficialSGDietz"
            aria-label="X (Twitter)"
            className="flex h-15 w-15 items-center justify-center text-[#FFFFFF] transition-opacity hover:opacity-80"
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
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#25D366] text-white transition-opacity hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
        <p className="pt-2 text-base text-white/80 sm:text-xl" >
          DM Me on X or WhatsApp
        </p>
      </section>

      <section className="relative flex w-full items-center justify-center overflow-hidden bg-black px-4 sm:px-6">
        <AspectRatioImage
          src="/20260121-TreeofLife-Branded-A copy.jpg"
          alt="Tree of Life - A tree with a human face and a tree with a dragon face"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 pointer-events-none" aria-hidden />
      </section>

      {/* Current project banner */}
      <section className="flex flex-col items-center justify-center bg-black px-4 pt-5 text-center text-white sm:gap-4 sm:px-6" >
        <p className="text-sm font-normal sm:text-base">
          The Tree of Life Natural Stone Patio with Creeping Perennial
          &quot;Leaves&quot;
        </p>
        <h2 className="text-2xl mt-2 mb-6 sm:text-4xl">
          Our Current Project: Wildfire
        </h2>
      </section>

      <section className="relative flex w-full items-center justify-center overflow-hidden bg-black px-4 sm:px-6">
        <AspectRatioImage
          src="/25.jpg"
          alt="WildWorks - Stone staircase and pathway leading to a rustic house with natural landscaping"
          priority
          sizes="90vw"
        />
        <div className="absolute inset-0  pointer-events-none" aria-hidden />
      </section>

      {/* Project Wildfire CTA */}
      <section className="bg-black px-4 pb-10 text-center text-white sm:px-6 sm:pb-14">
        <p className="mx-auto mb-4 mt-5 text-sm leading-relaxed sm:mb-6 sm:text-base">
          Project Wildfire is a Natural Stone Outdoor Fireplace that we&apos;re Building RIGHT NOW
        </p>
        <Link
          href="/pages/Wildfire"
          className="inline-flex min-h-[44px] items-center justify-center rounded-2xl bg-white px-2 py-1 font-medium transition-opacity hover:opacity-90 sm:px-6 sm:py-2"
          style={{ fontFamily: "var(--font-geist-sans), sans-serif", backgroundColor: "white", color: "#888", borderRadius: "10px" }}
        >
          Click Here To Check Out Project Wildfire
        </Link>
      </section>


        <section className="relative flex w-full items-center justify-center overflow-hidden bg-black px-4 sm:px-6">
          <AspectRatioImage
          src="/LewFrenchInspiration-2.png"
          alt="WildWorks - Stone staircase and pathway leading to a rustic house with natural landscaping"
          priority
          sizes="100vw"
          />
        </section>

      {/* Inspiration: Lew French */}
      <section className="bg-black px-4 pt-2 pb-8 sm:pb-10 text-white sm:px-6 sm:pt-8 sm:pb-14">
        <div className="space-y-2 text-left text-sm leading-relaxed sm:space-y-5">
          <h2 className="text-2xl text-center sm:text-4xl">
            Inspiration: Lew French
          </h2>
          <p className="text-center mb-4 text-sm sm:text-base">
          Project Wildfire Draws Direct Inspiration from the Work of Master Stone Artisan <strong>Lew French</strong>
          </p>
          <div className="flex align-center justify-center">
            <Link
              href="/pages/Inspiration"
              className="inline-flex min-h-[44px] items-center justify-center rounded-2xl bg-white px-4 py-1 font-medium 
              transition-opacity hover:opacity-90 sm:px-6 sm:py-2"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "1rem", backgroundColor: "white", color: "#888", borderRadius: "10px" }}
            >
              Click Here For Details
            </Link>
          </div>
        </div>
      </section>

      <section className="relative flex w-full items-center justify-center overflow-hidden bg-black px-4 sm:px-6">
        <AspectRatioImage
          src="/Ruins-Website-20260127-A copy.jpg"
          alt="The Ruins - site-specific stonework in Federal Hill, Baltimore"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0  pointer-events-none" aria-hidden />
      </section>

      {/* The Ruins CTA */}
      <section className="bg-black px-6 pt-2 sm:pt-8 pb-8 sm:pb-14 text-white text-center" >
        <h2 className="text-2xl sm:text-4xl  mb-2">The Ruins</h2>
        <p className="text-md text-white/90 mt-2 sm:mt-4 mb-4">My Client asked me, as we stood looking at their bland back yard, “What do you see here?”</p>
        <Link
          href="/pages/The-ruins"
          className="inline-block rounded-xl bg-white px-8 py-2 text-[#888] font-medium transition-opacity hover:opacity-90"
          style={{ fontFamily: "var(--font-geist-sans), sans-serif", backgroundColor: "white", color: "#888", borderRadius: "10px", padding: "12px 15px" }}
          >
          Click Here to Find Out What I Saw
        </Link>
      </section>
      
      <section className="relative flex w-full items-center justify-center overflow-hidden bg-black px-4 sm:px-6">
        <AspectRatioImage
          src="/Travis-G-20260204-A copy.jpg"
          alt="WildWorks - client property and landscape"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0  pointer-events-none" aria-hidden />
      </section>

      {/* I sell people's homes. Period. */}
      <section className="bg-black px-4 text-white pb-8 sm:pb-14 sm:-mt-12 sm:px-6 sm:pt-16">
        <div className="space-y-4 text-left leading-relaxed sm:space-y-5">
          <h2 className="text-2xl text-center sm:text-3xl mt-3">
            My Work Sells People&apos;s Homes. Period.
          </h2>
          <p className="text-center text-sm sm:text-base">
            I&apos;ve lost count of how many clients have said the exact same thing to me: &quot;Scott—you sold our house.&quot;
          </p>
          <div className="flex align-center justify-center">
            <Link
              href="/pages/I-sell"
              className="inline-flex min-h-[44px] items-center justify-center rounded-2xl 
                    bg-white px-6 font-medium transition-opacity hover:opacity-90 text-sm sm:px-6 sm:py-2 sm:text-base"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif", backgroundColor: "white", color: "#888", borderRadius: "10px" }}
            >
              Click Here To See How
            </Link>
          </div>
        </div>
      </section>

      <section className="relative flex md:w-[60%] mx-auto items-center justify-center overflow-hidden bg-black px-4 sm:px-6">
        <AspectRatioImage
          src="/Fireplace.jpg"
          alt="Stone fireplace with classic ironworks and re-purposed wood from a fallen down barn"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0  pointer-events-none" aria-hidden />
      </section>

      {/* Fireplace caption */}
      <section className="bg-black px-4 py-6 text-white sm:px-6 sm:py-8">
        <p className="text-center text-white/90">
          Fireplace with Custom Ironworks and Wood Taken from a Colonial Era Fallen Down Barn
        </p>
      </section>

      {/* Video section - YouTube embed with Copy link & Watch on YouTube */}
      {/* <YouTubeVideoBlock /> */}

      {/* Twitter embed */}
      <section className="bg-black px-4 pb-8 text-center text-white sm:px-6">
        <div className="mx-auto flex max-w-2xl justify-center [&_.twitter-tweet]:mx-auto">
          <blockquote
            className="twitter-tweet"
            dangerouslySetInnerHTML={{
              __html: `<p lang="en" dir="ltr">Most People Never See Stonework Like This.<br><br>Drone footage of a handcrafted natural stone terrace, super steps, a seat wall with boulder bookends, and boulder outcroppings.<br><br>When the lush foliage grows in and around this landscape, it's built to look like it's been part of the… <a href="https://t.co/NPQRR59Eyj">pic.twitter.com/NPQRR59Eyj</a></p>&mdash; WildWorks (@OfficialSGDietz) <a href="https://twitter.com/OfficialSGDietz/status/2030296263833313522?ref_src=twsrc%5Etfw">March 7, 2026</a>`,
            }}
          />
        </div>
        <Script
          src="https://platform.twitter.com/widgets.js"
          strategy="lazyOnload"
        />
      </section>

      {/* Exquisite Art / WildWorks CTA */}
      <section className="bg-black px-4 py-8 text-center text-white sm:px-6">
        <div className="space-y-3 sm:space-y-4">
          <p className="text-2xl sm:text-3xl">Exquisite Art</p>
          <p className="text-2xl sm:text-3xl">
            Unequaled Practicality & Craftsmanship
          </p>
          <h2 className="py-6 text-5xl sm:py-8 sm:text-6xl" >
            WildWorks
          </h2>
          <p className="text-2xl text-white/95 sm:text-3xl">
            A Complete Design/Build Global Co.
          </p>
          <a
            href="tel:+14437972166"
            className="no-underline inline-block min-h-[44px] py-4 text-3xl decoration-white/50 underline-offset-4 transition-colors hover:decoration-white sm:text-4xl"
          >
            1+443-797-2166
          </a>
          <p className="text-3xl sm:text-4xl">Call or Text Today!</p>
          <p className="pt-6 text-5xl sm:text-6xl">Scott</p>

        <div className="mt-10 flex justify-center items-center gap-4 sm:mt-14">
          <a
            href="https://x.com/OfficialSGDietz"
            aria-label="X (Twitter)"
            className="flex h-15 w-15 items-center justify-center text-[#FFFFFF] transition-opacity hover:opacity-80"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
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
              className="h-6 w-6"
              fill="currentColor"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
        <p className="pt-4 text-base text-white/90 sm:text-xl">
         DM Me on X or WhatsApp</p>
        </div>
      </section>
    </div>
  );
}
