import React from "react";

const PlanLayout = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        margin: "auto",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
};

export default PlanLayout;
