import PageHeading from "@/components/PageHeading";
import ICAMServiceCard from "./ICAMServiceCard";
import { ICAMServiceData } from "./ICAMServiceData";

export default function ICAM() {
  return (
    <div className="flex flex-col max-w-full">
      <PageHeading
        title={"Identity, Credential and Access Management"}
        text={
          "At Palyrian, we specialize in building custom, tailored Identity, Credential and Access Management (ICAM) solutions designed to address the unique functional and reporting requirements of our clients. Our dedicated team works closely with clients to understand their distinct needs, ensuring the development of customized ICAM solutions that not only meet agency demands but also adhere to stringent audit concerns. By leveraging our expertise, we empower agencies to achieve comprehensive identity governance, access management, and robust reporting capabilities, fostering a secure and compliant operational environment."
        }
      >
        <div className="text-white text-2xl font-bold  border-0 border-b border-primary">
          <h2>Explore our Offerings</h2>
        </div>
      </PageHeading>

      <div className="my-16 px-11 grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-x-10 md:gap-y-14">
        {ICAMServiceData?.map((item, index) => {
          return <ICAMServiceCard key={index} name={item?.name} />;
        })}
      </div>
    </div>
  );
}
