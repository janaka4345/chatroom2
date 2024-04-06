import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>

      Home page
      </h1>
      <Link href='/api/auth/signin'>Sign In</Link><br />
      <Link href='/api/auth/signout'>Sign Out</Link>
      </div>
  );
}
