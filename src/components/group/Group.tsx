import { useState } from "react";
import "../../App.css";
import EditButton from "../collection/EditButton";
import RemoveButton from "../collection/RemoveButton";
import { Link } from "react-router-dom";
import axios from "axios";
interface CollectionProps {
  id: number;
  icon: string;
  title: string;
  numItems: number;
  func: () => void;
}

function Group({ id, icon, title, numItems, func }: CollectionProps) {
  const [edit, setEdit] = useState(false);

  async function handleSubmit() {
    console.log("EDITING");
    const response = await axios.post("test");
    console.log(response);
    window.location.reload();
  }

  async function handleDelete() {
    console.log("DELETING");
    console.log(id);
    const response = await axios.post(
      "http://localhost:8080/deletecollection/" + id
    );
    console.log(response);
    func();
    window.location.reload();
  }

  return (
    <div>
      {!edit ? (
        <div className="GroupContainer">
          <Link to="/collection" state={{ id }} className="Group">
            <img src={icon} />
            <div>
              <h3>{title}</h3>
              <p>Number of items: {numItems}</p>
            </div>
          </Link>
          <button className="bigedit" onClick={() => setEdit(!edit)}>
            ...
          </button>
        </div>
      ) : (
        <div className="GroupContainer">
          <Link to="/collection" state={{ id }} className="Group">
            <img src={icon} />
            <div>
              <form onSubmit={handleSubmit}>
                <h3>Title</h3>
                <input defaultValue={title} />
              </form>
            </div>
          </Link>
          <button className="bigedit" onClick={() => setEdit(!edit)}>
            ...
          </button>
          <button className="bigdel" onClick={handleDelete}>
            -
          </button>
        </div>
      )}
    </div>
  );
}

Group.defaultProps = {
  icon: "https://placehold.co/600x400",
  title: "Default Title",
  numItems: 0,
};

export default Group;
