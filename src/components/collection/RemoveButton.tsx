import { useState } from "react";
import "../../App.css";
interface RemoveButtonProps {
  func: () => void;
}
function RemoveButton({ func }: RemoveButtonProps) {
  return (
    <div className="RemoveButton" onClick={func}>
      <button>-</button>
    </div>
  );
}

export default RemoveButton;
