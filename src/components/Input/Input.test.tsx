import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("should render with a passed value and placeholder text", () => {
    render(
      <Input
        value="test value"
        aria-label="search input"
        placeholder="Search..."
      />
    );

    const input = screen.getByRole("textbox", { name: /search input/i });
    expect(input).toBeVisible();
    expect(input).toHaveAttribute("value", "test value");
    expect(input).toHaveAttribute("placeholder", "Search...");
  });

  it("should call onChange with a new value", () => {
    const onChange = jest.fn();
    render(<Input aria-label="search input" onChange={onChange} />);

    const input = screen.getByRole("textbox", { name: /search input/i });
    expect(input).toBeVisible();

    fireEvent.change(input, { target: { value: "test" } });
    expect(input).toHaveAttribute("value", "test");
    expect(onChange).toHaveBeenCalledWith("test");
  });
});
