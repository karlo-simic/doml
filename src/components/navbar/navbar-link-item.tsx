import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";

interface NavbarLinkItemProps {
  href: string;
  text: string;
  childLinks?: void[];
  className?: string;
}

export function NavbarLinkItem({
  href,
  text,
  childLinks,
  className,
}: NavbarLinkItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center py-2 pl-4",
        !childLinks && "pr-4",
        className,
      )}
    >
      <span className="font-sans-secondary text-body-xs">{text}</span>
      {childLinks && (
        <Image
          src="/icons/chevron-down.svg"
          alt="Chevron down"
          width={29}
          height={29}
          className="flex-shrink-0"
        />
      )}
    </Link>
  );
}
