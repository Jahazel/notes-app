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
        <div className="bg-white flex justify-between px-6 h-14 items-center drop-shadow">
          <h2
            className="text-lg font-medium cursor-pointer"
            onClick={handleLogoClick}
          >
            Notes App
          </h2>
        </div>
      ) : (
        <div className="bg-white flex justify-between px-6 h-14 items-center drop-shadow">
          <h2 className="text-lg font-medium">Notes App</h2>
          <div>
            <button className="p-2 mr-7 bg-blue-500 text-white rounded">
              New Note +
            </button>
            {user ? <button onClick={handleClick}>Logout</button> : null}
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
