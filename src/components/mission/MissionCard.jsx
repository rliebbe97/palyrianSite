export default function MissionCard({ number, title, body }) {
  return (
    <div className="relative bg-cards w-full min-w-[350px] max-w-[450px] h-80 flex flex-col py-4 px-6 rounded-md">
      <h1 className=" cardnumber self-start">{number}</h1>
      <div className="absolute p-6 pt-8">
        <h1 className="primarytext mb-2">{title}</h1>
        <p className="primarysecondary">{body}</p>
      </div>
    </div>
  );
}
