import ImageGallery from "../../components/ImageGallery";

export default function Wildfire() {

    return (
        <div className="mx-auto w-full max-w-5xl py-12">
            <section className="bg-black px-6 text-white">
                <h1 className="text-[1.5rem] font-bold text-center">Project Wildfire</h1>
            </section>

            <ImageGallery />
            {/* Project Wildfire description */}
            <section className="bg-black px-6 py-12 text-white">
                <div
                className="space-y-6 text-left text-[0.8rem] leading-relaxed"
                style={{ fontFamily: "var(--font-serif), serif" }}
                >
                <p>
                    Project Wildfire is a custom craft, natural stone outdoor fireplace
                    installation in Lutherville, Maryland, currently under construction
                    by our team at Wildworks.
                </p>
                <p>
                    Built entirely by hand—literally one stone at a time—this project
                    blends old-world stone craftsmanship with modern scale and design.
                    Our work was inspired by{" "}
                    <a
                    href="/pages/who-is-g"
                    className="underline decoration-white/60 underline-offset-2 hover:decoration-white"
                    >
                    Lew French
                    </a>{" "}
                    (more detail on that below).
                </p>
                <p>
                    After more than 40 years in construction, these are the builds I
                    fondly pursue: the most difficult, the most challenging—custom
                    natural stonework projects that demand experience, judgment, and the
                    highest level of problem-solving.
                </p>
                <p>
                    Project Wildfire is a work in progress that I&apos;m fully
                    documenting on{" "}
                    <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/60 underline-offset-2 hover:decoration-white"
                    >
                    X (formerly Twitter)
                    </a>
                    . If you&apos;d like to see the behind-the-scenes process of building
                    a large-scale custom outdoor fireplace and stack,{" "}
                    <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/60 underline-offset-2 hover:decoration-white"
                    >
                    come over and say &quot;hello&quot;
                    </a>
                </p>
                </div>
            </section>
        </div>
    )
}