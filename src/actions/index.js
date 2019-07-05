export const SELECT_ITEM = "SELECT_ITEM";
export const OPEN_SECTION = "OPEN_SECTION";

//  actions

export const selectItem = slug => ({
  type: SELECT_ITEM,
  payload: slug
});

export const openSection = slug => ({
  type: OPEN_SECTION,
  payload: slug
});
