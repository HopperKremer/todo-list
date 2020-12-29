//todolist component before
import React from "react";
const TodoItem = (props) => {
  console.log(props.item.text)
  return(
  !props.item.done ? <li onClick={props.onClick}>{props.item.text}</li> : null
  )
}

class TodoList extends React.Component {
    render() {
      const { items, onListClick } = this.props;
      console.log(items[0])
      return (<ul onClick={onListClick}>
        {items.map((item, index) =>
            <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)}
      </ul>);
    }
    
    handleItemClick(item, event) {
      console.log("click")
    }
  }
export default TodoList;




//todo page component before
import React from 'react'
import CustomButton from '../../components/customButton/customButton.component';
import CustomInput from '../../components/customInput/customInput.component';
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
        // const [todo, setTodo] = useState({text: '', done: false});
        // const [todoList, setTodoList] = useState([]);
        // const [searchField, setSearchField] = useState('')
        const todo = 'hi'
        const todoList = 'hi2'
        const handleSubmit = (e) => {
            e.preventDefault()
            // setTodoList([...todoList, todo])
            // console.log(todoList)
            console.log('submitted')                    
        }
        const handleChange = (e) => {
            // setTodo(e.target.value)
            console.log('change handled')
        }
        return(
            <div>
                <h1>Todos:</h1>
            <TodoList
               items={todoList}
               onListClick={(event) => console.log("List clicked!")}
               onItemClick={(todo, event) => {
                 console.log(todo, event);
               }}
             /> 
           <form onSubmit={handleSubmit}>
                <CustomInput
                value={todo}
                onChange={handleChange}
                />
                <CustomButton type='submit'>Add TODO</CustomButton>
            </form>
             </div>
        )
    }

export default TodoPage


//add todo component
import React from 'react'
import CustomButton from "../customButton/customButton.component";
import CustomInput from "../customInput/customInput.component";

class AddTodo extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault()
        const todo = this.props.value   
        console.log(todo)
        this.props.todoList.push(todo)    }
    handleChange = event => {   
        this.props.value= event.target.value
    }
    render(){
        //const {displayName, email, password, confirmPassword} = this.state
        const {todo} = this.props.value
        return(
            <div>
        <form onSubmit={this.handleSubmit}>
            <CustomInput
            value={todo}
            onChange={this.handleChange}
            />
            <CustomButton type='submit'>Add TODO</CustomButton>
        </form>
        </div>
        )
    }
}

export default AddTodo;