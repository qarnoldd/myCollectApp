import { useState } from "react";
import "../../App.css";
import EditButton from "../collection/EditButton";
import RemoveButton from "../collection/RemoveButton";
import { Link } from "react-router-dom";
interface CollectionProps {
  id: number;
  icon: string;
  title: string;
  numItems: number;
}

function Group({ id, icon, title, numItems }: CollectionProps) {
  return (
    <Link to="/collection" state={{ id }} className="Group">
      <img src={icon} />
      <div>
        <h3>{title}</h3>
        <p>Number of items: {numItems}</p>
      </div>
      <RemoveButton func={() => console.log("delete")} />
      <EditButton func={() => console.log("EDIT GROUP PRESSED")} />
    </Link>
  );
}

Group.defaultProps = {
  icon: "https://placehold.co/600x400",
  title: "Default Title",
  numItems: 0,
};

export default Group;
