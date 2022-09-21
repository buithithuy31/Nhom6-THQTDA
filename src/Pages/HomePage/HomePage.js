import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container">
      <h1 className="text-7xl font-bold">Welcome to the second hands store</h1>
      <p className="">
        
      </p>
      <Link href="/">
        <button className="p-3 bg-blue-600 text-white text-xl rounded-md shadow-lg shadow-blue-500/50 hover:shadow-cyan-500/50">
          Shop Now
        </button>
      </Link>
    </div>
  );
}
