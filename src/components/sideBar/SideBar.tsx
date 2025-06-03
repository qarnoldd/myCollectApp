import { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

function SideBar() {
  return (
    <div className="SideBar">
      <Link to="/">
        <FaHome size={40} className="HomeIcon" />
      </Link>
      <Link to="/">
        <IoIosSettings size={40} className="HomeIcon" />
      </Link>
    </div>
  );
}

export default SideBar;
