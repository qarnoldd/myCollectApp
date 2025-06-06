import { useState } from "react";
import "../../App.css";

interface SaveButtonProps {
  func: () => void;
}

function SaveButton({ func }: SaveButtonProps) {
  return (
    <div className="SaveButton">
      <button onClick={func}>&#10003;</button>
    </div>
  );
}

export default SaveButton;
