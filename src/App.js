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
      yieldPotential: ""
    };
  }

  handleCropClick = crop => {
    this.setState({
      currentCrop: crop
    });
  };

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to th Hummingbird starter app</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload. This
          is just a starter App, change it, remove things and add things however
          you want.
        </p>
        <Map
          style={{ width: "500px", height: "500px" }}
          center={farm.centre.coordinates}
          zoom={13}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {farm.fields.map(field => (
            <GeoJSON key={field.name} data={field.boundary} />
          ))}
        </Map>
        <CropsList crops={crops} onClick={this.handleCropClick} />
        <Yield
          yieldPotential={this.state.yieldPotential}
          currentCrop={this.state.currentCrop}
          currentField={this.state.currentField}
        />
      </div>
    );
  }
}

export default App;
