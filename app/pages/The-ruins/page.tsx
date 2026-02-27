import Image from "next/image";


export default function TheRuins() {
    return (
        <div className="mx-auto w-full max-w-5xl py-12">
            {/* First image: same width as header separator line (like who-is-g) */}
            
            <section className="relative flex min-h-[110vh] max-w-4xl mx-auto items-center justify-center overflow-hidden bg-black">
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

            <section className="bg-black px-6 py-8 text-white mx-auto max-w-5xl" style={{ fontFamily: "var(--font-serif), serif" }}>
                <h1 className="text-5xl font-bold mb-6 text-center">The Ruins</h1>
                <p className="text-[0.8rem] text-white/90 mb-8">Federal Hill, Baltimore City, Maryland</p>
                <div className="space-y-4 text-sm">
                    <p>My client asked me, &quot;What do you see here?&quot;</p>
                    <p>
                        I stood there looking at a back yard garden—flowers, mulch, a gravel walk, and a wooden bench … but it didn&apos;t have a story yet.
                    </p>
                    <p>
                        Federal Hill is a high ground overlook of Baltimore&apos;s harbor—important early, and absolutely relevant in the War of 1812, when it served as a military observation post, signal station, and a gun battery looking out over Baltimore&apos;s inner harbor.
                    </p>
                    <p>
                        So when my client asked that question, my mind didn&apos;t stay in &quot;landscaping mode.&quot; It went straight to: what could have happened here?
                    </p>
                    <p>
                        We&apos;d already done a couple projects together in the years prior, so I knew something important: these clients were open to the unconventional. Open to &quot;cool,&quot; as long as it made sense and was executed well. That&apos;s why I didn&apos;t rush it. I spent a couple weeks thinking—pencil and paper, pacing, sitting in the space, staring at it from different angles—because I knew if I could come up with the right idea, they&apos;d let me build it.
                    </p>
                </div>
            </section>

            <section className="bg-black px-6 py-4 text-white mx-auto max-w-5xl" style={{ fontFamily: "var(--font-serif), serif" }}>
                <h2 className="text-[1.15rem] font-bold mb-6">What I saw</h2>
                <div className="space-y-4 text-sm">
                    <p>
                        In my mind, the &quot;backstory&quot; was this: 
                    </p>
                    <p>
                        A stone munitions structure—a small depot or powder store connected to harbor defense—stood on this ground back in that era. Then a stray cannonball during the actual War of 1812 found it—Boom! What remained were the wall pieces that we see today.
                    </p>
                    <p>
                    </p>
                    <p>
                        And then—more than 200 years later—the present-day owners didn&apos;t &quot;clean it up.&quot; In the story, they preserved The Ruins and memorialized them by building gardens and a reflecting pool, etc., around them.
                    </p>
                </div>
            </section>

            <section className="bg-black px-6 pt-8 text-white mx-auto max-w-5xl" style={{ fontFamily: "var(--font-serif), serif" }}>
                <h2 className="text-[1.15rem] font-bold mb-6">Building the Ruins</h2>
                <p className="text-[0.8rem] leading-relaxed mb-4">The finished space was built to feel intentional and lived-in, with:</p>
                <ul className="list-disc list-inside space-y-2 text-[0.8rem] leading-relaxed mb-6 pl-2">
                    <li>Bluestone patios and a walk</li>
                    <li>Seating placed where you&apos;d naturally stop</li>
                    <li>A reflecting pool</li>
                    <li>A rusting urn with overflowing water</li>
                    <li>And the ruin fragments themselves—set like remnants, not &quot;decor&quot;</li>
                </ul>
            </section>

            <section className="bg-black px-6 py-4 text-white mx-auto max-w-5xl" style={{ fontFamily: "var(--font-serif), serif" }}>
                <h2 className="text-[1.15rem] font-bold mb-6">This Stone has Baltimore in it</h2>
                <div className="space-y-6 text-[0.8rem] leading-relaxed">
                    <p>
                        A big part of what makes The Ruins feel believable is the material. Much of the stone used is reclaimed granite—the kind that actually spent a previous life of 150+ years as Baltimore street and curb stone.
                    </p>
                    <p>
                        As streets aged and construction techniques modernized, a lot of that old stone got ripped out, and much discarded into the city dump. Can you believe that? History dumped like trash.
                    </p>
                    <p>
                        A few local people had set some aside, which we found, salvaged, and built with, and hopefully this stone will live another 150+ years right here. Maybe 1,000!
                    </p>
                    <p>
                        That&apos;s why the finished work doesn&apos;t feel like &quot;new hardscape pretending to be old.&quot; It feels like it could have been there all along—like Baltimore coughed up one of its older layers and we set it down carefully in the present.
                    </p>
                </div>
            </section>

            <section className="bg-black px-6 py-8 text-white mx-auto max-w-5xl" style={{ fontFamily: "var(--font-serif), serif" }}>
                <h2 className="text-[1.15rem] font-bold mb-6">Why this works</h2>
                <div className="space-y-6 text-[0.8rem] leading-relaxed">
                    <p>
                        <em>The Ruins</em> isn&apos;t a replica and it isn&apos;t cosplay. It&apos;s <strong>plausible</strong>—a place that makes people ask questions.
                    </p>
                    <p>
                        My hope is that decades from now, even hundreds of years from now, people will still stand there looking at these ruins and say: &quot;What is this? Where did it come from? What happened here?&quot;
                    </p>
                </div>
                <hr className="mt-2 border-white/30" />
            </section>

            <section className="bg-black px-6 py-2 text-white mx-auto max-w-5xl" style={{ fontFamily: "var(--font-serif), serif" }}>
                <h2 className="text-[1.15rem] font-bold mb-6">If you want a Ruin of your own...</h2>
                <div className="space-y-6 text-[0.8rem] leading-relaxed">
                    <p>
                    That would serve in the real world as A Party Zone, A Quiet Morning Spot, A Zen Area, or a Fire and Whiskey Corner, whatever would be most useful to you, whatever we can imagine your own personal Ruins might be, Let&spos;s Talk, and throw around ideas.                     </p>
                    <p>I&apos;ll happily jump on a video call with you, wherever you are in the world, to talk ideas.</p>
                    <p>The “Ruin” concept can go a hundred directions, and it can be purpose-built to suit your life&apos;s needs. Your Ruin could be:</p>
                    <ul className="list-disc list-inside space-y-4 pl-2">
                        <li>
                            A <strong>farmhouse ruin</strong> that &quot;predates the neighborhood,&quot; where the broken base of an old chimney becomes a working wood-fire feature—fire pit or fireplace—surrounded by stone floors with intentionally fractured edges. What is it today? Outdoor Kitchen and Ultra Cool Party Zone.
                        </li>
                        <li>
                            <strong>Collapsed stone garden walls</strong> that become natural boulder seating, like the structure simply fell into place over time.
                        </li>
                        <li>
                            A <strong>gristmill ruin</strong> beside a stream or pond—water, stone, moss, worn thresholds—built to feel inevitable.
                        </li>
                        <li>
                            A ruin that&apos;s half gathering space, half sanctuary—something you&apos;ll use constantly, and that people will talk about forever.
                        </li>
                    </ul>
                    <p>
                        And yes: done right, this kind of work can dramatically increase the feel—and often the value—of a property, because it creates something buyers can&apos;t unsee.
                    </p>
                    <p>
                        If you&apos;ve got a space and you want to turn it into a place with a past,{" "}
                        <a href="tel:+14437972166" className="underline decoration-white/60 underline-offset-2 hover:decoration-white">call me</a>
                        . I&apos;d love to discuss ideas with you.
                    </p>
                </div>
                <p className="text-4xl mb-10 mt-6 text-center">
                    1+443.797.2166
                </p>
            </section>

             
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
        <p className="text-md text-white/90 pt-4 text-center">
            or DM Me on X or WhatsApp</p>
        </div>
    );
}