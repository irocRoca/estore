import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Modal from "../Modal";

export default function Auth({ open, setOpen }) {
  const [rotate, setRotate] = useState(false);
  const handleSwitch = () => setRotate(!rotate);
  const handleModalClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleModalClose}>
      {rotate ? (
        <Register
          viewSwitch={handleSwitch}
          handleModalClose={handleModalClose}
        />
      ) : (
        <Login viewSwitch={handleSwitch} handleModalClose={handleModalClose} />
      )}
    </Modal>
  );
}
