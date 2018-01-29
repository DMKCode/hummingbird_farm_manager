import React from "react";
import ReactDOM from "react-dom";

import CropsList from "../../components/CropsList";

it("renders crops list", () => {
  const div = document.createElement("section");
  ReactDOM.render(<CropsList />, div);
});
