import Image from "next/image";
import { ContentCenter } from "@/components/content-center/content-center";
import { Line } from "@/components/line/line";
import { Button } from "@/components/button/button";

export function HeroSection() {
  return (
    <section className="md:py-20">
      <ContentCenter className="md:grid md:grid-cols-2 items-center flex flex-col-reverse gap-y-[1.12rem]">
        <div className="flex flex-col gap-y-[1.12rem] md:gap-y-[3.12rem] md:items-start items-center">
          <hgroup>
            <h1 className="text-h1 font-serif bg-gradient-1 bg-clip-text [-webkit-text-fill-color:transparent] text-center md:text-start">
              AI Marketing.
            </h1>
            <h1 className="text-h1 font-serif md:text-start text-center min-[1024px]:-mt-4">
              Optimized Reach.
            </h1>
          </hgroup>
          <p className="text-subtitle text-center md:text-start max-w-[20.25rem] md:max-w-none">
            Our vision is to revolutionize the way brands and advertisers
            target, reach
          </p>
          <Line className="w-[16.375rem] md:w-full" />
          <Button variant="cta-lg" className="w-full md:w-fit">
            Get Started
            <Image
              src="/icons/arrow-right.svg"
              alt="Arrow right"
              width={19}
              height={19}
              className="h-[1.2rem] w-[1.2rem]"
            />
          </Button>
        </div>
        <div className="flex justify-center items-center w-9/12 md:w-full">
          <Image
            src="/images/landing-page/planet.png"
            alt="Blue colored planet earth with lines representing connections"
            width={506}
            height={493}
            className="w-full max-w-96 md:max-w-none md:w-10/12"
          />
        </div>
      </ContentCenter>
    </section>
  );
}
