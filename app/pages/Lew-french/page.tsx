import Image from "next/image";
import InspirationGallery from "../../components/InspirationGallery";

export default function LewFrench() {
    return (
        <div className="mx-auto w-full max-w-5xl py-12">
            <InspirationGallery />

            <section className="bg-black px-6 py-12 text-white">
                <h2 className="text-[1.15rem] font-bold text-center">Inspiration: Lew French</h2>
            </section>

            <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-black px-6">
                <Image
                src="/LewFrenchInspiration-2.png"
                alt="WildWorks - Stone staircase and pathway leading to a rustic house with natural landscaping"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 64rem) 100vw, 64rem"
                />
            </section>

            <section className="bg-black px-6 py-12 text-white">
                <div className="space-y-6 text-left text-[0.8rem] leading-relaxed"
                style={{ fontFamily: "var(--font-serif), serif" }}>
                    <h2 className="text-[1.15rem] font-bold">
                        Inspiration: Lew French
                    </h2>
                    <p>
                        Project Wildfire draws direct inspiration from the work of master
                        stone craftsman <strong>Lew French</strong> of{" "}
                        <a
                        href="https://lewfrenchstone.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-white/60 underline-offset-2 hover:decoration-white"
                        >
                        LewFrenchStone.com
                        </a>
                        .
                    </p>
                    <p>
                        Lew French is a true artist of natural stone. His eye for
                        proportion, balance, texture, and flow is extraordinary. I hold his
                        work in the highest regard.
                    </p>
                    <p>
                        Lew’s work didn’t just influence the design—to be perfectly honest, it sold this project. 
                        By showing one client after another for quite a few years Lew's work, finally a client I had done 2 pretty large scale projects for in the last dozen years needed .
                        Actually his wife said, "Why don't you have G. build you a fireplace?"
                    </p>
                    <p>
                        make this project possible. After pursuing a large-scale custom outdoor stone fireplace build of this nature for a number of years, 
                        it was the clarity and strength of his stonework that helped a client finally say yes. His work made the vision tangible.
                    </p>
                    <h2 className="text-[1.15rem] font-bold">
                        From Concept to Stone
                    </h2>
                    <p>
                        Project Wildfire began as a simple, hand-drawn sketch. After purchasing the stone, but before construction began, 
                        the design evolved through several iterations, shaped by the material itself.
                    </p>
                    <p>
                        Sourcing the stone was a significant part of the process. Each piece selected for this custom natural stone fireplace is one-of-a-kind, 
                        chosen individually for character, color, shape, and how it would work within the whole. Locating stone of this quality takes time, experience, and judgment, and material of this caliber is never inexpensive. 
                        The stone ultimately dictates the final form, and the design must respond.
                    </p>
                    <p>
                        The sketches shown here reflect that progression—from initial concept
                        to refined design informed by the actual stone used in the build.
                    </p>
                    <p>
                        Project Wildfire is an original, hand-built outdoor fireplace currently under construction in Lutherville, Maryland. It is not a replica, 
                        but a custom stonework project executed in my own voice, 
                        informed by decades of experience—while openly acknowledging the influence of a craftsman whose work continues to inspire.
                    </p>
                    <p>
                        As Isaac Newton wrote, 
                        “If I have seen further, it is by standing on the shoulders of giants.”
                    </p>
                    <p>
                        I currently stand on the shoulders of a giant.
                    </p>
                </div>
            </section>

            <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-black px-6 mt-8">
                <Image
                src="/McNulty-Sketch-Cr.jpg"
                alt="WildWorks - Stone staircase and pathway leading to a rustic house with natural landscaping"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 64rem) 100vw, 64rem"
                />
            </section>
            <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-black px-6 mt-8">
                <Image
                src="/McNultyDesign-2.png"
                alt="WildWorks - Stone staircase and pathway leading to a rustic house with natural landscaping"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 64rem) 100vw, 64rem"
                />
            </section>
            <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-black px-6 mt-8">
                <Image
                src="/20260103_204542-2-high.png"
                alt="WildWorks - Stone staircase and pathway leading to a rustic house with natural landscaping"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 64rem) 100vw, 64rem"
                />
            </section>
            <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-black px-6 mt-8">
                <Image
                src="/20251222_082817-1-2-high.png"
                alt="WildWorks - Stone staircase and pathway leading to a rustic house with natural landscaping"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 64rem) 100vw, 64rem"
                />
            </section>
            
        </div>
    )
}