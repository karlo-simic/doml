import Image from "next/image";
import Link from "next/link";

export function NavbarLogo() {
  return (
    <Link href="/" className="flex-shrink-0">
      <Image
        src="/icons/logo-white.svg"
        alt="DOML logo"
        width={101}
        height={25}
      />
    </Link>
  );
}
