import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Login = () => {
  return (
    <>
      <Nav />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-8 py-8">
          <form onSubmit={() => {}} className="flex flex-col">
            <h2 className="text-2xl mb-6">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="p-2 mb-4 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 mb-4 border rounded"
            />
            <button type="submit" className="p-2 mb-4 bg-blue-500 text-white">
              Login
            </button>
            <p className="flex justify-center mt-1 text-sm">
              Not registered yet?
              <Link
                to="/signup"
                className="font-medium text-primary underline ml-1"
                type="submit"
              >
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
