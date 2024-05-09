import React from "react";

const NotFound = ({ msg }) => {
  return (
    <div className="bg-red-100 border border-1 border-red-800 rounded p-2 m-4 text-red-700">
      <strong>Error:</strong> {msg ? msg : "Page Not Found"}
    </div>
  );
};

export default NotFound;
