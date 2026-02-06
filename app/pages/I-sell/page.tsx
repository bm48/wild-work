import Image from "next/image";

export default function ISell() {
    return (
        <div className="mx-auto w-full max-w-5xl py-12">
            <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-black">
            <Image
                src="/Travis-G-20260204-A copy.jpg"
                alt="WildWorks - Stone staircase and pathway leading to a rustic house with natural landscaping"
                fill
                className="object-contain object-center"
                priority
                sizes="100vw"
                />
            </section>

            <section className="bg-black px-6 py-16 text-white" style={{ fontFamily: "var(--font-serif), serif" }}>
                <h1 className="text-[1.5rem] font-bold mb-10">
                    I sell people&apos;s homes.
                    <br />
                    Period.
                </h1>
                <div className="space-y-6 text-left text-[0.8rem] leading-relaxed">
                    <p>
                        I don&apos;t work in real estate, or stage houses. But over the years—now more than forty of them—I&apos;ve lost count of how many clients have said the exact same thing to me: &quot;G—You sold our house.&quot;
                    </p>
                    <p>
                        Last summer, I was standing in the front yard of a client&apos;s property after they had sold their home and called me to fix up their new one. The homeowner looked at me and he was absolutely glowing. I didn&apos;t ask him, and he didn&apos;t tell me, but I knew just by the look on his face that they had gotten quite a pleasing price for their old home. He said to me: &quot;You sold our house. It had to be you. You gave us the most beautiful things there!&quot; He also said to me, &quot;You&apos;re the best! You are absolutely the best there is. You&apos;re going to make our new house spectacular!&quot; This is the house that two 70 year olds with 20 grandkids are going to spend their golden years. They wanted <em>Spectacular</em>.
                    </p>
                    <p>
                        Another client told me the same thing after reading their realtor&apos;s report. The buyers specifically mentioned how much they loved the super artsy and wild patio and seat wall area. That outdoor space was the reason they fell in love with the home, and had to have it.
                    </p>
                    <p>
                        Another family, with two kids under three years old, wanted a practical back yard that was safe to walk and play on. Their backyard was an 80 year old mess of highs, lows, and mysterious holes. We reshaped and fine graded the entire space, and added a patio, fire pit, and walkways that made the yard usable. When we were finished, I said that I believed we had added at least the value of what they paid for the project back into their home. The husband agreed immediately. The wife quickly said, &quot;Oh my God—at least!&quot;
                    </p>
                    <p>
                        That kind of result doesn&apos;t happen by accident. It comes from fixing problems correctly—and at a fair price. The best part of all? You get to enjoy these things as long as you own your home.
                    </p>
                    <p>
                        I&apos;ve always been drawn to and charge into the hardest problems—the ones people live with for years because no one can quite figure them out. The spaces that never worked. The water issues no one could solve. I&apos;ve solved home and garden problems for clients who had been searching—sometimes for decades—for real solutions. Not workarounds. Not patches. Solutions that make sense, last, and actually improve people&apos;s quality of life.
                    </p>
                    <p>
                        At the end of the day, solving problems the right way creates real return on investment—sometimes in day-to-day livability, sometimes in resale value, and often in both. Whether you need a purely practical solution to something that isn&apos;t working, or you&apos;re looking for an exquisitely beautiful piece of art, my approach is the same: fair pricing, quality building, and work that pays you back. If you&apos;d like to talk it through, I&apos;m happy to drive to you or hop on a video call—whether you&apos;re not far away or halfway around the world—and help you figure out what will actually make the most sense for you and your home. Please feel free to{" "}
                        <a href="tel:+14437972166" className="underline decoration-white/60 underline-offset-2 hover:decoration-white">call anytime</a>
                        , I am a very approachable, always happy to talk.
                    </p>
                </div>
            </section>
        </div>
    )
}