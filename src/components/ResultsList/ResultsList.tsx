/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/react";
import { Item } from "../../types/search";

interface ResultsList {
  onSelect: (item: Item) => void;
  items: Item[];
}

export const ResultsList = ({ onSelect, items, ...props }: ResultsList) => {
  return (
    <ul
      css={css`
        background: white;
        border: 1px solid hsl(0, 0%, 80%);
        box-shadow: 0.5rem 0.5rem 1rem hsl(0, 0%, 90%);
        list-style: none;
        margin: 0;
        padding: 0;
      `}
      {...props}>
      {items.map(function(item, index) {
        return (
          <li
            key={"item" + index}
            css={css`
              line-height: 1.5rem;
              margin: 0;
              padding: 0.5rem 1rem;
            `}
            onClick={() => onSelect && onSelect(item)}
          >
            <button css={css`background: #0058cc;`}>
              {item.name}, {item.state.abbreviation}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ResultsList;
