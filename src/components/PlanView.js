import React from "react";

export default function PlanView({ text }) {
  return (
    <div
      style={{
        background: "#f8f8f8",
        borderRadius: "8px",
        padding: "16px",
        marginTop: "20px",
        whiteSpace: "pre-wrap",
      }}
    >
      <h3>Your Task Plan:</h3>
      <p>{text}</p>
    </div>
  );
}
