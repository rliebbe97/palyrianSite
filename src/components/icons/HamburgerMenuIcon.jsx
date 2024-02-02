export default function HamburgerMenuIcon({ className }) {
  return (
    <svg
      className={`w-5 h-5 ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 14"
      fill="currentColor"
    >
      <path
        stroke="#FFD700"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  );
}
