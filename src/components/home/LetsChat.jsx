import Link from "next/link";

export default function LetsChat() {
  return (
    <div className="bg-center flex-1 flex flex-col justify-center pb-10">
      <div className="flex flex-col md:flex-row justify-center px-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="primarytext mb-6">Let's chat</h2>
          <p className="primarysecondary mb-6">
            We'd love to see how we can help your ICAM solutions come to
            fruition
          </p>
          <Link href="/contact" className="button">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
