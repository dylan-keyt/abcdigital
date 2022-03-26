/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { ResultsList } from "../ResultsList";
import iconPath from "../Icons/icons.svg";
import { getSuburbs } from "../../api/suburbs";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import { NO_SUBURB_SELECTED } from "../../constants/suburbs";
import { Item } from "../../types/search";

const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const SearchBarGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSuburb, setSelectedSuburb] = useState(NO_SUBURB_SELECTED);
  const [searchResults, setSearchResults] = useState([]);

  const fetchSuburbs = useCallback(async () => {
    const responseData = await getSuburbs(searchQuery);
    responseData && setSearchResults(responseData);
  }, [searchQuery]);

  useEffect(() => {
    fetchSuburbs();
  }, [fetchSuburbs]);

  const handleInputChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleButtonClick = useCallback(() => {
    alert(selectedSuburb);
  }, [selectedSuburb]);

  const handleItemSelect = useCallback((item: Item) => {
    const suburbText = `${item.name}, ${item.state.abbreviation}`;
    setSearchQuery(suburbText);
    setSelectedSuburb(suburbText);
  }, []);

  // TODO: (DK) Implement these states in a stable manner
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error. Please try again.</p>;

  return (
    <SearchSection>
      <SearchBarGroup>
        <div css={css`width: 10%;`}>
          Suburb
        </div>
        <Input
          onChange={handleInputChange}
          value={searchQuery}
          ariaLabel="Suburb search input"
          marginRight="-38px"
        />
        <Button
          onClick={handleButtonClick}
          ariaLabel="Submit search query"
          height="42px;"
        >
          <svg viewBox="0 0 24 24" width="24" height="16">
            <use xlinkHref={iconPath + "#dls-icon-arrow-right"} />
          </svg>
        </Button>
      </SearchBarGroup>
      {
        !!searchResults.length &&
        <ResultsList
          onSelect={handleItemSelect}
          items={searchResults}
          width="91.3%"
          alignSelf="flex-end"
        />
      }
    </SearchSection>
  );
};

export default SearchBar;
