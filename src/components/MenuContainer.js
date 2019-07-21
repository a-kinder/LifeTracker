import React, { Component } from "react";
import Menu from "./Menu";
import { connect } from "react-redux";
import "./Menu.css";

class MenuContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.onClick = this.onClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  onClick = e => {
    this.toggleMenu();
  };
  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible
    });
  };
  render() {
    return (
      <div>
        <div onClick={this.onClick}>
          <i className="fas fa-bars" />
        </div>
        <Menu
          handleMouseDown={this.onClick}
          menuVisibility={this.state.visible}
        />
      </div>
    );
  }
}

export default connect(
  MenuContainer.mapStateToProps,
  MenuContainer.mapDispatchToProps
)(MenuContainer);
