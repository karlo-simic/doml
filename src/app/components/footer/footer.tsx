import { Line } from "@/components/line/line";
import { ContentCenter } from "@/components/content-center/content-center";

export function Footer() {
  return (
    <ContentCenter>
      <footer className="flex flex-col gap-y-[1.88rem] md:gap-y-2">
        <Line />
        <div className="text-body-sm flex flex-col gap-y-[1.88rem] items-center md:flex-row md:justify-between">
          <p>
            Copyright © {new Date().getFullYear()} DOML. All rights reserved.
          </p>
          <p>Terms of Use & Privacy Policy</p>
        </div>
      </footer>
    </ContentCenter>
  );
}
