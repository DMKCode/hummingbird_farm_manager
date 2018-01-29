import React from "react";
import ReactDOM from "react-dom";

import CropsList from "../../components/CropsList";
import crops from "../../data/crops.json";

it("renders crops list", () => {
  const div = document.createElement("section");
  ReactDOM.render(<CropsList crops={crops} />, div);
});
