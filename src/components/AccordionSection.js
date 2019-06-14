import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Accordion.css";

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
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
      <div className="accordion-section">
        <div className="accordion-section-label" onClick={onClick}>
          <i className={label} />
          <div className="accordion-carat">
            {/* {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>} */}
          </div>
        </div>
        {isOpen && (
          <div className="accordion-section-content">{this.props.children}</div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
