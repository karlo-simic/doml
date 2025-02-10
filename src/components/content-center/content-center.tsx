import { cn } from "@/lib/utils/cn";

/**
 * Use for sections to keep them centered in the screen and have
 * horizontal paddings.
 */
export function ContentCenter({
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return (
    <div
      className={cn("w-11/12 max-w-[80.5rem] mx-auto md:w-11/12", className)}
      {...props}
    />
  );
}
