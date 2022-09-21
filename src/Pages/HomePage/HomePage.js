import Link from "next/link";

export default function HomePage() {
  return (
    <div className="">
      <h1 className=" ">Welcome to the second hands store</h1>
      <p className="">
         hung branch
      </p>
      <Link href="/">
        <button className="">
          Shop Now
        </button>
      </Link>
    </div>
  );
}
