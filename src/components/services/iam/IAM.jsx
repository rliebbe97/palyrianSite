import PageHeading from "@/components/PageHeading";
import IAMServiceCard from "./IAMServiceCard";
import { IAMServiceData } from "./IAMServiceData";

export default function IAM() {
  return (
    <div className="flex flex-col max-w-full">
      <PageHeading
        title={"Identity and Access Management"}
        text={
          "At Palyrian, we specialize in building custom, tailored Identity and Access Management (IAM) solutions designed to address the unique functional and reporting requirements of our clients. Our dedicated team works closely with clients to understand their distinct needs, ensuring the development of customized IAM solutions that not only meet agency demands but also adhere to stringent audit concerns. By leveraging our expertise, we empower agencies to achieve comprehensive identity governance, access management, and robust reporting capabilities, fostering a secure and compliant operational environment."
        }
      >
        <div className="text-white text-2xl font-bold lg:mt-4  border-0 border-b border-primary">
          <h2>Explore our Offerings</h2>
        </div>
      </PageHeading>

      <div className="mt-16 mb-16 lg:mb-20 mx-4 lg:mx-16 px-11 grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-x-10 md:gap-y-14">
        {IAMServiceData?.map((item, index) => {
          return (
            <IAMServiceCard key={index} name={item?.name} icon={item?.icon} />
          );
        })}
      </div>
    </div>
  );
}
