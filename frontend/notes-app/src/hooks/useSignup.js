import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (name, email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const json = await response.json();

      if (!response.ok) {
        setLoading(false);
        setError(json.errors ? json.errors.join(","): json.error);
      } else {
        // save user to local storage
        localStorage.setItem("user", JSON.stringify(json));

        //update auth context
        dispatch({ type: "LOGIN", payload: json });

        setLoading(false);
      }
    } catch (error) {
      if (error.name === "ValidationError") {
        const messages = Object.values(error.errors).map((err) => err.message);

        return res.status(400).json({ errors: messages });
      }
      res.status(500).json({ error: "Internal server error" });
      setLoading(false);
    }
  };
  return { signup, loading, error };
};
