import React from "react";
import Nav from "../components/Nav";

export const Signup = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-8 py-8">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <h2 className="text-2xl mb-6">Sign up</h2>
            <input
              type="name"
              placeholder="Name"
              className="p-2 mb-4 border rounded outline-none text-xs"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 mb-4 border rounded outline-none text-xs"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 mb-4 border rounded outline-none text-xs"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button type="submit" className="p-2 mb-4 bg-blue-500 text-white">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
