import React from "react";
import { typographyStyles } from "./Typography.styles";
import { Typography } from "@material-ui/core";

export const FSSplitSerifRegular = ({ text, extendingClass, ...props }) => {
  const classes = typographyStyles();

  return (
    <Typography className={[classes.fsSplitSerifRegular, extendingClass]}>
      {text}
    </Typography>
  );
};
