import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app", () => {
  it("should render the page", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /Search/i }));
    expect(screen.getByRole("textbox", { name: /Suburb search input/i }));
  });
});
