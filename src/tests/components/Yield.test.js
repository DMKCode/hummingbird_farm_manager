import React from "react";
import ReactDOM from "react-dom";

import Yield from "../../components/Yield";

it("renders yield details", () => {
  const div = document.createElement("section");
  ReactDOM.render(
    <Yield yieldPotential={0} currentCrop={{}} currentField={{}} />,
    div
  );
});
