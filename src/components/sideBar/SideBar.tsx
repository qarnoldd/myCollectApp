import { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import home from "../../assets/images/home.svg";
import settings from "../../assets/images/settings.svg";

function SideBar() {
  return (
    <div className="SideBar">
      <Link to="home" className="Icon">
        <img src={home} />
      </Link>
      <Link to="settings" className="Icon">
        <img src={settings} />
      </Link>
    </div>
  );
}
export default SideBar;
