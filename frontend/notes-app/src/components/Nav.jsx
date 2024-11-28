import useLogout from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/";

  const handleClick = () => {
    logout();
  };

  const handleLogoClick = () => {
    navigate("/login");
  };

  return (
    <>
      {isAuthPage ? (
        <div className="bg-white flex justify-between px-6 py-6 drop-shadow">
          <h2
            className="text-xl font-medium cursor-pointer"
            onClick={handleLogoClick}
          >
            Notes App
          </h2>
        </div>
      ) : (
        <div className="bg-white flex justify-between px-6 py-4 drop-shadow">
          <h2 className="text-xl font-medium">Notes App</h2>
          {user ? <button onClick={handleClick}>Logout</button> : null}
        </div>
      )}
    </>
  );
};

export default Nav;
