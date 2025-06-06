import { useState, ChangeEvent } from "react";
import axios from "axios";

interface ModalProps {
  collectionid: number;
  func: () => void;
}

export default function NewItem({ collectionid, func }: ModalProps) {
  const [file, setFile] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    collectionid: collectionid,
    title: "",
    description: "",
    image: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files) return;
    const file = files[0];
    setFile(URL.createObjectURL(file));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/createitem", {
      collection_id: collectionid,
      title: formData.title,
      description: formData.description,
      image: formData.image,
    });
    console.log(response);
    this.forceUpdate();
  };

  return (
    <div className="NewItem">
      <div className="NewItemContainer">
        <h2>New Item</h2>
        <form onSubmit={handleSubmit}>
          <img
            src={file ?? "https://placehold.co/300x300"}
            alt="Upload preview"
            className="ImgPreview"
          />
          <input type="file" onChange={handleChange} />
          <h3>Title</h3>
          <input
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          ></input>
          <h3>Description</h3>
          <input
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></input>
          <div className="NewBottom">
            <button className="addNewButton" type="submit">
              Add New
            </button>
            <button onClick={func} className="CloseButton">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
