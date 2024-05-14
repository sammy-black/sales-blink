import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="h-screen">
      <div className="h-full w-full">
        <Navbar />
        <main className="bg-[#f9f9f9] p-[1.5625em] h-full w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

AppLayout.propTypes = {};

export default AppLayout;
