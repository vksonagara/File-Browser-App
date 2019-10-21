import React, { Component } from "react";
import { Paper, Breadcrumbs, Link, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { getFilePathArray } from "../lib";
import { changeCurrentFileId } from "../redux/actions";

class FileBreadcrumb extends Component {
  handleLinkClick = fileId => {
    this.props.changeCurrentFileId(fileId);
  };

  render() {
    const { fileTree, currentFileId } = this.props;
    let pathArr = getFilePathArray(fileTree, currentFileId);
    let pathEnd = pathArr.pop();

    return (
      <div
        style={{
          justifyContent: "center"
        }}
      >
        <Paper
          elevation={1}
          style={{
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 10
          }}
        >
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {pathArr.map(file => {
              return (
                <Link
                  color="inherit"
                  href="#"
                  key={file.fileId}
                  onClick={() => this.handleLinkClick(file.fileId)}
                >
                  {file.filename}
                </Link>
              );
            })}
            <Typography variant="body2">{pathEnd.filename}</Typography>
          </Breadcrumbs>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentFileId: state.history.currentFileId,
    fileTree: state.fileTree
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCurrentFileId: id => dispatch(changeCurrentFileId(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileBreadcrumb);
