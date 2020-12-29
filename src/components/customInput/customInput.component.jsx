import React from 'react'
const CustomInput = (props) => (
    <input
    className='newTodo'
    type='text'
    onChange = {props.onChange}
    />
)

export default CustomInput;