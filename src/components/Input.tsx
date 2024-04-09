import React from "react";

interface InputProps {
  id: string;
}

export default function Input(props: InputProps) {
  return (
    <input
      id={props.id}
      type="text"
      className="mb-4 w-full rounded-md bg-gray-200 px-3 py-2"
      placeholder="Insert here..."
    />
  );
}
