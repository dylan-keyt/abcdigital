import React from "react";
import { SearchBar } from "./components/SearchBar";

// TODO: (DK) Move these to an appropriate place.
const API_URL = "http://localhost:8010/proxy/suburbs.json?q=";

const API_SAMPLE = [
  { name: "Sydney South", state: { abbreviation: "NSW" } },
  { name: "Sydney", state: { abbreviation: "NSW" } },
  { name: "Sydney International Airport", state: { abbreviation: "NSW" } },
  { name: "Sydney Domestic Airport", state: { abbreviation: "NSW" } },
  { name: "Sydenham", state: { abbreviation: "VIC" } }
];

export default function App() {
  return (
    <SearchBar />
  );
}
