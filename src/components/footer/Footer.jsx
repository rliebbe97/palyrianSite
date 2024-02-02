import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const PALYRIAN_EMAIL = "Roby.Liebbe@palyrian.com";
const PALYRIAN_PHONE = "214-906-1893";

function Footer() {
  return (
    <footer className="text-white px-11">
      <div className="py-6 lg:py-8">
        <hr className="my-6 border-primary" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm primarysecondary">
            © {new Date().getFullYear()} Palyrian. All Rights Reserved.
          </span>
          <div className="flex flex-col sm:flex-row items-start mt-4 sm:justify-center sm:mt-0 sm:space-x-4">
            <a
              href={`mailto:${PALYRIAN_EMAIL}`}
              target="_blank"
              className="flex flex-row justify-center items-center"
            >
              <MdEmail className="text-primary hover:text-white" />
              <span className="ml-2 primarysecondary">{PALYRIAN_EMAIL}</span>
            </a>
            <a
              href={`tel:${PALYRIAN_PHONE}`}
              target="_blank"
              className="flex flex-row justify-center items-center"
            >
              <FaPhoneAlt className="text-primary hover:text-white" />
              <span className="ml-2 primarysecondary">214-906-1893</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
