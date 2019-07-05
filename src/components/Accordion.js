import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Accordion.css";
import AccordionSection from "./AccordionSection";
import { connect } from "react-redux";
import { selectItem, openSection } from "../actions";

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
    openSection(label);
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
            // isOpen={!!openSections[child.slug]}
            isOpen={false}
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
  sections: []
};
Accordion.mapStateToProps = ({ sections }) => ({
  sections
});

Accordion.mapDispatchToProps = {
  selectItem: selectItem,
  openSection: openSection
};
Accordion.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired
    }).isRequired
  ).isRequired
};

export default connect(
  Accordion.mapStateToProps,
  Accordion.mapDispatchToProps
)(Accordion);
