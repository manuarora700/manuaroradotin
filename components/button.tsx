// @ts-nocheck
import React from "react";

export default function Button({ text, url }) {
  return (
    <a
      href={url}
      style={{ color: "#ffffff", textDecoration: "none" }}
      className="mr-2 inline-block rounded-md px-6 py-3 bg-black text-gray-50 text-sm border border-gray-100"
    >
      {text}
    </a>
  );
}
