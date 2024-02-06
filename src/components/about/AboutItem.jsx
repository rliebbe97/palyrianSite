export default function AboutItem({ heading, text }) {
  return (
    <div className="flex flex-col justify-start py-4 px-2 lg:px-20">
      <h2 className="primarytext mb-2">
        <span className="text-primary">{"| "}</span>
        {heading}
      </h2>
      <p className="primarysecondary mx-6 md:mx-10 p-4 bg-cards rounded-md">
        {text}
      </p>
    </div>
  );
}
