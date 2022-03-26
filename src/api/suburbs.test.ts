import mockAxios from "jest-mock-axios";
import { SUBURBS_ENDPOINT } from "../constants/url";
import { getSuburbs } from "./suburbs";

const mockItems = [
  { name: "Aldersyde", state: { abbreviation: "WA" } },
  { name: "Melbourne", state: { abbreviation: "VIC" } },
  { name: "Sydney South", state: { abbreviation: "NSW" } },
  { name: "Sydney", state: { abbreviation: "NSW" } },
  { name: "Sydney Domestic Airport", state: { abbreviation: "NSW" } },
  { name: "Sydney International Airport", state: { abbreviation: "NSW" } },
  { name: "Sydenham", state: { abbreviation: "VIC" } },
  { name: "Sydney Markets", state: { abbreviation: "NSW" } },
  { name: "University of Sydney", state: { abbreviation: "NSW" } },
];

describe("getSuburbs", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("should only return a max of 5 results which start with the search input value", async () => {
    mockAxios.get.mockResolvedValue({ data: mockItems });

    const result = await getSuburbs("syd");
    expect(mockAxios.get).toHaveBeenCalledWith(`${SUBURBS_ENDPOINT}?q=syd`);

    // Valid results
    expect(result).toEqual([
      { name: "Sydney South", state: { abbreviation: "NSW" } },
      { name: "Sydney", state: { abbreviation: "NSW" } },
      { name: "Sydney Domestic Airport", state: { abbreviation: "NSW" } },
      { name: "Sydney International Airport", state: { abbreviation: "NSW" } },
      { name: "Sydenham", state: { abbreviation: "VIC" } },
    ]);

    // No match
    expect(result).not.toContain({
      name: "Sydney Markets",
      state: { abbreviation: "NSW" },
    });
    expect(result).not.toContain({
      name: "Aldersyde",
      state: { abbreviation: "WA" },
    });
    expect(result).not.toContain({
      name: "Melbourne",
      state: { abbreviation: "VIC" },
    });
    expect(result).not.toContain({
      name: "University of Sydney",
      state: { abbreviation: "NSW" },
    });

    // No results, return empty array
    expect(await getSuburbs("brisbane")).toEqual([]);
  });
});
