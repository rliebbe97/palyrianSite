export default function MissionCard({ number, title, body }) {
  return (
    <div className="relative bg-cards w-full min-w-[350px] max-w-[450px] h-80 flex flex-col py-4 px-6 rounded-md">
      <span className=" cardnumber self-start">{number}</span>
      <div className="absolute p-6 pt-8">
        <h3 className="primarytext mb-2">{title}</h3>
        <p className="primarysecondary">{body}</p>
      </div>
    </div>
  );
}
