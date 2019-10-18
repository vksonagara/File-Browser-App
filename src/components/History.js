import React, { Fragment } from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export default function Header() {
  return (
    <Fragment>
      <IconButton color="inherit" aria-label="back">
        <ArrowBackIcon />
      </IconButton>
      <IconButton color="inherit" aria-label="forward">
        <ArrowForwardIcon />
      </IconButton>
    </Fragment>
  );
}
