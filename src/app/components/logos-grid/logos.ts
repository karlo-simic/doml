interface LogoData {
  src: string;
  width: number;
  height: number;
  alt: string;
}

type LogoName =
  | "airtel"
  | "uba"
  | "paga"
  | "mtn"
  | "dangote"
  | "firstBank"
  | "gcp"
  | "ebay"
  | "linux"
  | "spotify"
  | "airbnb"
  | "facebook"
  | "cocacola"
  | "zoom"
  | "creativeCloud"
  | "netflix"
  | "discord"
  | "figma"
  | "paypal"
  | "adobe";

export const logos: Record<LogoName, LogoData> = {
  airtel: {
    src: "/images/logos/airtel.png",
    width: 57,
    height: 65,
    alt: "Airtel logo",
  },
  uba: {
    src: "/images/logos/uba.png",
    width: 106,
    height: 48,
    alt: "United Bank for Africa (UBA) logo",
  },
  paga: {
    src: "/images/logos/paga.png",
    width: 126,
    height: 35,
    alt: "Paga logo",
  },
  mtn: {
    src: "/images/logos/mtn.png",
    width: 93,
    height: 47,
    alt: "MTN logo",
  },
  dangote: {
    src: "/images/logos/dangote.png",
    width: 94,
    height: 51,
    alt: "Dangote Group logo",
  },
  firstBank: {
    src: "/images/logos/first-bank.png",
    width: 63,
    height: 54,
    alt: "First Bank logo",
  },
  gcp: {
    src: "/images/logos/gcp.png",
    width: 44,
    height: 36,
    alt: "Google Cloud Platform logo",
  },
  ebay: {
    src: "/images/logos/ebay.png",
    width: 88,
    height: 36,
    alt: "eBay logo",
  },
  linux: {
    src: "/images/logos/linux.png",
    width: 30,
    height: 36,
    alt: "Linux logo",
  },
  spotify: {
    src: "/images/logos/spotify.png",
    width: 35,
    height: 36,
    alt: "Spotify logo",
  },
  airbnb: {
    src: "/images/logos/airbnb.png",
    width: 113,
    height: 36,
    alt: "Airbnb logo",
  },
  facebook: {
    src: "/images/logos/facebook.png",
    width: 182,
    height: 36,
    alt: "Facebook logo",
  },
  cocacola: {
    src: "/images/logos/cocacola.png",
    width: 108,
    height: 36,
    alt: "Coca-Cola logo",
  },
  zoom: {
    src: "/images/logos/zoom.png",
    width: 157,
    height: 36,
    alt: "Zoom logo",
  },
  creativeCloud: {
    src: "/images/logos/creative-cloud.png",
    width: 48,
    height: 36,
    alt: "Adobe Creative Cloud logo",
  },
  netflix: {
    src: "/images/logos/netflix.png",
    width: 130,
    height: 36,
    alt: "Netflix logo",
  },
  discord: {
    src: "/images/logos/discord.png",
    width: 46,
    height: 36,
    alt: "Discord logo",
  },
  figma: {
    src: "/images/logos/figma.png",
    width: 24,
    height: 36,
    alt: "Figma logo",
  },
  paypal: {
    src: "/images/logos/paypal.png",
    width: 133,
    height: 36,
    alt: "PayPal logo",
  },
  adobe: {
    src: "/images/logos/adobe.png",
    width: 26,
    height: 36,
    alt: "Adobe logo",
  },
};
