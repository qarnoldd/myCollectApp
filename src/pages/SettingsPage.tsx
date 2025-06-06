import { useState } from "react";
import "../App.css";
import AddButton from "../components/AddNew";
import SearchBar from "../components/SearchBar";
import Group from "../components/group/Group";
import { Link } from "react-router-dom";

function HandleButton() {
  console.log("NEW COLLECTION PRESSED");
}

function SettingsPage() {
  return (
    <div className="SettingsPage">
      <div className="TopBar">
        <h2>Settings</h2>
        <div className="RightSide">
          <div />
        </div>
      </div>
      <form>
        <label>Email</label>
        <input type="email" value="example@gmail.com"></input>
        <label>Password</label>
        <input type="password"></input>
        <div>
          <button>Save</button>
          <button>Delete Account</button>
        </div>
      </form>
    </div>
  );
}

export default SettingsPage;
