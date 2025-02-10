import { cn } from "@/lib/utils/cn";

interface LineProps {
  className?: string;
}

export function Line({ className }: LineProps) {
  return <div className={cn("bg-gradient-1 h-[1px] w-full", className)} />;
}
