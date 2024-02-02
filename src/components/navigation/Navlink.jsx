import Link from "next/link";

export default function NavLink({ name, href }) {
  return (
    <Link
      href={href}
      className="text-lg py-1 hover:text-primary hover:border-b-2 hover:border-primary"
    >
      <span>{name}</span>
    </Link>
  );
}
