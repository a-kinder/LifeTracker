import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Accordion.css";
import AccordionSection from "./AccordionSection";
import { connect } from "react-redux";
import { selectItem, toggleOpenSection } from "../actions";

class Accordion extends Component {
  // static propTypes = {
  //   children: PropTypes.instanceOf(Object).isRequired
  // };

  constructor(props) {
    super(props);
    this.props = { ...this.state };
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick = label => {
    // const { openSection } = this.props;

    this.props.toggleOpenSection(label);
    // const {
    //   state: { openSections }
    // } = this;
    // const isOpen = !!openSections[label];
    // this.setState({
    //   openSections: {
    //     [label]: !isOpen
    //   }
    // });
  };

  render() {
    const { sections } = this.props;

    return (
      <div className="accordion">
        {sections.map(child => (
          <AccordionSection
            isOpen={this.props.open_sections[child.slug] || false}
            label={child.slug}
            onClick={this.onItemClick}
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

Accordion.defaultProps = {
  sections: [],
  open_sections: []
};
Accordion.mapStateToProps = ({ sections, open_sections }) => ({
  sections,
  open_sections
});

Accordion.mapDispatchToProps = {
  selectItem: selectItem,
  toggleOpenSection: toggleOpenSection
};
Accordion.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired
    }).isRequired
  ).isRequired,
  open_sections: PropTypes.array
};

export default connect(
  Accordion.mapStateToProps,
  Accordion.mapDispatchToProps
)(Accordion);
