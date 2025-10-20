import Link from 'next/link';

export default function MainLogo() {
  return (
    <Link
      className="text-2xl font-extrabold h-10 px-2 bg-accent rounded-md"
      href={'/'}
    >
      <span>KalgoMovie</span>
    </Link>
  );
}
