import "./globals.css";
import { Roboto, Nunito_Sans } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import VantaBirdsBackground from "./VantaBirds";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata = {
  title: "Palyrian: IAM Cybersecurity Consulting",
  metadataBase: new URL("https://www.palyrian.com/"),
  description:
    "Expert IAM Cybersecurity Consulting: Elevate Your Security Posture with Advanced Identity and Access Management Solutions. Tailored Strategies, Cutting-Edge Tech, and Proven Expertise to Secure Your Digital Assets.",
  keywords: [
    "IAM",
    "Cybersecurity",
    "Palyrian",
    "Consulting",
    "Virginia",
    "IAM security solutions",
    "Identity and access management consulting",
  ],
  openGraph: {
    title: "Palyrian: IAM Cybersecurity Consulting",
    description:
      "Expert IAM Cybersecurity Consulting: Elevate Your Security Posture with Advanced Identity and Access Management Solutions. Tailored Strategies, Cutting-Edge Tech, and Proven Expertise to Secure Your Digital Assets.",
    siteName: "Palyrian",
    local: "en_US",
    type: "website",
    images: "./images/FingerPrintHeroImg.png",
  },
  robots: {
    googleBot: {
      index: true,
    },
  },
  twitter: {
    title: "Palyrian: IAM Cybersecurity Consulting",
    description:
      "Expert IAM Cybersecurity Conslting: Elevate Your Security Posture with Advanced Identity and Access Management Solutions. Tailored Strategies, Cutting-Edge Tech, and Proven Expertise to Secure Your Digital Assets.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}  bg-background`}>
        <main className="relative overflow-hidden min-h-screen bg-gradient-to-bl from-[#635efa] from-50% via-[#6fc5ef] to-[#5bf3e5]">
          <VantaBirdsBackground />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 2,
              color: "#fff",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="bg-black/50"
          >
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
