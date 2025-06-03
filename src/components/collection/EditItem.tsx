import { useState, ChangeEvent } from "react";

interface ModalProps {
  func: () => void;
}

export default function EditItem({ func }: ModalProps) {
  const [file, setFile] = useState<string | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files) return;
    const file = files[0];
    setFile(URL.createObjectURL(file));
  }
  return (
    <div className="NewItem">
      <div className="NewItemContainer">
        <h2>New Item</h2>
        <form>
          <img
            src={file ?? "https://placehold.co/300x300"}
            alt="Upload preview"
            className="ImgPreview"
          />
          <input type="file" onChange={handleChange} />
          <h3>Title</h3>
          <input type="text"></input>
          <h3>Description</h3>
          <input type="text"></input>
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
