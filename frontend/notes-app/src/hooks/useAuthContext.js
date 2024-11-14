import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

// custom hook to access the auth context
export const useAuthContext = () => {
  // gets the value of the auth context
  const context = useContext(AuthContext);

  // throw error if context is being used outside of AuthContextProvider
  if (!context) {
    throw new error("useAuthContext must be used within a AuthContextProvider");
  }

  return context;
};
