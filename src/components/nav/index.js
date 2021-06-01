import React from "react";
import PageControl from "./../controlsPage";
import DisplayOption from "./../displayOption";
import Input from "./../input";

function Nav() {
  return (
    <div>
      <nav className="nav">
        <Input />
        <DisplayOption />
        <PageControl />
      </nav>
    </div>
  );
}
export default Nav;
