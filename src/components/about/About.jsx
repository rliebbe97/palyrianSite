import PageHeading from "../PageHeading";
import { AboutData } from "./AboutData";
import AboutItem from "./AboutItem";

export default function About() {
  return (
    <div className="flex flex-col max-w-full">
      <PageHeading
        title={"About Us"}
        text={
          " Welcome to Palyrian, where we innovate within the landscape of Identity, Credential and Access Management (ICAM) space. Established with a vision to revolutionize cybersecurity, our agency brings together a team of seasoned professionals and subject matter experts with a shared commitment to excellence, security, and innovation."
        }
      />

      <div className="px-4">
        {AboutData?.map((item, index) => {
          return (
            <AboutItem key={index} heading={item?.heading} text={item?.text} />
          );
        })}
      </div>
    </div>
  );
}
