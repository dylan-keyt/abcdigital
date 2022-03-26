import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { ResultsList } from "../ResultsList";
import iconPath from "../Icons/icons.svg";
import { getSuburbs } from "../../api/suburbs";
import styled from "@emotion/styled";
import { NO_SUBURB_SELECTED } from "../../constants/suburbs";
import { Item } from "../../types/search";

const SearchSection = styled.section(() => ({
  display: "flex",
  alignItems: "center",
}));

const SuburbLabel = styled.div(() => ({
  width: "10%",
  minWidth: "80px",
  alignSelf: "flex-start",
  paddingTop: "12px",
}));

const SearchBarWrapper = styled.div(() => ({
  display: "flex",
  width: "90%",
  flexDirection: "column",
  alignItems: "center",
}));

const Flex = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
}));

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

  const handleInputChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const target = event.target as HTMLInputElement;
      setSearchQuery(target.value);
    },
    []
  );

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
      <SuburbLabel>Suburb</SuburbLabel>
      <SearchBarWrapper>
        <Flex>
          <Input
            onChange={handleInputChange}
            value={searchQuery}
            aria-label="Suburb search input"
            marginRight="-38px"
          />
          <Button
            onClick={handleButtonClick}
            aria-label="Submit search query"
            height="42px;"
          >
            <svg viewBox="0 0 24 24" width="24" height="16">
              <use xlinkHref={iconPath + "#dls-icon-arrow-right"} />
            </svg>
          </Button>
        </Flex>
        {!!searchResults.length && (
          <ResultsList onSelect={handleItemSelect} items={searchResults} />
        )}
      </SearchBarWrapper>
    </SearchSection>
  );
};

export default SearchBar;
