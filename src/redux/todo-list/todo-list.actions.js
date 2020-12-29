import ListActionTypes from "./todo-list.types";

export const addItem = (item) => ({
    type: ListActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = (id) => ({
    //Action is an obj -> type=>Mandatory and payload=>optional
    type: ListActionTypes.REMOVE_ITEM,
    payload: id
})