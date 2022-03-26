/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useCallback } from "react";
import { css, jsx } from "@emotion/react";
import { Item } from "../../types/search";

interface ResultsList {
  onSelect?: (item: Item) => void;
  items: Item[];
  width?: string;
  alignSelf?: string;
}

export const ResultsList = ({
  onSelect,
  items,
  width,
  alignSelf,
  ...props
}: ResultsList) => {
  const handleOnClick = useCallback(
    (item) => onSelect && onSelect(item), [onSelect]
  );

  return (
    <ul
      css={css`
        background: white;
        border: 1px solid hsl(0, 0%, 80%);
        box-shadow: 0.5rem 0.5rem 1rem hsl(0, 0%, 90%);
        list-style: none;
        margin: 0;
        padding: 0;
        ${width && `width: ${width};`}
        ${alignSelf && `align-self: ${alignSelf};`}
      `}
      {...props}>
      {items.map((item, index) => {
        return (
          <li
            key={"item" + index}
            css={css`
              line-height: 1.5rem;
              margin: 0;
              padding: 0.5rem 1rem;
            `}
            onClick={() => handleOnClick(item)}
          >
            {item.name}, {item.state.abbreviation}
          </li>
        );
      })}
    </ul>
  );
};

export default ResultsList;
