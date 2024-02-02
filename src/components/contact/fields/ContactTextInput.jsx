export default function ContactTextInput({
  label,
  name,
  value,
  onChange,
  required,
  error,
  className,
}) {
  return (
    <div className="sm:col-span-2">
      <label className="block text-sm font-medium text-fontSecondary">
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`mt-1 block w-full rounded-md py-3 px-4 shadow-sm text-white bg-cards focus:outline-1 focus:outline-primary focus:ring-primary ${
          error
            ? "outline-2 outline-red-600 ring-2 ring-red-600 text-red-500"
            : ""
        } ${className}`}
      />
      {error && <span className="mt-2 text-sm text-red-500">{error}</span>}
    </div>
  );
}
