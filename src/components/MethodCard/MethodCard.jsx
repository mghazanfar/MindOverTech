import React from "react";
import { Box } from "@material-ui/core";
import { FSSplitSerifRegular } from "../Typography/FSSplitSerifRegular";
import { methodCardStyles } from "./methodCard.styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import { MethodCardShape } from "./MethodCardShape";

/**
 * Props for Method Card.
 * @param {string} title - The title of the card.
 * @param {string} color - The color variant of card, default is white, pink is default color for the egg-like shape.
 * Did not support shape's color as design is telling about the 6 contrasts
 * @param {boolean} ripple - false by default. Shows a beautiful ripple effect onClick if true. Need to work on this ripple effect so width is aligned with other variants.
 */

export const MethodCard = ({ color, ripple, title, number }) => {
  const classes = methodCardStyles();
  let bgColor = color;
  let shapeColor = "pink";
  switch (bgColor) {
    case "purple":
      bgColor = "#7E2969";
      shapeColor = "#E4007D";
      break;
    case "navyBlue":
      bgColor = "#0A2F49";
      shapeColor = "#FFDE16";
      break;
    case "yellow":
      bgColor = "#FF9533";
      shapeColor = "#262C66";
      break;
    case "teal":
      bgColor = "#049B9B";
      shapeColor = "#F05354";
      break;
    case "pink":
      bgColor = "#F3889B";
      shapeColor = "#6C82C0";
      break;
    case "red":
      bgColor = "#ED2124";
      shapeColor = "#6BBEAB";
      break;
  }

  return (
    <Box
      bgcolor={bgColor}
      color="#ffffff"
      className={classes.container}
      component={ripple ? ButtonBase : "div"}
    >
      <MethodCardShape
        color={shapeColor}
        className={classes.shape}
        number={number}
      />
      <FSSplitSerifRegular text={title} />
    </Box>
  );
};
