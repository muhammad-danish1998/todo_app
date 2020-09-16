import React from 'react';

const TodoList = (props) => {

    return (
        <>
            <div className='todo_style'>
                <i className="far fa-trash-alt" onClick={() => {
                    props.onSelect(props.id)
                }}></i>
                <li>  {props.values} </li>
            </div>
        </>
    )
}
export default TodoList