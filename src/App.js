import React from "react";
import "./styles.css";
import { Grid } from "./Grid";
import { ColorPicker } from "./ColorPicker";
export default class App extends React.Component {
  state = {
    selectedColor: this.props.color
  };

  GRID_SIZE = 15;

  handleColorChange = (color, e) => {
    this.setState({ selectedColor: color.hex });
  };

  render() {
    return (
      <div className="App">
        <h2 style={{ marginBottom: 2 }}>Pixel Art</h2>
        <Grid size={this.GRID_SIZE} selectedColor={this.state.selectedColor} />
        <ColorPicker
          selectedColor={this.state.selectedColor}
          handleColorChange={this.handleColorChange}
        />
      </div>
    );
  }
}
