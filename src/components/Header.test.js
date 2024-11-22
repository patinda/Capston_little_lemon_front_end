import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders the logo", () => {
  render(<Header />);
  const logo = screen.getByAltText("Little Lemon Logo");
  expect(logo).toBeInTheDocument();
});
