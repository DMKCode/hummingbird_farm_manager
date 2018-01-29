import React, { Component } from "react";
import PropTypes from "prop-types";

class Yield extends Component {
  static propTypes = {
    yieldPotential: PropTypes.number,
    currentCrop: PropTypes.object,
    currentField: PropTypes.object
  };

  render() {
    return (
      <section className="yield-details">
        <div>
          <div>
            <strong>Yield Potential: </strong>
            {this.props.yieldPotential}
          </div>
          <h3>Yield Configuration</h3>
          <p>
            <strong>Crop Yield Average: </strong>
            {this.props.currentCrop.expected_yield}
          </p>
          <p>
            <strong>Hectares of field: </strong>
            {this.props.currentField.hectares}
          </p>
          <p>
            <strong>Crop Risk Factor: </strong>
            {this.props.currentCrop.disease_risk_factor}
          </p>
          <p>
            <strong>Field Disease Susceptibility: </strong>
            {this.props.currentField.disease_susceptibility}
          </p>
          <p>
            <strong>Price per tonne: </strong>
            {this.props.currentCrop.price_per_tonne}
          </p>
        </div>
      </section>
    );
  }
}

export default Yield;
