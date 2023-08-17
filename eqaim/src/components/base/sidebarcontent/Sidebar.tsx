import React from "react";
import Card1 from "../cards/Card1";
import Card2 from "../cards/Card2";
import Card3 from "../cards/Card3";

function Sidebar() {
  return (
    <div>
      <div>
        <Card1 />
      </div>
      <div>
        <Card2 />
      </div>
      <div>
        <Card3 />
      </div>
    </div>
  );
}

export default Sidebar;
