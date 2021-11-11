import ReactDOM from "react-dom";
import "./modal.css";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="backdrop" onClick={onClose}>
      <div className="card" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
}
