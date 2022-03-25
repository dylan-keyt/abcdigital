import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import mockAxios from "jest-mock-axios";
import { act } from "react-dom/test-utils";

const mockItems = [
  { name: "Aldersyde", state: { abbreviation: "WA" } },
  { name: "Melbourne", state: { abbreviation: "VIC" } },
  { name: "Sydney South", state: { abbreviation: "NSW" } },
  { name: "Sydney", state: { abbreviation: "NSW" } },
  { name: "Sydney International Airport", state: { abbreviation: "NSW" } },
  { name: "Sydney Domestic Airport", state: { abbreviation: "NSW" } },
  { name: "Sydenham", state: { abbreviation: "VIC" } },
  { name: "University of Sydney", state: { abbreviation: "NSW" } },
];

describe("SearchBar", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("should render without any search results by default", () => {
    render(<SearchBar />);
    expect(screen.getByText(/Suburb/i)).toBeVisible();
    expect(screen.getByRole("textbox", { name: /Suburb search input/i }));
    expect(screen.getByRole("button", { name: /Submit search query/i }));
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("should only show suggestions which start with the search input value", async () => {
    render(<SearchBar />);
    expect(screen.queryByRole("list")).not.toBeInTheDocument();

    await act(async () => {
      mockAxios.mockResponse({ data: mockItems });
    });
    fireEvent.change(screen.getByRole("textbox", { name: /Suburb search input/i }), "syd");

    const resultsList = screen.getByRole("list");
    expect(resultsList).toBeVisible();

    // Valid results
    expect(resultsList.children[0]).toHaveTextContent("Sydney South, NSW");
    expect(resultsList.children[1]).toHaveTextContent("Sydney, NSW");
    expect(resultsList.children[2]).toHaveTextContent("Sydney International Airport, NSW");
    expect(resultsList.children[3]).toHaveTextContent("Sydnenham, VIC");

    // No match
    expect(screen.queryByText("Aldersyde")).not.toBeInTheDocument();
    expect(screen.queryByText("Melbourne")).not.toBeInTheDocument();
    expect(screen.queryByText("University of Sydney")).not.toBeInTheDocument();

    // No results, list is no longer rendered at all
    fireEvent.change(screen.getByRole("textbox", { name: /Suburb search input/i }), "brisbane");
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("should handle click events for list items and the submit button", async () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    render(<SearchBar />);
    expect(screen.queryByRole("list")).not.toBeInTheDocument();

    await act(async () => {
      mockAxios.mockResponse({ data: mockItems });
    });
    fireEvent.change(screen.getByRole("textbox", { name: /Suburb search input/i }), "melbourne");

    const listItem = screen.getByRole("list").children[0];
    expect(listItem).toBeVisible();
    expect(listItem).toHaveTextContent("Melbourne, VIC");

    fireEvent.click(listItem);
    expect(screen.getByRole("textbox", { name: /Suburb search input/i })).toHaveValue("melbourne");

    fireEvent.click(screen.getByRole("button", { name: /Submit search query/i }));
    expect(alertMock).toBeCalledWith("melbourne");
  });
});
