import { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const HomeIcon: IconType = FaHome;
const SettingsIcon: IconType = IoIosSettings;

function SideBar() {
  return (
    <div className="SideBar">
      <Link to="/">
        <HomeIcon size={40} className="HomeIcon" />
      </Link>
      <Link to="/">
        <SettingsIcon size={40} className="HomeIcon" />
      </Link>
    </div>
  );
}

export default SideBar;
