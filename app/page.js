import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="w-full h-full grid justify-items-center">
        <p className="self-center">Welcome to Cerevity</p>
        <Link href="/queens">
          <button>Play Queens</button>
        </Link>
      </div>
    </>
  );
}
