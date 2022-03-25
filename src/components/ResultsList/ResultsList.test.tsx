import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ResultsList } from "./ResultsList";

const mockItems = [
  { name: "Sydney South", state: { abbreviation: "NSW" } },
  { name: "Sydenham", state: { abbreviation: "VIC" } }
];

describe("ResultsList", () => {
  it("should render a list of items and handle onClick events", () => {
    const onSelect = jest.fn();
    render(<ResultsList items={mockItems} onSelect={onSelect} />);

    const resultsList = screen.getByRole("list");
    expect(resultsList.firstChild).toHaveTextContent("Sydney South, NSW");
    expect(resultsList.lastChild).toHaveTextContent("Sydenham, VIC");

    fireEvent.click(resultsList.children[0]);
    expect(onSelect).toHaveBeenCalled();
  });

  it("should not render any items if there are none", () => {
    const onSelect = jest.fn();
    render(<ResultsList items={[]} onSelect={onSelect} />);

    expect(screen.getByRole("list").firstChild).not.toBeInTheDocument();
  });
});
