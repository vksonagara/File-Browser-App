import React from "react";
import { Fab } from "@material-ui/core";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { connect } from "react-redux";
import { toggleFileInput } from "../redux/actions";

function AddFile(props) {
  return (
    <Fab size="large" color="secondary" onClick={props.toggleFileInput}>
      <NoteAddIcon />
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
    toggleFileInput: () => dispatch(toggleFileInput())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFile);
