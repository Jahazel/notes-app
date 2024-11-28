const Sidebar = () => {
  return (
    <>
      <div className="w-60 bg-gray-200 text-gray-800">
        <ul>
          <li class="px-6 py-3 hover:bg-gray-300 rounded cursor-pointer text-sm">
            Class Notes
          </li>
          <li class="px-6 py-3 hover:bg-gray-300 rounded cursor-pointer text-sm">
            TODO
          </li>
          <li class="px-6 py-3 hover:bg-gray-300 rounded cursor-pointer text-sm">
            Summer Plans
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
