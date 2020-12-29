import React from 'react'
import AddTodo from '../../components/add-todo/add-todo.component';
// import CustomButton from '../../components/customButton/customButton.component';
// import CustomInput from '../../components/customInput/customInput.component';
import TodoList from '../../components/todolist/todolist.component';
// import CollectionPreview from '../../components/collection-preview/collection-preview.component'
// import SHOP_DATA from './shop.data'

// constructor(){
//     super()
//     this.state = {
//         collections: SHOP_DATA
//     }
// }
const TodoPage = () => {
    const todoList = [{ text: "Buy grocery", done: true },
             { text: "Play guitar", done: false },
             { text: "Romantic dinner", done: false }]

    return(
        <div>
            <h1>Todos:</h1>
            <AddTodo/>
            <TodoList
                items={todoList}
                onListClick={(event) => console.log("List clicked!")}
                onItemClick={(todo, event) => {
                    console.log(todo, event);
                }}
            />
        </div>
    )
    }

export default TodoPage