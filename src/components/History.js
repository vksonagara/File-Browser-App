import React, { Fragment, Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { connect } from "react-redux";
import { addToHistory } from "../redux/actions";

const BACKWARD = "backward";
const FORWARD = "forward";

class Header extends Component {
  handleClick = stackType => {
    this.props.addToHistory(stackType);
  };

  render() {
    const { isForwardDisabled, isBackwardDisabled } = this.props;

    return (
      <Fragment>
        <IconButton
          color="inherit"
          aria-label="back"
          onClick={() => this.handleClick(BACKWARD)}
          disabled={isBackwardDisabled}
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="forward"
          onClick={() => this.handleClick(FORWARD)}
          disabled={isForwardDisabled}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isForwardDisabled: state.history.forwardStack.length === 0,
    isBackwardDisabled: state.history.backwardStack.length === 0
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToHistory: stackType => dispatch(addToHistory(stackType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
