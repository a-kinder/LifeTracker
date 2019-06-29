import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Accordion.css";
import AccordionSection from "./AccordionSection";

class Accordion extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired
  };

  constructor(props) {
    super(props);

    const openSections = {};

    this.state = { openSections };
  }

  onClick = label => {
    const {
      state: { openSections }
    } = this;

    const isOpen = !!openSections[label];

    this.setState({
      openSections: {
        [label]: !isOpen
      }
    });
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections }
    } = this;

    return (
      <div className="accordion">
        {children.map(child => (
          <AccordionSection
            isOpen={!!openSections[child.slug]}
            label={child.slug}
            onClick={onClick}
            key={child.slug}
            items={child.items}
          >
            {child}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

export default Accordion;
