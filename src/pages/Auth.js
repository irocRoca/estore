import { useState } from "react";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";

export default function Auth() {
  const [rotate, setRotate] = useState(false);

  const handleSwitch = () => setRotate(!rotate);

  return (
    <>
      {rotate ? (
        <Register viewSwitch={handleSwitch} />
      ) : (
        <Login viewSwitch={handleSwitch} />
      )}
    </>
  );
}
