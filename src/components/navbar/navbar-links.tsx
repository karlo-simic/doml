import { NavbarLinkItem } from "@/components/navbar/navbar-link-item";

interface NavbarLinksProps {
  className?: string;
}

export function NavbarLinks({ className }: NavbarLinksProps) {
  return (
    <nav className={className}>
      <ul className="flex items-center">
        <li>
          <NavbarLinkItem href="/" text="Product" childLinks={[]} />
        </li>
        <li>
          <NavbarLinkItem href="/" text="Team" />
        </li>
        <li>
          <NavbarLinkItem href="/" text="Enterprise" />
        </li>
        <li>
          <NavbarLinkItem href="/" text="Explore" childLinks={[]} />
        </li>
        <li>
          <NavbarLinkItem href="/" text="Marketplace" />
        </li>
        <li>
          <NavbarLinkItem href="/" text="Pricing" childLinks={[]} />
        </li>
      </ul>
    </nav>
  );
}
