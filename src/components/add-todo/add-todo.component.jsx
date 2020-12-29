import React from 'react'
import CustomButton from "../customButton/customButton.component";
import CustomInput from "../customInput/customInput.component";
import { addItem, removeItem } from "../../redux/todo-list/todo-list.actions";
import { connect } from "react-redux";
class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            id: 0
        }
    }

    
    render() {
        const {addItem} = this.props

        const handleSubmit = (e) => {
            e.preventDefault()
        }
        const handleChange = (e) => {
            this.state.text = e.target.value
        }
        const addTodo = (e) => {
            addItem({text: this.state.text, id: Math.ceil(Math.random()*100)})
            setTimeout(() => { alert('Todo added.') }, 1);
        }
        
        const item = {
            text: "item"
        }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <CustomInput
                onChange={handleChange}
                value = {this.state.text}
                />
                <CustomButton type='submit' onClick={addTodo}>Add TODO</CustomButton>
            </form>

        </div>
    )
    }
    }

const mapDispatchToProps = dispatch =>({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)( AddTodo)