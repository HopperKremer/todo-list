import ListActionTypes from "./todo-list.types";
import { addItemToList, removeItemFromList } from "./todo-list.utils";

const INITIAL_STATE = {
  listItems: [],
  //listItems: ["jkklj", "kjlk"],
};

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ListActionTypes.ADD_ITEM:
      return {
        listItems: addItemToList(state.listItems, action.payload),
      };
    case ListActionTypes.REMOVE_ITEM:
      return {
        ...state,
        listItems: state.listItems.filter(
          (listItem) => listItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
export default listReducer;
