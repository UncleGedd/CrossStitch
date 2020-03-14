import React from "react";
import { CompactPicker } from "react-color";

export class ColorPicker extends React.Component {
  render() {
    return (
      <div>
        <h3 className="color-picker-title" style={{ marginBottom: 2 }}>
          Color Picker
        </h3>
        <CompactPicker
          color={this.props.selectedColor}
          onChangeComplete={this.props.handleColorChange}
        />
      </div>
    );
  }
}
