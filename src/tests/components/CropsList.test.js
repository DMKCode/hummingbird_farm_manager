import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import sinon from "sinon";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import CropsList from "../../components/CropsList";
import crops from "../../data/crops.json";

it("renders crops list", () => {
  const div = document.createElement("section");
  ReactDOM.render(<CropsList crops={crops} />, div);
});

it("handles crop list item click", () => {
  const callback = sinon.spy();
  const wrapper = shallow(<CropsList crops={crops} onClick={callback} />);

  expect(wrapper.find("ul").length).toBe(1);

  wrapper
    .find("li")
    .first()
    .props()
    .onClick();

  expect(callback.called).toBe(true);
});
