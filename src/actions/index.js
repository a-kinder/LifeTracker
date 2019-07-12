export const SELECT_ITEM = "SELECT_ITEM";
export const TOGGLE_OPEN_SECTION = "TOGGLE_OPEN_SECTION";

//  actions

export const toggleSelectItem = slug => ({
  type: SELECT_ITEM,
  payload: slug
});

export const toggleOpenSection = slug => ({
  type: TOGGLE_OPEN_SECTION,
  payload: slug
});
