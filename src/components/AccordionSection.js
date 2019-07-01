import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Accordion.css";
import AccordionItem from "./AccordionItem";

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
  };
  constructor(props) {
    super(props);

    const selectedItems = {};

    this.state = { selectedItems };
  }
  onClick = () => {
    this.props.onClick(this.props.label);
  };
  selectItem = slug => {
    const {
      state: { selectedItems }
    } = this;

    const isOpen = !!selectedItems[slug];

    this.setState({
      selectedItems: {
        [slug]: !isOpen
      }
    });
  };
  isSelected = slug => {
    return this.state.selectedItems[slug];
  };
  render() {
    const {
      selectItem,
      isSelected,
      onClick,
      props: { isOpen, label }
    } = this;

    return (
      <div className="grid-section">
        <div className="header" onClick={onClick}>
          {label}
        </div>
        {isOpen && (
          <div className="grid-items">
            {this.props.items.map(item => (
              <AccordionItem
                slug={item.slug}
                icon={item.icon}
                name={item.name}
                key={item.slug}
                isSelected={isSelected}
                selectItem={selectItem}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
