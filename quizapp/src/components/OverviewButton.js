import React from "react";

const OverviewButton = ({ number }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
      {number}
    </button>
  );
};

export default OverviewButton;
