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
    case Types.TOGGLE_OPEN_SECTION: {
      var openBool = state.open_sections[action.payload] || false;
      return {
        ...state,
        open_sections: { ...state.open_sections, [action.payload]: !openBool }
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
