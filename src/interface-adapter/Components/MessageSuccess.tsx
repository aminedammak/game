import React, { useState, useEffect } from "react";
import Message from "./Message";

interface SuccessMessageProps {
  text: string;
}

const MessageSuccess: React.FC<SuccessMessageProps> = ({ text }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "100px",
        left: "100px",
      }}
    >
      <Message text={text} type="success" />
    </div>
  );
};

export default MessageSuccess;
