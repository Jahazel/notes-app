import React from "react";
import useLogout from "../hooks/useLogout";

const Nav = () => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="bg-white flex justify-between px-6 py-6 drop-shadow">
      <h2 className="text-xl font-medium">Notes App</h2>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Nav;
