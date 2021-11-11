import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Auth from "./pages/Auth";

function App() {
  const [open, setOpen] = useState(true);

  const handleModalClose = (e) => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Modal open={open} onClose={handleModalClose}>
        <Auth />
      </Modal>
    </div>
  );
}

export default App;
