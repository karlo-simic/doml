import Image from "next/image";
import { Line } from "@/components/line/line";
import { Button } from "@/components/button/button";
import { ContentCenter } from "@/components/content-center/content-center";
import { cn } from "@/lib/utils/cn";

interface InfoSectionProps {
  imageSrc: string;
  imageAlt: string;
  heading1: React.ReactNode;
  heading2: React.ReactNode;
  text: React.ReactNode;
  buttonText: React.ReactNode;
  imageSide?: "left" | "right";
}

export function InfoSection({
  imageSrc,
  imageAlt,
  heading1,
  heading2,
  text,
  buttonText,
  imageSide = "right",
}: InfoSectionProps) {
  return (
    <section>
      <ContentCenter className="sm:grid sm:grid-cols-2">
        <div
          className={cn(
            "flex justify-center",
            imageSide === "right" && "order-2",
          )}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={540}
            height={540}
            className="object-contain sm:w-full"
          />
        </div>
        <div
          className={cn(
            "flex flex-col items-center gap-y-[0.38rem] sm:gap-y-[1.44rem] sm:items-start",
            imageSide === "right" && "order-1",
          )}
        >
          <hgroup>
            <h3 className="text-h2 font-serif bg-gradient-1 bg-clip-text [-webkit-text-fill-color:transparent] text-center -pb-[0.63rem] sm:text-h3 sm:text-left">
              {heading1}
            </h3>
            <h3 className="text-center text-h2 sm:text-h3 pb-[0.63rem] sm:text-left">
              {heading2}
            </h3>
          </hgroup>
          <p className="text-body text-center leading-[196.9%] p-[0.63rem] max-w-[20.25rem] sm:text-body-lg sm:text-left sm:max-w-[33.875rem]">
            {text}
          </p>
          <div className="p-[0.63rem] max-w-[16.375rem] sm:max-w-none sm:w-full">
            <Line className="w-full" />
          </div>
          <Button variant="cta-md" className="w-full sm:w-fit">
            <span>{buttonText}</span>
            <Image
              src="/icons/arrow-right.svg"
              alt="Arrow right"
              width={19}
              height={19}
              className="h-[1.2rem] w-[1.2rem]"
            />
          </Button>
        </div>
      </ContentCenter>
    </section>
  );
}
