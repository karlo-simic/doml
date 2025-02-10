import { cn } from "@/lib/utils/cn";

/**
 * Basic <input> element
 */
export function InputBase({
  className,
  ...props
}: React.ComponentPropsWithRef<"input">) {
  return (
    <input
      className={cn(
        "focus:outline-none px-3 py-[0.4rem] text-neutral-200 rounded-[0.3rem] border border-solid border-neutral-700 bg-primary-light text-body-xs placeholder:text-neutral-200",
        className,
      )}
      {...props}
    />
  );
}
