import MissionCard from "./MissionCard";
import { MissionData } from "./MissionData";

export default function Mission() {
  return (
    <div className="flex flex-col items-center px-12 py-24 lg:min-h-[25vh] w-full">
      <h1 className="primarytext mb-0">Our Mission</h1>
      <p className="primarysecondary p-3 mb-4 text-center lg:text-left">
        At Palyrian, our mission is to empower our clients with innovative,
        robust Identity and Access Management (IAM) solutions, fostering a
        secure and agile operational landscape. Guided by unwavering commitment
        to excellence, integrity, and innovation, we strive to:
      </p>
      <div className="flex flex-wrap justify-center w-full gap-8">
        {MissionData?.map((item, index) => {
          const number = index <= 10 ? `0${index + 1}` : `${index + 1}`;
          return (
            <MissionCard
              key={index}
              number={number}
              title={item?.title}
              body={item?.body}
            />
          );
        })}
      </div>
    </div>
  );
}
