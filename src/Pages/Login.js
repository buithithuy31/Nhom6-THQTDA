import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-full-remove-nav">
      <div className="min-w-[500px] border-2 p-10">
        <h2 className="text-center text-2xl font-bold">Sign In now !!!</h2>
        <div className="flex flex-col mt-5">
          <input
            type="text"
            placeholder="username"
            className="p-3 border-2 border-gray-300"
          />
          <input
            type="password"
            placeholder="password"
            className="p-3 border-2 border-gray-300 mt-5"
          />
          <button className="p-3 pl-5 pr-5 mt-5 text-xl rounded-md border-2 border-cyan-500 hover:shadow-cyan-500/50">
            Sign In
          </button>
          <div className="text-center font-bold">Or</div>
          <Link href="/Register">
            <button className="p-3 pl-5 pr-5 mt-5 text-xl rounded-md border-2 border-orange-700 hover:shadow-cyan-500/50">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
