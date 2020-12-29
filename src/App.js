import React from "react";
//import ReactDOM from "react-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import TodoPage from "./pages/todo-page/todo-page.component";
import {Switch, Route} from 'react-router-dom'

// /*
// Write a TodoList component that expects an items prop, and a list of objects, each
// with text and done properties.
// TodoList also accepts an onltemClick function prop, which should be called when a
// user clicks an item in the list, if the item is not marked as done. Otherwise, the
// onltemClick should not be called and the click event itself should not be
// propagated further. The function should be called with the item object from the
// items list as the first parameter and the event as the second parameter.

// */
function App() {
  
  return(
    <div>
     <Header/>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/todo-page' component={TodoPage} />
    </Switch> 
    </div>
  )

}
// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//         todo: '',
//         items: [{ text: "Buy grocery", done: true },
//         { text: "Play guitar", done: false },
//         { text: "Romantic dinner", done: false }]
//     }
// }
// render(){
//   return(
//     <div>
//       <Header/>
//     <TodoList
//       items={this.state.items}
//       onListClick={(event) => console.log("List clicked!")}
//       onItemClick={(item, event) => {
//         console.log(item, event);
//       }}
//     />
//   <AddTodo value={this.state.todo} todoList={this.state.items}/>
//     </div>
//   );
// }
// } 

// console.log("hi");

// document.body.innerHTML = "<div id='root'></div>";
// const rootElement = document.getElementById("root");
// //ReactDOM.render(<App items={items} />, rootElement);
export default App;
