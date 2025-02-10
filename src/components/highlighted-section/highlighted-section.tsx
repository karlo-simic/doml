import { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { ContentCenter } from "@/components/content-center/content-center";

interface HighlightedSectionProps {
  className?: string;
  children?: ReactNode;
}

export function HighlightedSection({
  className,
  children,
}: HighlightedSectionProps) {
  return (
    <ContentCenter>
      <section className={cn("rounded-[1.25rem] bg-gradient-1", className)}>
        {children}
      </section>
    </ContentCenter>
  );
}
