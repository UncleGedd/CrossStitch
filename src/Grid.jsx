import React from "react";
import { columnGenerator } from "./ColumnGenerator";

export class Grid extends React.Component {
  render() {
    return (
      <div className="grid">
        {[...Array(this.props.size).keys()].map(i =>
          columnGenerator(i, this.props.size, this.props.selectedColor)
        )}
      </div>
    );
  }
}
