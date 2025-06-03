import { useState } from "react";
import "../App.css";

interface AddButtonProps {
  func: () => void;
}

function AddButton({ func }: AddButtonProps) {
  return (
    <div className="AddButton">
      <button onClick={func}>+</button>
    </div>
  );
}

export default AddButton;
