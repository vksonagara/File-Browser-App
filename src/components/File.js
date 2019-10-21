import React, { Component } from "react";
import { connect } from "react-redux";
import {
  TableRow,
  TableCell,
  Grid,
  Link,
  TextField,
  IconButton,
  Button
} from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import { changeCurrentFileId, editFile } from "../redux/actions";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import DeleteFile from "./DeleteFile";

class File extends Component {
  state = {
    filename: this.props.file.filename,
    isFileEditVisible: false
  };

  toggleFileEdit = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        isFileEditVisible: !prevState.isFileEditVisible
      };
    });
  };

  handleFileEditClick = () => {
    this.toggleFileEdit();
  };

  handleChange = event => {
    this.setState({
      filename: event.target.value
    });
  };

  handleFileEditSubmit = event => {
    event.preventDefault();
    this.toggleFileEdit();

    const fileId = this.props.file.id;
    const { filename } = this.state;

    this.props.editFile(fileId, filename);
  };

  render() {
    const { file, changeCurrentFileId } = this.props;
    const { isFileEditVisible } = this.state;

    return (
      <TableRow>
        <TableCell component="th" scope="row">
          <Grid container alignItems="center">
            <DescriptionIcon />
            {isFileEditVisible ? (
              <form
                style={{ display: "flex", alignItems: "center" }}
                onSubmit={this.handleFileEditSubmit}
              >
                <TextField
                  value={this.state.filename}
                  margin="dense"
                  variant="outlined"
                  onChange={this.handleChange}
                />
                <Button
                  style={{ marginLeft: 5 }}
                  variant="contained"
                  color="primary"
                  startIcon={<SaveIcon />}
                  type="submit"
                >
                  Save
                </Button>
              </form>
            ) : file.isFolder ? (
              <Link
                href="#"
                component="button"
                variant="body2"
                onClick={() => changeCurrentFileId(file.id)}
              >
                {file.filename}
              </Link>
            ) : (
              file.filename
            )}
          </Grid>
        </TableCell>
        <TableCell align="right">{file.createdAt}</TableCell>
        <TableCell align="right">{file.children.length} items</TableCell>
        <TableCell align="right">
          <IconButton onClick={() => this.handleFileEditClick()}>
            <EditIcon />
          </IconButton>
          <DeleteFile fileId={file.id} />
        </TableCell>
      </TableRow>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCurrentFileId: id => dispatch(changeCurrentFileId(id)),
    editFile: (fileId, filename) => dispatch(editFile(fileId, filename))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(File);
