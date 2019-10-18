import React from "react";
import { Fab } from "@material-ui/core";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import { connect } from "react-redux";
import { createFile, toggleFileInput } from "../redux/actions";

function AddFolder(props) {
  return (
    <Fab size="large" color="secondary" onClick={props.toggleFileInput}>
      <CreateNewFolderIcon />
    </Fab>
  );
}

const mapStateToProps = state => {
  return {
    fileTree: state.fileTree
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createFile: () => dispatch(createFile()),
    toggleFileInput: () => dispatch(toggleFileInput())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFolder);
