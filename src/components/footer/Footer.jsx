import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

const PALYRIAN_EMAIL = "services@palyrian.com";
const PALYRIAN_PHONE = "214-906-1893";
const PALYRIAN_LINKEDIN = "https://www.linkedin.com/company/palyrian/";

function Footer() {
  return (
    <footer className="text-white fixed bottom-0 max-w-screen-2xl w-full px-4">
      <div className="py-6 lg:py-8">
        <hr className="my-6 border-primary" />
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between">
          <span className="text-sm primarysecondary">
            © {new Date().getFullYear()} Palyrian. All Rights Reserved.
          </span>
          <div className="flex flex-row items-start mb-4 sm:justify-center gap-4">
            <a
              href={`mailto:${PALYRIAN_EMAIL}`}
              target="_blank"
              className="flex flex-row justify-center items-center group"
            >
              <MdEmail className="text-primary group-hover:text-white" />
              <span className="ml-2 primarysecondary group-hover:text-white hidden md:block">
                {PALYRIAN_EMAIL}
              </span>
            </a>
            <a
              href={`tel:${PALYRIAN_PHONE}`}
              target="_blank"
              className="flex flex-row justify-center items-center group"
            >
              <FaPhoneAlt className="text-primary group-hover:text-white" />
              <span className="ml-2 primarysecondary group-hover:text-white hidden md:block">
                214-906-1893
              </span>
            </a>
            <a
              href={PALYRIAN_LINKEDIN}
              target="_blank"
              className="flex flex-row justify-center items-center group"
            >
              <LinkedInLogoIcon className="text-primary group-hover:text-white" />
              <span className="ml-2 primarysecondary group-hover:text-white hidden md:block">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
