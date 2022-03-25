import React from "react";
import { Item } from "../../types/search";
import "./ResultsList.css";

// TODO: (DK) Handle CSS props.
interface ResultsList {
  onSelect: (item: Item) => void;
  items: Item[];
}

export const ResultsList = ({ onSelect, items, ...props }: ResultsList) => {
  return (
    <ul className={"ResultsList"} {...props}>
      {items.map(function(item, index) {
        return (
          <li
            key={"item" + index}
            className="ResultsList-item"
            onClick={() => onSelect && onSelect(item)}
          >
            <button className="ResultsList-button">
              {item.name}, {item.state.abbreviation}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ResultsList;
