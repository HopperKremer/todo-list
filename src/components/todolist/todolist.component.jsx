import React from "react";
import { connect } from "react-redux";
import {removeItem } from "../../redux/todo-list/todo-list.actions";

const TodoList = ({listItems, removeItem}) => {
  console.log(listItems.length)
  const todo = 'hi'
  const handleItemClick = (item, event) => {
    console.log("click")
  }
  return (
    <div>
      <ul>
        {
        listItems.map((item) => {
          return (
            <li>{item.text}</li>
          )
        })}
      </ul>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>({
    removeItem: (id) => dispatch(removeItem(id))
})
const mapStateToProps = ({ todoList:{listItems} }) => ({
    listItems
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);