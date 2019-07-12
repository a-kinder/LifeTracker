import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Accordion.css";
import AccordionSection from "./AccordionSection";
import { connect } from "react-redux";

class Accordion extends Component {
  render() {
    const { sections } = this.props;

    return (
      <div className="accordion">
        {sections.map(section => (
          <AccordionSection
            label={section.slug}
            key={section.slug}
            items={section.items}
          >
            {section}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

Accordion.defaultProps = {
  sections: []
};
Accordion.mapStateToProps = ({ sections, open_sections }) => ({
  sections,
  open_sections
});

Accordion.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired
    })
  ).isRequired
};

export default connect(
  Accordion.mapStateToProps,
  Accordion.mapDispatchToProps
)(Accordion);
