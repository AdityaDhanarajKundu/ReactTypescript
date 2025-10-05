import React from "react";

type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = ({status}: StatusProps) => {
  let message;

  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Success!";
  } else if (status === "error") {
    message = "Error!";
  }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

export default Status;
