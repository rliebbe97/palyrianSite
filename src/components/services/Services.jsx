import LetsChat from "../home/LetsChat";
import ICAM from "./icam/ICAM";

export default function Services() {
  return (
    <div className="flex flex-col">
      <ICAM />
      <hr className="my-6 px-11 w-[80%] md:w-full md:max-w-[600px] mx-auto border-primary" />
      <LetsChat />
    </div>
  );
}
