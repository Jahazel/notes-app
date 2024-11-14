import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

export const Signup = () => {
  return (
    <>
      <Nav />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-8 py-8">
          <form onSubmit={() => {}} className="flex flex-col">
            <h2 className="text-2xl mb-6">Sign Up</h2>
            <input
              type="name"
              placeholder="Name"
              className="p-2 mb-4 border rounded outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 mb-4 border rounded outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 mb-4 border rounded outline-none"
            />
            <button type="submit" className="p-2 mb-4 bg-blue-500 text-white">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
