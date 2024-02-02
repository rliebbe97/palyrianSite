import LetsChat from "../home/LetsChat";
import IAM from "./iam/IAM";

export default function Services() {
  return (
    <div className="flex flex-col">
      <IAM />
      <hr className="my-6 px-11 w-[80%] md:w-full md:max-w-[600px] mx-auto border-primary" />
      <LetsChat />
    </div>
  );
}
