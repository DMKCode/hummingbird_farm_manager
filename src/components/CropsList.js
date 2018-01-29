import React, { Component } from "react";
import PropTypes from "prop-types";

class CropsList extends Component {
  static propTypes = {
    crops: PropTypes.object
  };

  render() {
    return (
      <section className="nav">
        <ul className="list_crops">
          <li>list item</li>
        </ul>
      </section>
    );
  }
}

export default CropsList;
