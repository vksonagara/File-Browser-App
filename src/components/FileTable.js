import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import File from "./File";
import { searchFileTree } from "../lib";

class FileTable extends Component {
  render() {
    let files = getFilesOnSameLevel(
      this.props.fileTree,
      this.props.currentFileId
    );
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Created At</TableCell>
              <TableCell align="right">Items</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {files.length ? (
              files.map(file => <File file={file} key={file.id} />)
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  Empty Folder
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    fileTree: state.fileTree,
    currentFileId: state.history.currentFileId
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     createFile: () => dispatch(createFile()),
//     toggleFileInput: () => dispatch(toggleFileInput())
//   };
// };

export default connect(
  mapStateToProps,
  null
)(FileTable);

function getFilesOnSameLevel(fileTree, id) {
  let fileNode = searchFileTree(fileTree, id);
  let files = fileNode ? fileNode.children : [];
  return files;
}
