import React from "react";

export default function JsonDisplay({ data }) {
  return (
    <div>
      {Object.entries(data).map(([key, val]) => (
        <div key={key}>
          <strong>{key}:</strong> {val}
        </div>
      ))}
    </div>
  );
}
