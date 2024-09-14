import React, { useState, useEffect } from "react";
import Message from "./Message";

interface SuccessMessageProps {
  text: string;
}

const MessageSuccess: React.FC<SuccessMessageProps> = ({ text }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

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
