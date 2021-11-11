import React from "react";

export default function Login({ viewSwitch }) {
  return (
    <div onClick={viewSwitch}>
      Login <span>Switch Page</span>
    </div>
  );
}
