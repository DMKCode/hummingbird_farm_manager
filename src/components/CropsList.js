import React, { Component } from "react";
import PropTypes from "prop-types";

class CropsList extends Component {
  static propTypes = {
    crops: PropTypes.array,
    onClick: PropTypes.func
  };

  render() {
    return (
      <section className="nav">
        <ul className="list_crops">
          <h2>Crops</h2>
          {this.props.crops.map(crop => (
            <li className="list-item_crops" key={crop.name}>
              <a onClick={() => this.props.onClick(crop)}>{crop.name}</a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default CropsList;
