import React from "react";
import ReactDOM from "react-dom";

import Yield from "../../components/CropsList";

it("renders yield details", () => {
  const div = document.createElement("section");
  ReactDOM.render(<Yield />, div);
});
