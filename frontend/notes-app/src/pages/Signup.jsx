import React from "react";
import Nav from "../components/Nav";
import { useSignup } from "../hooks/useSignup";

export const Signup = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { signup, loading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(name, email, password);
    setName("");
    setEmail("");
    setPassword("");
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
            <button
              type="submit"
              className="p-2 mb-4 bg-blue-500 text-white"
              disabled={loading}
            >
              Sign up
            </button>
            {error && (
              <div
                className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 text-xs"
                role="alert"
              >
                {Array.isArray(error) ? (
                  <ul>
                    {error.map((err, index) => {
                      <li key={index}>{err}</li>;
                    })}
                  </ul>
                ) : (
                  <p>{error}</p>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
