import React from "react";
import Nav from "../components/Nav";
import NoteView from "../components/NoteView";
import Sidebar from "../components/SideBar";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Nav />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <NoteView />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
