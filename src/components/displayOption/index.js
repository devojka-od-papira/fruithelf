import React from "react";
import List from "../list";
import Card from "./../card";

function DisplayOption() {
  return (
    <div>
      <Card />
      or
      <List />
    </div>
  );
}

export default DisplayOption;
