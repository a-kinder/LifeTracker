import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Accordion.css";
import AccordionItem from "./AccordionItem";
import { connect } from "react-redux";
import { toggleOpenSection } from "../actions";
class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };
  constructor(props) {
    super(props);

    const selectedItems = {};
    this.onSectionClick = this.onSectionClick.bind(this);
    this.props = { ...this.state };

    this.state = { selectedItems };
  }
  onSectionClick = label => {
    this.props.toggleOpenSection(this.props.label);
  };
  render() {
    const {
      props: { onSectionClick, label }
    } = this;
    const isOpen = this.props.open_sections[label] || false;
    return (
      <div className="grid-section">
        <div className="header" value={label} onClick={this.onSectionClick}>
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
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

AccordionSection.defaultProps = {
  open_sections: []
};
AccordionSection.mapStateToProps = ({ open_sections }) => ({
  open_sections
});

AccordionSection.mapDispatchToProps = { toggleOpenSection: toggleOpenSection };
AccordionSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired
    }).isRequired
  ).isRequired,
  open_sections: PropTypes.array
};

export default connect(
  AccordionSection.mapStateToProps,
  AccordionSection.mapDispatchToProps
)(AccordionSection);
