import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mx-4">
      <Image
        src="/images/logo/White Logo.png"
        width={1000}
        height={500}
        alt="Palyrian logo"
      />
      <div className="flex flex-col justify-center items-center gap-2 text-white">
        <span>
          Thank you for your patience as we redefine our brand. Mark your
          calendar for January 2025
        </span>
      </div>
    </div>
  );
}
