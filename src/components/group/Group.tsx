import { useState } from "react";
import "../../App.css";
import EditButton from "../collection/EditButton";
import RemoveButton from "../collection/RemoveButton";
interface CollectionProps {
  icon: string;
  title: string;
  numItems: number;
}

function Group({ icon, title, numItems }: CollectionProps) {
  return (
    <div className="Group">
      <img src={icon} />
      <div>
        <h3>{title}</h3>
        <p>Number of items: {numItems}</p>
      </div>
      <RemoveButton />
      <EditButton func={() => console.log("EDIT GROUP PRESSED")} />
    </div>
  );
}

Group.defaultProps = {
  icon: "https://placehold.co/600x400",
  title: "Default Title",
  numItems: 0,
};

export default Group;
