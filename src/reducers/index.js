import * as Types from "../actions/index";

const todoReducer = (state, action) => {
  console.log(Types);
  switch (action.type) {
    case Types.SELECT_ITEM: {
      //fix
      const new_items = state.sections.map(item => {
        if (item.slug === action.payload) {
          return { ...item, selected: !item.selected };
        } else {
          return item;
        }
      });
      return { ...state, items: new_items };
    }
    case Types.OPEN_SECTION: {
      const new_sections = state.sections.map(section => {
        if (section.slug === action.payload) {
          return { ...section, open: !section.open };
        } else {
          return section;
        }
      });
      return { ...state, sections: new_sections };
    }
    default:
      return state;
  }
};

export default todoReducer;
