import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { ResultsList } from "../ResultsList";

const API_URL = "http://localhost:8010/proxy/suburbs.json?q=";

const API_SAMPLE = [
  { name: "Sydney South", state: { abbreviation: "NSW" } },
  { name: "Sydney", state: { abbreviation: "NSW" } },
  { name: "Sydney International Airport", state: { abbreviation: "NSW" } },
  { name: "Sydney Domestic Airport", state: { abbreviation: "NSW" } },
  { name: "Sydenham", state: { abbreviation: "VIC" } }
];

export const SearchBar = () => {
  return (
    <section>
      TODO: Implement a suburb autocomplete using &lt;Input /&gt;,
      &lt;ResultsList /&gt; and &lt;Button /&gt; and data provided by the{" "}
      <a href="http://localhost:8010/proxy/suburbs.json?q=Syd">API</a>.
      <Button>Test button</Button>
      <Input />
      <ResultsList />
    </section>
  );
}

export default SearchBar;
