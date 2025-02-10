import Image from "next/image";
import { HighlightedSection } from "@/components/highlighted-section/highlighted-section";
import { GradientInput } from "@/components/gradient-input/gradient-input";
import { Button } from "@/components/button/button";

export function ContactSection() {
  return (
    <HighlightedSection className="lg:flex ">
      <div className="h-48 lg:w-2/5 relative lg:h-[unset]">
        <Image
          src="/images/landing-page/shape-3.png"
          alt="Abstract shape"
          height={589}
          width={589}
          className="h-[220%] absolute left-2/4 -bottom-32 -translate-x-2/4 object-contain lg:bottom-[unset] lg:top-2/4 lg:-translate-y-2/4 lg:h-[unset] lg:w-full"
        />
      </div>
      <div className="flex flex-col gap-y-10 p-12 grow lg:p-0 lg:py-[9.63rem]">
        <h2 className="text-h2 text-center lg:text-start lg:max-w-[36rem]">
          Get exponential reach via{" "}
          <span className="font-bold">AI Marketing</span>
        </h2>
        <form className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-[0.88rem] lg:flex-wrap lg:gap-y-4">
          <GradientInput
            placeholder="Enter your work email"
            className="lg:w-full lg:max-w-[25rem]"
          />
          <Button variant="cta-lg" className="bg-black w-full lg:w-fit">
            <span>Get in touch</span>
            <Image
              src="/icons/arrow-right.svg"
              alt="Arrow right"
              width={19}
              height={19}
              className="h-[1.2rem] w-[1.2rem]"
            />
          </Button>
        </form>
      </div>
    </HighlightedSection>
  );
}
