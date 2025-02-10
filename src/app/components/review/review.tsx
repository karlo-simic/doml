import Image from "next/image";

interface ReviewProps {
  children?: React.ReactNode;
}

interface ReviewImageProps {
  src: string;
  alt: string;
}

interface ReviewContentProps {
  text: string;
  authorName: string;
  authorPosition: string;
  authorCompany: string;
}

function ReviewImage({ src, alt }: ReviewImageProps) {
  return (
    <div className="review-image h-[16.4375rem] w-[16.4375rem] shadow-[20px_30px_30px_0px_rgba(0,0,0,0.25)] shrink-0 lg:h-[16.4375rem] lg:w-[16.4375rem]">
      <Image
        src={src}
        alt={alt}
        width={263}
        height={263}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function Content({
  text,
  authorName,
  authorPosition,
  authorCompany,
}: ReviewContentProps) {
  return (
    <div>
      <blockquote className="flex flex-col gap-y-[2.69rem] lg:gap-y-4">
        <p className="text-center text-body-lg font-semibold leading-[196.9%] p-[0.63rem] lg:text-start lg:p-0 max-w-[43.75rem] lg:max-w-none">
          {text}
        </p>
        <footer className="flex flex-col gap-y-[0.3125rem] items-center lg:items-start lg:gap-y-[0.4rem]">
          <cite className="flex flex-col gap-y-[0.3125rem] items-center not-italic text-center lg:text-start lg:items-start lg:gap-y-0">
            <span className="text-subtitle font-bold">{authorName}</span>
            <span className="text-body-lg">
              {authorPosition}, {authorCompany}
            </span>
          </cite>
          <Image
            src="/images/landing-page/discord-logo.png"
            alt="Discord logo"
            width={105}
            height={36}
            className="w-[6.5625rem] h-[2.25rem]"
          />
        </footer>
      </blockquote>
    </div>
  );
}

export function Review({ children }: ReviewProps) {
  return (
    <article className="flex flex-col gap-y-[2.69rem] gap-x-[3.94rem] items-center lg:flex-row">
      {children}
    </article>
  );
}

Review.Image = ReviewImage;
Review.Content = Content;
