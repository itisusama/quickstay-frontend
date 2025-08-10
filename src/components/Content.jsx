import React from "react";

export default function Content({ children, className = "" }) {
  return (
    <div className={`w-full px-4 md:px-16 lg:px-24 xl:px-32 ${className}`}>
      {children}
    </div>
  );
}