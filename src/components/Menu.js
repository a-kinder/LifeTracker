import React, { Component } from "react";
import { connect } from "react-redux";

class Menu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div
        id="flyoutMenu"
        onMouseDown={this.props.handleMouseDown}
        className={visibility}
      >
        <h2>
          <a href="#">Home</a>
        </h2>
        <h2>
          <a href="#">Configure</a>
        </h2>
        <h2>
          <a href="#">Settings</a>
        </h2>
        <h2>
          <a href="#">About</a>
        </h2>
      </div>
    );
  }
}

export default connect(
  Menu.mapStateToProps,
  Menu.mapDispatchToProps
)(Menu);
