import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Accordion.css";
import { toggleSelectItem } from "../actions";
import { connect } from "react-redux";

class AccordionItem extends Component {
  static propTypes = {
    slug: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);
    this.onItemClick = this.onItemClick.bind(this);

    this.props = { ...this.state };
  }

  onItemClick = label => {
    this.props.toggleSelectItem(label);
  };

  render() {
    const { onItemClick } = this;
    const class_name =
      this.props.slug in this.props.selected_items &&
      this.props.selected_items[this.props.slug] === true
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

AccordionItem.defaultProps = {
  selected_items: {}
};
AccordionItem.mapStateToProps = ({ selected_items }) => ({
  selected_items
});

AccordionItem.mapDispatchToProps = { toggleSelectItem: toggleSelectItem };
AccordionItem.propTypes = {
  slug: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selected_items: PropTypes.object.isRequired
};

export default connect(
  AccordionItem.mapStateToProps,
  AccordionItem.mapDispatchToProps
)(AccordionItem);
