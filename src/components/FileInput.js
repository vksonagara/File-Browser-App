import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

export default class FileInput extends Component {
  state = {
    filename: ""
  };

  handleChange = event => {
    this.setState({
      filename: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.filename);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="file-input"
          label="Filename"
          value={this.state.filename}
          onChange={this.handleChange}
          margin="normal"
          fullWidth
          helperText="filename should contain a-z, A-Z, 0-9, and _ only."
        />
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </form>
    );
  }
}
