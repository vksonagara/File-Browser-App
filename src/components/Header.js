import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import Navigation from "./Navigation";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Navigation />
        </Toolbar>
      </AppBar>
    </div>
  );
}
