import React from "react";
import { SvgIcon, Box } from "@material-ui/core";
import { FSSplitSerifRegular } from "../Typography/FSSplitSerifRegular";
import { methodCardStyles } from "./methodCard.styles";

/**
 * Props for Method Card Egg-Like Shape.
 * @param {string} number - a number to show inside of the shape.
 * @param {string} color - The color of the egg-like shape component, being handled by parent.
 * Did not support shape's color as design is telling about the 6 contrasts.
 */

export const MethodCardShape = ({ color, number, ...props }) => {
  const classes = methodCardStyles();
  return (
    <Box position="relative">
      <SvgIcon viewBox="0 0 28 28" style={{ fontSize: 28 }} {...props}>
        <path
          d="M12.8252 27.9279C4.40559 27.1806 8.9889e-07 23.0708 1.22552e-06 15.5985C1.57321e-06 7.64411 5.13633 -9.99403e-07 13.4738 -6.34962e-07C21.8112 -2.70521e-07 28 7.64411 28 15.5985C28 23.5529 21.2447 28.6751 12.8252 27.9279Z"
          fill={color || "#E4007D"}
        />
      </SvgIcon>
      <FSSplitSerifRegular
        text={number}
        extendingClass={number > 9 ? classes.shapeTextLong : classes.shapeText}
      />
    </Box>
  );
};
