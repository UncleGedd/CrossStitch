import React from "react";
import App from "../src/App";
import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import "@testing-library/jest-dom/extend-expect";

afterEach(() => cleanup);

it("renders without crashing", () => {
  const { getByText } = render(<App />);
  expect(getByText(/pixel art/i)).toBeInTheDocument();
});

it("can color a pixel", () => {
  render(<App color={"#ababab"} />);
  expect(screen.getByTestId("square-0,0")).toHaveStyle(
    "background-color: #ababab"
  );
});

// it('can change color', () => { //use enzyme spy here

// })
