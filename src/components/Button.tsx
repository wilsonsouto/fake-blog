import React, { ReactEventHandler } from "react";

interface ButtonProps {
  onClick: ReactEventHandler<HTMLButtonElement>;
  text: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600 sm:text-lg"
    >
      {props.text}
    </button>
  );
}
