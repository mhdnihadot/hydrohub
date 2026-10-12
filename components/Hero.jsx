import Image from "next/image";
import EnquireButton from "./EnquireButton";
import HeroFactCard from "./HeroFactCard";
import Link from "next/link";
import Container from "./Container";
import { Reveal, TextReveal } from "./motion";

export default function Hero() {
  return (
    <section id="top" className="pt-[80px] sm:pt-[88px]">
      <Container>
        <div className="relative isolate flex min-h-[600px] flex-col justify-end overflow-hidden rounded-3xl bg-navy-deep px-5 pb-6 pt-24 sm:min-h-[640px] sm:px-10 sm:pb-10 lg:min-h-[660px] lg:px-14 lg:pb-14">
          {/* Photo + water-blue grading */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/hero.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 1248px) 100vw, 1200px"
              className="hero-zoom object-cover object-[65%_center] sm:object-center"
            />
            {/* single scrim for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/85 via-navy-deep/40 to-navy-deep/5" />
          </div>

          <div className="grid w-full grid-cols-1 items-end gap-8 lg:grid-cols-12">
            {/* Copy */}
            <div className="flex flex-col items-start lg:col-span-7">
              <TextReveal
                as="h1"
                lines={["It all starts", "with *water*"]}
                accentClass="text-aqua"
                delay={250}
                step={90}
                className="text-[40px] font-semibold leading-[1.04] tracking-[-0.025em] text-white sm:text-6xl lg:text-[68px]"
              />

              <Reveal delay={700}>
                <p className="mt-5 max-w-md text-[15px] font-medium leading-relaxed text-white/90 sm:text-base">
                  <span className="font-semibold text-white">Water filter products, manufactured for leading OEM brands.</span>{" "}
                  Researched, engineered and built at scale in our own factory, ready to carry your name.
                </p>
              </Reveal>

              <Reveal delay={850} className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
                <EnquireButton className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-sky">
                  Enquire now
                </EnquireButton>
                <Link
                  href="/#process"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/40 bg-navy-deep/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep/60"
                >
                  How we work
                </Link>
              </Reveal>
            </div>

            {/* Key facts card */}
            <div className="hidden sm:flex lg:col-span-5 lg:justify-end">
              <Reveal variant="right" delay={500} className="w-full max-w-[300px]">
                <HeroFactCard />
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
