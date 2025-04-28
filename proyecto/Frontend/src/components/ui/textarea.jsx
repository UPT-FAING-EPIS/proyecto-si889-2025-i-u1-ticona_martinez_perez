// src/components/ui/textarea.jsx
import React from "react";

export const Textarea = ({ value, onChange, ...props }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded-md"
      {...props}
    />
  );
};
