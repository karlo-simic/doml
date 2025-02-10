import { HighlightedSection } from "@/components/highlighted-section/highlighted-section";
import { Review } from "@/app/components/review/review";
import { CarouselSteps } from "@/components/carousel-steps/carousel-steps";

export function ReviewsSection() {
  return (
    <HighlightedSection className="px-[1.31rem] pt-[1.38rem] pb-[3.13rem] lg:px-[6.87rem] lg:pt-[3.51rem] lg:pb-[3.51rem]">
      <div className="flex flex-col items-center gap-y-[2.44rem]">
        <Review>
          <Review.Image
            src="/images/landing-page/woman.jpeg"
            alt="Amaka Micheal"
          />
          <Review.Content
            text="It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform."
            authorName="Amaka Micheal"
            authorPosition="Media Executive"
            authorCompany="Buying & Control"
          />
        </Review>
        <CarouselSteps />
      </div>
    </HighlightedSection>
  );
}
