import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { ResultsList } from "../ResultsList";
import iconPath from "../Icons/icons.svg";
import { getSuburbs } from "../../api/suburbs";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const fetchSuburbs = useCallback(async () => {
    const response = await getSuburbs(searchQuery);
    response && setSearchResults(response.data);
  }, [searchQuery]);

  useEffect(() => {
    fetchSuburbs();
  }, [fetchSuburbs, searchQuery]);

  const handleOnChange = useCallback((value) => {
    setSearchQuery(value);
  }, []);

  const handleOnClick = useCallback(() => {
    alert(searchQuery);
  }, [searchQuery]);

  const handleOnSelect = useCallback((value) => {
    setSearchQuery(value);
  }, []);

  // TODO: (DK) Implement these states in a stable manner
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error. Please try again.</p>;

  return (
    <section>
      <div>Suburb</div>
      <Input onChange={handleOnChange} value={searchQuery} ariaLabel="Suburb search input" />
      <Button onClick={handleOnClick} ariaLabel="Submit search query">
        <svg viewBox="0 0 24 24" width="24" height="16">
          <use xlinkHref={iconPath + "#dls-icon-arrow-right"} />
        </svg>
      </Button>
      {searchResults && <ResultsList onSelect={handleOnSelect} items={searchResults} />}
    </section>
  );
};

export default SearchBar;
