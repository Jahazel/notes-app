// createContext is used to share auth data across components
// useReducer is used to manage state updates
import { createContext, useReducer } from "react";

// Create a context to store and share auth data
export const AuthContext = createContext();

// Reducer function to manage auth state updates
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "REGISTER":
      return { user: null };
    default:
      return state;
  }
};

// Provides auth data and actions to other parts of the app
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  console.log("Current state: ", state);

  // Wraps child components to give them access to auth data
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
