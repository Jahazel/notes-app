import { useState } from "react";

export const useCreateNote = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const createNote = async (title, content, userId) => {
    console.log({ title, content, userId });

    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:4000/api/notes/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, userId }),
      });

      const json = await response.json();

      if (!response.ok) {
        setLoading(false);
        throw new Error(json.error || "Failed to create note.");
      }

      setLoading(false);
      return json;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      return null;
    }
  };

  return { createNote, loading, error };
};
