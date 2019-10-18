import React from "react";
import { TableRow, TableCell, Grid, Link, IconButton } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export default function AddFile() {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Grid container alignItems="center">
          <DescriptionIcon />
          <Link href="#" component="button" variant="body2">
            Documents
          </Link>
        </Grid>
      </TableCell>
      <TableCell align="right">Today</TableCell>
      <TableCell align="right">5</TableCell>
      <TableCell align="right">
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
