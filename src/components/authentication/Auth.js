import { useState, useContext } from "react";
import Register from "./Register";
import Login from "./Login";
import Modal from "../Modal";
import { globalContext } from "../../context/global";

export default function Auth() {
  const [rotate, setRotate] = useState(false);
  const { modelOpen, setModelOpen } = useContext(globalContext);
  const handleSwitch = () => setRotate(!rotate);
  const handleModalClose = () => setModelOpen(false);

  return (
    <Modal open={modelOpen} onClose={handleModalClose}>
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
