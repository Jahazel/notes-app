import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 border rounded bg-white px-8 py-6">
        <form onSubmit={() => {}} className="flex flex-col">
          <h2 className="text-2xl mb-6">Login</h2>
          <input type="email" placeholder="Email" className="p-1 mb-4" />
          <input type="password" placeholder="Password" className="p-1 mb-4" />
          <button type="submit" className="p-1 mb-4 bg-blue-500">
            Login
          </button>
          <p className="flex justify-center mt-1 text-sm">
            Not registered yet?
            <Link
              to="/signup"
              className="font-medium text-primary underline ml-1"
              type="submit"
            >
              Create an account{""}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
