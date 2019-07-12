import * as Types from "../actions/index";

const todoReducer = (state, action) => {
  switch (action.type) {
    case Types.SELECT_ITEM: {
      var selectedBool = state.selected_items[action.payload] || false;
      return {
        ...state,
        selected_items: {
          ...state.selected_items,
          [action.payload]: !selectedBool
        }
      };
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
