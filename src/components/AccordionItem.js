import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Accordion.css";

class AccordionSection extends Component {
  static propTypes = {
    slug: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // isSelected: PropTypes.func.isRequired,
    selectItem: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    const isSelected = false;
    this.onItemClick = this.onItemClick.bind(this);

    this.state = { isSelected };
  }

  onItemClick = label => {
    this.props.toggleSelectItem(label);
  };

  render() {
    const { onItemClick } = this;
    const class_name = this.state.isSelected
      ? "grid-item selected"
      : "grid-item";
    return (
      <div
        className={class_name}
        key={this.props.slug}
        onClick={() => onItemClick(this.props.slug)}
      >
        <i className={this.props.icon} alt={this.props.name} />
      </div>
    );
  }
}

export default AccordionSection;
