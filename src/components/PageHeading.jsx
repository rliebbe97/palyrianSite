export default function PageHeading({ title, text, children }) {
  return (
    <div className="flex flex-col items-center px-6 lg:px-11 mt-12 lg:mt-20 w-full">
      <h1 className="headingtext  text-center lg:text-left mb-4 lg:mb-8">{title}</h1>
      <p className="primarysecondary text-center lg:text-left px-4 lg:px-20 mb-10">{text}</p>
      {children}
    </div>
  );
}
