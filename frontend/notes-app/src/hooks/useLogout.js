import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const logout = () => {
    //dispatch action to update auth context
    dispatch({ type: "LOGOUT" });

    //remove user from local storage
    localStorage.removeItem("user");

    //redirect to login page
    navigate("/login");
  };

  return { logout };
};

export default useLogin;
