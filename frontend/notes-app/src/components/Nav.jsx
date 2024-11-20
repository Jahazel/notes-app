import useLogout from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Nav = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <>
      <div className="bg-white flex justify-between px-6 py-6 drop-shadow">
        <h2 className="text-xl font-medium">Notes App</h2>
        {user ? <button onClick={handleClick}>Logout</button> : null}
      </div>
    </>
  );
};

export default Nav;
