/*
Write a TodoList component that expects an items prop, and a list of objects, each
with text and done properties.
TodoList also accepts an onltemClick function prop, which should be called when a
user clicks an item in the list, if the item is not marked as done. Otherwise, the
onltemClick should not be called and the click event itself should not be
propagated further. The function should be called with the item object from the
items list as the first parameter and the event as the second parameter.
*/
// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>
console.log("hi")
class TodoList extends React.Component {
  constructor(props) {
        super(props)
    this.state = {
      
    }
  }
  render() {
    const { items, onListClick } = this.props;
    return (<ul onClick={onListClick}>
      {items.map((item, index) => 
                 <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)}
    </ul>);
  }
  
  handleItemClick(item, event) {
    // Write your code here
  }
}


const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

const App = (props) => <TodoList
  items={props.items}
  onListClick={(event) => console.log("List clicked!")}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App items={items}/>, rootElement);






/*
The Textlnput component renders an input element in the DOM and accepts a ref
that is forwarded to that input element. Finish the Focusablelnput component:
*The component should accept a focused prop.
*When the focused prop is changed from false to true, and the input is not
focused, it should receive the focus.
*If on mounting the focused prop is true, the input should receive the focus.
*/
class Input extends React.PureComponent {
    render() {
      let {forwardedRef, ...otherProps} = this.props; 
      return <input {...otherProps} ref={forwardedRef} />;
    }
  }
  
  const TextInput = React.forwardRef((props, ref) => {
    return <Input {...props} forwardedRef={ref} />
  });
  
  class FocusableInput extends React.Component {
    
    ref = React.createRef()
  
    render() {
      return <TextInput ref={this.ref} />;
    }
  
    // When the focused prop is changed from false to true, 
    // and the input is not focused, it should receive focus.
    // If focused prop is true, the input should receive the focus.
    // Implement your solution below:
    componentDidUpdate(prevProps) {}
    
    componentDidMount() {}
  }
  
  FocusableInput.defaultProps = {
    focused: false
  };
  
  const App = (props) => <FocusableInput focused={props.focused} />;
  
  document.body.innerHTML = "<div id='root'></div>";
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);








// The Message component contains an anchor element and a paragraph below the
// anchor. Rendering of the paragraph should be toggled by clicking on the anchor
// element using the following logic:
// • At the start, the paragraph should not be rendered.
// • After a click, the paragraph should be rendered.
// • After another click, the paragraph should not be rendered.
// Finish the Message component by implementing this logic.
// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class Message extends React.Component {
    render() {
      return (<React.Fragment>
            <a href="#">Want to buy a new car?</a>
            <p>Call +11 22 33 44 now!</p>
          </React.Fragment>);
    }
  }
  
  document.body.innerHTML = "<div id='root'> </div>";
    
  const rootElement = document.getElementById("root");
  ReactDOM.render(<Message />, rootElement);
  
  console.log("Before click: " + rootElement.innerHTML);
  document.querySelector("a").click();
  console.log("After click: " + rootElement.innerHTML);