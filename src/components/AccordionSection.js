import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Accordion.css";

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
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
              <div className="grid-item" key={item.slug} onClick={onClick}>
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
