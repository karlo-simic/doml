import { cn } from "@/lib/utils/cn";

type ButtonVariant = "default" | "link" | "cta-lg" | "cta-md";

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  variant?: ButtonVariant;
}

export function Button({
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center focus-styles ",
        variant === "default" &&
          "border border-neutral-600 rounded-[0.45rem] px-3 py-2 text-body-xs font-sans-secondary ",
        variant === "link" &&
          "rounded-[0.45rem] px-3 py-2 text-body-xs font-sans-secondary ",
        variant === "cta-lg" && "btn-display text-button-lg px-8 py-2 gap-x-4",
        variant === "cta-md" &&
          "btn-display text-button-lg px-7 py-1.5 gap-x-4",
        className,
      )}
      {...props}
    />
  );
}
