import React from "react";
import "../App.css";

function ModalWarning({ active, setActive }) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modalContent active" : "modalContent"}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="warningText">Please choose an answear</p>
        <button onClick={() => setActive(false)}>Ok</button>
      </div>
    </div>
  );
}

export default ModalWarning;
