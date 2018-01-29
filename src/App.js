import React, { Component } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import farm from "./data/farm.json";
import crops from "./data/crops.json";
import CropsList from "./components/CropsList";
import Yield from "./components/Yield";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCrop: {},
      currentField: {},
      yieldPotential: 0,
      error: false
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchFarm = () =>
    fetch(`https://private-bf7f31-hummingbirdsimple.apiary-mock.com/farm`);

  fetchCrops = () =>
    fetch(`https://private-bf7f31-hummingbirdsimple.apiary-mock.com/crops`);

  fetchData = () => {
    this.fetchFarm()
      .then(data => data.json())
      .then(data => {
        this.setState({ farm: data, isFetchingFarm: false });
      })
      .catch(error => {});

    this.fetchCrops()
      .then(data => data.json())
      .then(data => {
        this.setState({ crops: data, isFetchingCrops: false });
      })
      .catch(error => {});
  };

  handleCropClick = crop => {
    this.setState({
      currentCrop: crop
    });
  };

  handleFieldClick = field => {
    if (!this.state.currentCrop.hasOwnProperty("name")) {
      this.setState({ error: true });
      return;
    }

    this.setState({ currentField: field });

    const potentialYield = this.calculateYieldPotential(field);
    this.setState({ yieldPotential: potentialYield, error: false });
  };

  calculateYieldPotential = field => {
    const potentialYield =
      this.state.currentCrop.expected_yield *
      field.hectares /
      (this.state.currentCrop.disease_risk_factor *
        field.disease_susceptibility) *
      this.state.currentCrop.price_per_tonne;

    return potentialYield;
  };

  render() {
    return (
      <section className="dashboard">
        <header className="heading_dashboard">
          <h1>Farm Manager Dashboard</h1>
          <p>
            Welcome to the farm manager dashboard. Select a crop below to add to
            field.
          </p>
        </header>
        {this.state.error ? (
          <p className="error">Please select a crop first.</p>
        ) : null}
        <section>
          <Map className="map" center={farm.centre.coordinates} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {farm.fields.map(field => (
              <GeoJSON
                color={
                  this.state.currentField.name === field.name ? "green" : "blue"
                }
                key={field.name}
                data={field.boundary}
                onClick={() => this.handleFieldClick(field)}
              />
            ))}
          </Map>
          <section className="content">
            <header className="heading_yield">
              {this.state.currentCrop.name ? (
                <button onClick={this.handleRemoveCrop}>
                  Remove: {this.state.currentCrop.name}
                </button>
              ) : null}
            </header>
            <CropsList crops={crops} onClick={this.handleCropClick} />
            <Yield
              yieldPotential={this.state.yieldPotential}
              currentCrop={this.state.currentCrop}
              currentField={this.state.currentField}
            />
          </section>
        </section>
      </section>
    );
  }
}

export default App;
