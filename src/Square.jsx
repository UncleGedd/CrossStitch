import React from "react";

export class Square extends React.Component {
  state = {
    color: this.props.selectedColor
  };

  getStyle = () => {
    return {
      width: 20,
      height: 20,
      backgroundColor: this.state.color,
      margin: 1,
      borderStyle: "solid",
      borderWidth: 1
    };
  };

  handleClick = () => {
    this.setState({ color: this.props.selectedColor });
  };

  render() {
    return (
      <div
        className="square"
        data-testid={`square-${this.props.index}`}
        style={this.getStyle()}
        onClick={this.handleClick}
      />
    );
  }
}
