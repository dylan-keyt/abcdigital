/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from "react";
import { SearchBar } from "./components/SearchBar";
import { jsx } from "@emotion/react";

// TODO: (DK) Move these to an appropriate place.
const API_URL = "http://localhost:8010/proxy/suburbs.json?q=";

export const App = () => {
  return (
    <Fragment>
      <h1>Search</h1>
      <SearchBar />
    </Fragment>
  );
};

export default App;
