import React from "react";

const CameraSearchBar = () => {
  return (
    <div className="input input-lg flex max-w-sm space-x-3 border border-base-300 bg-base-100 rounded-full px-2 py-2 shadow-sm">
      <span className="icon-[tabler--search] text-base-content/80 my-auto size-6 shrink-0"></span>
      <input type="search" placeholder="Search" />
    </div>
  );
};

export default CameraSearchBar;
