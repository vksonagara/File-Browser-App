import React from "react";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  margin: theme.spacing(1)
}));

export default function AddFile() {
  const classes = useStyles();

  return (
    <Fab size="large" color="secondary" className={classes.margin}>
      <NoteAddIcon />
    </Fab>
  );
}
