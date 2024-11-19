import { useAuthContext } from "./useAuthContext";

const useLogin = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //dispatch action to update auth context
    dispatch({ type: "LOGOUT" });

    //remove user from local storage
    localStorage.removeItem("user");
  };

  return { logout };
};

export default useLogin;
