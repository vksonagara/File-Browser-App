import React, { Component } from "react";
import { connect } from "react-redux";
import { createFile } from "../redux/actions";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";

class FileInput extends Component {
  state = {
    filename: "",
    checkedFolder: false
  };

  handleChange = name => event => {
    if (name === "checkedFolder") {
      this.setState({
        ...this.state,
        [name]: event.target.checked
      });
    } else {
      this.setState({
        ...this.state,
        [name]: event.target.value
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const file = {
      filename: this.state.filename,
      id: Date.now(),
      isFolder: this.state.checkedFolder,
      createdAt: Date.now(),
      children: []
    };
    this.props.createFile(this.props.currentFileId, file);
    this.setState({
      ...this.state,
      filename: "",
      checkedFolder: false
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="file-input"
          label="File Name/Folder Name"
          value={this.state.filename}
          onChange={this.handleChange("filename")}
          margin="normal"
          fullWidth
          helperText="filename should contain a-z, A-Z, 0-9, and _ only."
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedFolder}
              onChange={this.handleChange("checkedFolder")}
              value="checkedFolder"
              color="primary"
            />
          }
          label="Folder"
        />
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentFileId: state.history.currentFileId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createFile: (currentFileId, file) =>
      dispatch(createFile(currentFileId, file))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileInput);
