import React, { useCallback } from "react";
import { Item } from "../../types/search";
import styled from "@emotion/styled";

type ResultsListProps = {
  onSelect?: (item: Item) => void;
  items: Item[];
} & Omit<JSX.IntrinsicElements["ul"], "onSelect">;

const ResultsListWrapper = styled.ul(() => ({
  background: "white",
  border: "1px solid hsl(0, 0%, 80%)",
  boxShadow: "0.5rem 0.5rem 1rem hsl(0, 0%, 90%)",
  listStyle: "none",
  margin: 0,
  padding: 0,
  width: "100%",
}));

const ListItem = styled.li(() => ({
  lineHeight: "1.5rem",
  margin: 0,
  padding: "0.5rem 1rem",
}));

export const ResultsList = ({
  onSelect,
  items,
  ...props
}: ResultsListProps) => {
  const handleOnClick = useCallback(
    (item) => onSelect && onSelect(item),
    [onSelect]
  );

  return (
    <ResultsListWrapper {...props}>
      {items.map((item, index) => {
        return (
          <ListItem key={"item" + index} onClick={() => handleOnClick(item)}>
            {item.name}, {item.state.abbreviation}
          </ListItem>
        );
      })}
    </ResultsListWrapper>
  );
};

export default ResultsList;
