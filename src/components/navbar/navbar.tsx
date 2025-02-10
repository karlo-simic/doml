import { ContentCenter } from "@/components/content-center/content-center";
import { InputWithIcon } from "@/components/input-with-icon/input-with-icon";
import { Button } from "@/components/button/button";
import { NavbarLogo } from "./navbar-logo";
import { NavbarLinks } from "./navbar-links";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="min-[1200px]:py-[0.6rem] w-full py-5">
      <ContentCenter className="flex items-center justify-between gap-x-4">
        <div className="flex items-center">
          <NavbarLogo />

          {/* Desktop - links */}
          <NavbarLinks className="hidden min-[1200px]:block" />
        </div>

        {/* Desktop - Search, sign in & sign up */}
        <div className="items-center gap-x-[0.85rem] hidden min-[1200px]:flex">
          <InputWithIcon
            icon="/icons/keyboard-forward-slash.svg"
            placeholder="Search DOML"
            className="w-60"
          />
          <Button variant="link">Sign up</Button>
          <Button>Sign up</Button>
        </div>

        {/* Mobile - menu */}
        <button type="button" className="min-[1200px]:hidden">
          <Image
            src="/icons/menu.svg"
            alt="Menu icon"
            width={31}
            height={16}
            className="h-4"
          />
        </button>
      </ContentCenter>
    </header>
  );
}
