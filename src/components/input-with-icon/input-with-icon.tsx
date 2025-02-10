import Image from "next/image";
import { InputBase } from "@/components/input-base/input-base";
import { cn } from "@/lib/utils/cn";

interface InputWithIconProps extends React.ComponentPropsWithRef<"input"> {
  icon: string;
}

/**
 * Renders the base <input> tag with a wrapper to be able to place an icon
 */
export function InputWithIcon({
  icon,
  className,
  ...inputProps
}: InputWithIconProps) {
  return (
    <div className={cn("relative", className)}>
      <InputBase className="pe-7 w-full" {...inputProps} />
      <Image
        src={icon}
        alt="Icon"
        width={16}
        height={16}
        className={cn(
          "w-4 h-4 absolute top-2/4 -translate-y-1/2 right-3 cursor-text pointer-events-none",
          inputProps.disabled && "cursor-default",
        )}
      />
    </div>
  );
}
