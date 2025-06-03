import { useState } from "react";
import "../../App.css";
import RemoveButton from "./RemoveButton";
import EditButton from "./EditButton";
interface CollectionProps {
  title: string;
  description: string;
  image: string;
  func: any;
}

function CollectionItem({ title, description, image, func }: CollectionProps) {
  const [modalOpen, setOpen] = useState(false);
  return (
    <div className="CollectionItem">
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <RemoveButton />
      <EditButton func={func} />
    </div>
  );
}

CollectionItem.defaultProps = {
  title: "Default Title",
  description: "Default Description",
  image: "https://placehold.co/600x400",
};

export default CollectionItem;
