import Image from "next/image";
import { ContentCenter } from "@/components/content-center/content-center";
import { logos } from "./logos";

export function LogosGrid() {
  return (
    <ContentCenter>
      <div className="flex flex-col gap-y-[3.31rem] lg:gap-y-[5.17rem]">
        {/* Phone, tablet */}
        <ul className="flex flex-col gap-y-[3.31rem] lg:hidden">
          <div className="flex justify-between items-center">
            <li>
              <Image
                src={logos.airtel.src}
                alt={logos.airtel.alt}
                height={logos.airtel.height}
                width={logos.airtel.width}
                className="w-[2.92rem]"
              />
            </li>
            <li>
              <Image
                src={logos.uba.src}
                alt={logos.uba.alt}
                height={logos.uba.height}
                width={logos.uba.width}
                className="w-[5.48rem]"
              />
            </li>
            <li>
              <Image
                src={logos.linux.src}
                alt={logos.linux.alt}
                height={logos.linux.height}
                width={logos.linux.width}
                className="w-[1.55rem]"
              />
            </li>
            <li className="hidden sm:block">
              <Image
                src={logos.mtn.src}
                alt={logos.mtn.alt}
                height={logos.mtn.height}
                width={logos.mtn.width}
                className="w-16"
              />
            </li>
            <li className="hidden md:block">
              <Image
                src={logos.dangote.src}
                alt={logos.dangote.alt}
                height={logos.dangote.height}
                width={logos.dangote.width}
                className="w-16"
              />
            </li>
          </div>
          <div className="flex justify-between items-center">
            <li>
              <Image
                src={logos.zoom.src}
                alt={logos.zoom.alt}
                height={logos.zoom.height}
                width={logos.zoom.width}
                className="w-[8.15rem]"
              />
            </li>
            <li>
              <Image
                src={logos.creativeCloud.src}
                alt={logos.creativeCloud.alt}
                height={logos.creativeCloud.height}
                width={logos.creativeCloud.width}
                className="w-[2.49rem]"
              />
            </li>
            <li>
              <Image
                src={logos.ebay.src}
                alt={logos.ebay.alt}
                height={logos.ebay.height}
                width={logos.ebay.width}
                className="w-[4.57rem]"
              />
            </li>
            <li className="hidden sm:block">
              <Image
                src={logos.cocacola.src}
                alt={logos.cocacola.alt}
                height={logos.cocacola.height}
                width={logos.cocacola.width}
                className="w-24"
              />
            </li>
            <li className="hidden md:block">
              <Image
                src={logos.netflix.src}
                alt={logos.netflix.alt}
                height={logos.netflix.height}
                width={logos.netflix.width}
                className="w-24"
              />
            </li>
          </div>
        </ul>
        <ul className="hidden flex-col gap-y-[2.94rem] lg:flex">
          <div className="flex justify-between items-center">
            {Object.values(logos)
              .slice(0, 6)
              .map((logo) => (
                <li key={logo.src}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    height={logo.height}
                    width={logo.width}
                  />
                </li>
              ))}
          </div>
          <div className="flex justify-between items-center">
            {Object.values(logos)
              .slice(6, 13)
              .map((logo) => (
                <li key={logo.src}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    height={logo.height}
                    width={logo.width}
                  />
                </li>
              ))}
          </div>
          <div className="flex justify-between items-center">
            {Object.values(logos)
              .slice(13, 20)
              .map((logo) => (
                <li key={logo.src}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    height={logo.height}
                    width={logo.width}
                  />
                </li>
              ))}
          </div>
        </ul>
        <p className="text-center max-w-[16.187rem] self-center text-body-lg sm:max-w-none">
          Trusted by the world’s most ambitious teams.
        </p>
      </div>
    </ContentCenter>
  );
}
