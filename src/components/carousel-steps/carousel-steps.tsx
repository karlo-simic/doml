import Image from "next/image";

function Step({ active }: { active?: boolean }) {
  return (
    <button className="w-3 h-3 shrink-0 focus-styles rounded-full">
      {active && (
        <Image
          src="/icons/step-active.svg"
          alt="Arrow left"
          height={12}
          width={12}
          className="h-full w-full"
        />
      )}
      {!active && (
        <Image
          src="/icons/step-inactive.svg"
          alt="Arrow left"
          height={12}
          width={12}
          className="h-full w-full"
        />
      )}
    </button>
  );
}

export function CarouselSteps() {
  return (
    <div className="flex gap-x-[1.85rem] items-center">
      <button className="w-[0.77663rem] h-[0.6795rem] shrink-0 focus-styles rounded-full">
        <Image
          src="/icons/arrow-left-white.svg"
          alt="Arrow left"
          height={13}
          width={11}
          className="h-full w-full"
        />
      </button>
      <Step />
      <Step active />
      <Step />
      <Step />
      <Step />
      <button className="w-[0.77663rem] h-[0.6795rem] shrink-0 focus-styles rounded-full">
        <Image
          src="/icons/arrow-right-white.svg"
          alt="Arrow left"
          height={13}
          width={11}
          className="h-full w-full"
        />
      </button>
    </div>
  );
}
