import Link from "next/link";

export default function NavLink({ name, href, onClick }) {
  return (
    <Link
      href={href}
      className="text-lg py-1 hover:text-primary hover:border-b-2 hover:border-primary"
      onClick={onClick}
    >
      <span>{name}</span>
    </Link>
  );
}
