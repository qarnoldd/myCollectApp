import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "../../App.css";
import RemoveButton from "./RemoveButton";
interface CollectionProps {
  title: string;
  description: string;
  image: string;
}

function CollectionItem({ title, description, image }: CollectionProps) {
  return (
    <div className="CollectionItem">
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <RemoveButton />
    </div>
  );
}

CollectionItem.defaultProps = {
  title: "Default Title",
  description: "Default Description",
  image: "https://placehold.co/600x400",
};

export default CollectionItem;
