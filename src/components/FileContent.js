import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import FileTable from "./FileTable";
import AddFile from "./AddFile";
import AddFolder from "./AddFolder";
import FileInput from "./FileInput";

const useStyles = makeStyles(theme => ({
  container: {
    padding: 40,
    margin: "auto",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    height: "100vh"
  },
  addIcons: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

function FileContent(props) {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid className={classes.container}>
        <FileTable />
        {props.isFileInputVisible ? <FileInput /> : ""}
        <Grid
          container
          justify="center"
          className={classes.addIcons}
          spacing={3}
        >
          <Grid item>
            <AddFolder />
          </Grid>
          <Grid item>
            <AddFile />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    isFileInputVisible: state.visibilityFilter.isFileInputVisible
  };
};

export default connect(
  mapStateToProps,
  null
)(FileContent);
