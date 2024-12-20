import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login, loading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await login(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-8 py-8">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <h2 className="text-2xl mb-6">Login</h2>
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
              Login
            </button>
            {error && (
              <div
                className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 text-xs mb-1"
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
