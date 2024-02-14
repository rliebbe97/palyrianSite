import LetsChat from "@/components/home/LetsChat";
import Mission from "@/components/mission/Mission";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col h-screen">
        <div className="bg-heroImg bg-center bg-cover flex-1 flex flex-col justify-center">
          <div className="flex flex-col px-11 w-full lg:w-1/3 glassmorph items-center lg:items-start">
            <h1 className="herotext text-center lg:text-left mb-6">
              {" "}
              Unlock Your Digital Potential with Palyrian{" "}
            </h1>
            <p className="herosecondary text-center lg:text-left mb-6">
              We specialize in providing cutting-edge Identity and Access
              Management solutions helping you secure your digital
              infrastructure and streamline operations.
            </p>
            <div>
              <Link href="/contact" className="button">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-11 pt-24 min-h-[70vh] lg:h-[50vh] flex flex-col lg:flex-row justify-center items-center text-left">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
          <h2 className="primarytext mb-2 text-center lg:text-left">Identity is the Center</h2>
          <p className="primarysecondary mb-5 text-center lg:text-left">
            With remote work becoming the global norm, identity security becomes
            an increasing must-have to any organization's security posture.
            Palyrian is here to help you achieve your organization's polices and
            complex requirements.{" "}
          </p>
          <Link href="/services" className="button">
            Explore our Offerings
          </Link>
        </div>
        <div className="lg:w-1/2 h-full lg:flex lg:items-center lg:justify-center mt-12 lg:py-40">
          <Image
            src={`/images/KidScreenImg.png`}
            width={550}
            height={400}
            alt="Identity image"
          />
        </div>
      </div>
      <Mission />
      <LetsChat />
    </div>
  );
}
