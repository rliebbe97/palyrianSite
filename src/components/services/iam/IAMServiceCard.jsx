import AccessRequestIcon from "@/components/icons/AccessRequestIcon";
import LifecycleIcon from "@/components/icons/LifecycleIcon";

export default function IAMServiceCard({ name, icon }) {
  return (
    <div className="rounded-xl bg-cards p-4 text-center shadow-xl">
      <div className="mx-auto z- flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/40">
        {icon}
      </div>
      <h1 className="cardheaders my-[-2rem] mb-3 lg:px-14">{name}</h1>
    </div>
  );
}
