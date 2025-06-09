import { useState } from "react";
import "../../App.css";
import RemoveButton from "./RemoveButton";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";
import axios from "axios";

interface CollectionProps {
  id: number;
  title: string;
  description: string;
  image: string;
  func: () => void;
}

function CollectionItem({
  id,
  title,
  description,
  image,
  func,
}: CollectionProps) {
  const [edit, openEdit] = useState(false);
  const [formData, setFormData] = useState({
    title: title,
    description: description,
  });

  const handleChange = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/edititem", {
      id,
      title: formData.title,
      description: formData.description,
    });
    console.log(response);
    openEdit(false);
  };

  async function handleDelete() {
    console.log("DELETING");
    console.log(id);
    const response = await axios.post("http://localhost:8080/deleteitem/" + id);
    console.log(response);
    func();
  }
  return (
    <div>
      {!edit ? (
        <div className="CollectionItem">
          <img src={image} />
          <h3>{title}</h3>
          <p>{description}</p>
          <RemoveButton func={() => handleDelete()} />
          <EditButton func={() => openEdit(!edit)} />
        </div>
      ) : (
        <div className="CollectionItem">
          <img src={image} />
          <form onSubmit={handleChange}>
            <input
              type="text"
              defaultValue={title}
              name="title"
              className="ItemTitleEdit"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <textarea
              defaultValue={description}
              rows={7}
              name="description"
              className="ItemDescEdit"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
            <div className="SaveButton">
              <button type="submit" onClick={func}>
                &#10003;
              </button>
            </div>
            <EditButton func={() => openEdit(!edit)} />
          </form>
        </div>
      )}
    </div>
  );
}

CollectionItem.defaultProps = {
  title: "Default Title",
  description: "Default Description",
  image: "https://placehold.co/600x400",
};

export default CollectionItem;
