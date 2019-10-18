import React from "react";
import { Grid } from "@material-ui/core";
import FileBreadcrumb from "./FileBreadcrumb";
import FileSearch from "./FileSearch";
import History from "./History";

export default function Navigation() {
  return (
    <Grid container alignItems="center" justify="space-between">
      <Grid item>
        <Grid container alignItems="center">
          <Grid item>
            <History />
          </Grid>
          <Grid item>
            <FileBreadcrumb />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <FileSearch />
      </Grid>
    </Grid>
  );
}
