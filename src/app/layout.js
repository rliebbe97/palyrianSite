import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

const roboto = Roboto({
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
      <body className={`${roboto.className} bg-background`}>
        <Navbar />
        <main className="relative overflow-hidden min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
