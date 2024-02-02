export default function PageHeading({ title, text, children }) {
  return (
    <div className="flex flex-col items-center px-11 mt-12 w-full">
      <h1 className="primarytext mb-8">{title}</h1>
      <p className="primarysecondary px-4 lg:px-40 mb-10">{text}</p>
      {children}
    </div>
  );
}
