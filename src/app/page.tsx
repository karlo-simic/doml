import { Navbar } from "@/components/navbar/navbar";
import { HeroSection } from "@/app/components/hero-section/hero-section";
import { LogosGrid } from "@/app/components/logos-grid/logos-grid";
import { InfoSection } from "@/app/components/info-section/info-section";
import { ReviewsSection } from "@/app/components/reviews-section/reviews-section";
import { ContactSection } from "@/app/components/contact-section/contact-section";
import { Footer } from "@/app/components/footer/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col gap-y-24 pb-[4.69rem]">
        <HeroSection />
        <LogosGrid />
        <InfoSection
          imageSrc="/images/landing-page/cube-1.png"
          imageAlt="Cube"
          heading1="AI Marketing"
          heading2="Optimized Reach"
          text={
            <>
              DOML is a digital media agency powered by AI technology providing
              real time,{" "}
              <span className="font-bold text-brand-blue">
                data-driven insights
              </span>{" "}
              on your business and audience. The mission of DOML is to create
              the best experiences for companies through intelligent insights,
              powerful analytics and{" "}
              <span className="font-bold text-brand-blue">
                strategic execution.
              </span>
            </>
          }
          buttonText="Get Started"
        />
        <InfoSection
          imageSide="left"
          imageSrc="/images/landing-page/shape-1.png"
          imageAlt="Cube"
          heading1="AI Marketing"
          heading2="Optimized Reach"
          text={
            <>
              DOML is a digital media agency powered by AI technology providing
              real time,{" "}
              <span className="font-bold text-brand-blue">
                data-driven insights
              </span>{" "}
              on your business and audience. The mission of DOML is to create
              the best experiences for companies through intelligent insights,
              powerful analytics and{" "}
              <span className="font-bold text-brand-blue">
                strategic execution.
              </span>
            </>
          }
          buttonText="Get Started"
        />
        <ReviewsSection />
        <InfoSection
          imageSrc="/images/landing-page/cube-2.png"
          imageAlt="Cube"
          heading1="AI Marketing"
          heading2="Optimized Reach"
          text={
            <>
              DOML is a digital media agency powered by AI technology providing
              real time,{" "}
              <span className="font-bold text-brand-blue">
                data-driven insights
              </span>{" "}
              on your business and audience. The mission of DOML is to create
              the best experiences for companies through intelligent insights,
              powerful analytics and{" "}
              <span className="font-bold text-brand-blue">
                strategic execution.
              </span>
            </>
          }
          buttonText="Get Started"
        />
        <InfoSection
          imageSide="left"
          imageSrc="/images/landing-page/shape-2.png"
          imageAlt="Cube"
          heading1="AI Marketing"
          heading2="Optimized Reach"
          text={
            <>
              DOML is a digital media agency powered by AI technology providing
              real time,{" "}
              <span className="font-bold text-brand-blue">
                data-driven insights
              </span>{" "}
              on your business and audience. The mission of DOML is to create
              the best experiences for companies through intelligent insights,
              powerful analytics and{" "}
              <span className="font-bold text-brand-blue">
                strategic execution.
              </span>
            </>
          }
          buttonText="Get Started"
        />
        <ContactSection />
        <LogosGrid />
        <Footer />
      </main>
    </div>
  );
}
