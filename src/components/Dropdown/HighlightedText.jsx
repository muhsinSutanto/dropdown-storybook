import React from "react";
import classNames from "classnames";
import { escapeRegExp } from "../../helpers/utils";

const HighlightedText = ({ text, highlight }) => {
  const escapedHighlight = escapeRegExp(highlight);
  const regex = new RegExp(`(${escapedHighlight})`, "gi");
  const segments = text.split(regex);

  return segments.map((segment, index) => (
    <span
      key={index}
      className={classNames({
        "bg-blue-200": segment.toLowerCase() === highlight.toLowerCase(),
      })}
    >
      {segment}
    </span>
  ));
};

export default HighlightedText;
