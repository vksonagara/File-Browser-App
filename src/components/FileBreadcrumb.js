import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Breadcrumbs, Link, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center"
  },
  paper: {
    padding: theme.spacing(1)
  }
}));

export default function FileBreadcrumb() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.paper}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link color="inherit" href="#">
            Home
          </Link>
          <Link color="inherit" href="#">
            Documents
          </Link>
          <Typography color="textPrimary">photo.jpeg</Typography>
        </Breadcrumbs>
      </Paper>
    </div>
  );
}
