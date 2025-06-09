import { useState, ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
interface ModalProps {
  func: () => void;
}

export default function NewCollection({ func }: ModalProps) {
  const user_id = sessionStorage.getItem("id");
  const location = useLocation();
  const [file, setFile] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
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
    console.log("RESPONSE RUNNING");
    const response = await axios.post("http://localhost:8080/collection", {
      id: user_id,
      title: formData.title,
      image: formData.image,
    });
    console.log(response);
    window.location.reload();
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
          <div className="NewBottom">
            <button className="addNewButton">Add New</button>
            <button onClick={func} className="CloseButton">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
