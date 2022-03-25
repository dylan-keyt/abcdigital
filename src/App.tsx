/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from "react";
import { SearchBar } from "./components/SearchBar";
import { jsx } from "@emotion/react";

export const App = () => {
  return (
    <Fragment>
      <h1>Search</h1>
      <SearchBar />
    </Fragment>
  );
};

export default App;
