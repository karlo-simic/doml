import { cn } from "@/lib/utils/cn";

/**
 * Input with a gradient border, extracted as a separate
 * component since it requires a DIV wrapper.
 */
export function GradientInput({
  className,
  ...props
}: React.ComponentPropsWithRef<"input">) {
  return (
    <div className={cn("gradient-input-container", className)}>
      <input
        className="focus:outline-none w-full bg-white bg-opacity-20 py-[0.62rem] px-[2.12rem] placeholder:text-white text-body-sm z-20 relative rounded-full"
        {...props}
      />
    </div>
  );
}
