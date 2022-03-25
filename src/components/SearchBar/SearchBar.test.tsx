import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import mockAxios from "jest-mock-axios";
import { act } from "react-dom/test-utils";
import { NO_SUBURB_SELECTED } from "../../constants/suburbs";

const mockItems = [
  { name: "Aldersyde", state: { abbreviation: "WA" } }
];

describe("SearchBar", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("should render without any search results or selected suburbs by default", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    render(<SearchBar />);
    expect(screen.getByText(/Suburb/i)).toBeVisible();
    expect(screen.getByRole("textbox", { name: /Suburb search input/i })).toBeVisible();
    expect(screen.queryByRole("list")).not.toBeInTheDocument();

    const button = screen.getByRole("button", { name: /Submit search query/i });
    expect(button).toBeVisible();

    // Submit button triggers default alert message
    fireEvent.click(button);
    expect(alertMock).toBeCalledWith(NO_SUBURB_SELECTED);
  });

  it("should handle click events for list items and the submit button", async () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    render(<SearchBar />);
    expect(screen.queryByRole("list")).not.toBeInTheDocument();

    await act(async () => {
      mockAxios.mockResponse({ data: mockItems });
    });

    const input = screen.getByRole("textbox", { name: /Suburb search input/i });
    fireEvent.change(input, "aldersyde");

    const listItem = screen.getByRole("list").children[0];
    expect(listItem).toBeVisible();
    expect(listItem).toHaveTextContent("Aldersyde, WA");

    // Result item updates input value
    fireEvent.click(listItem);
    expect(input).toHaveAttribute("value", "Aldersyde, WA");

    // Submit button triggers alert
    fireEvent.click(screen.getByRole("button", { name: /Submit search query/i }));
    expect(alertMock).toBeCalledWith("Aldersyde, WA");
  });
});
