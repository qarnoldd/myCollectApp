import { useState } from "react";
import "../../App.css";
interface EditButtonProps {
  func: () => void;
}
function EditButton({ func }: EditButtonProps) {
  return (
    <div className="EditButton">
      <button onClick={func}>...</button>
    </div>
  );
}

export default EditButton;
