import { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

const Card = styled.div`
  position: fixed;
  background: white;
  max-width: 480px;
  min-width: 320px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  border-radius: 10px;
`;

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <Backdrop onClick={onClose}>
      <Card onClick={(e) => e.stopPropagation()}>{children}</Card>
    </Backdrop>,
    document.getElementById("portal")
  );
}
