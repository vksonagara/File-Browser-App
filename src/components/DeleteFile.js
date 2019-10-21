import React, { Component } from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { deleteFile } from "../redux/actions";

class DeleteFile extends Component {
  render() {
    return (
      <IconButton
        title="delete file"
        onClick={() => this.props.deleteFile(this.props.fileId)}
      >
        <DeleteIcon />
      </IconButton>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteFile: fileId => dispatch(deleteFile(fileId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DeleteFile);
