import React from "react";
interface MessageProps {
  text: string;
  type: "success" | "failure";
}

const Message = ({ text, type }: MessageProps) => {
  const messageStyle = {
    padding: "8px",
    borderRadius: "8px",
    color: type === "success" ? "#4CAF50" : "#F44336",
    marginBottom: "15px",
    backgroundColor: type === "success" ? "#E8F5E9" : "#FFEBEE",
    border: "2px solid",
    borderColor: type === "success" ? "#A5D6A7" : "#FFCDD2",
  };
  return (
    <div style={messageStyle}>
      <p style={{ color: "#666", fontSize: "18px" }}>{text}</p>
    </div>
  );
};

export default Message;
