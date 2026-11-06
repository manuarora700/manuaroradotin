// @ts-nocheck
import React from "react";

export default function HighlightBox({ children }) {
  return (
    <span
      className="relative z-0 mt-0 mb-0 inline-block"
      style={{ marginTop: "0px", marginBottom: "0px" }}
    >
      <span
        className="z-10 block p-0 leading-0"
        style={{ marginTop: "0px", marginBottom: "0px" }}
      >
        {children}
      </span>
      <span
        className="absolute right-0 bottom-0 left-0 mt-10 inline-block h-2 bg-green-200"
        style={{ zIndex: -10 }}
      ></span>
    </span>
  );
}
