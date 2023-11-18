import React from 'react'


function Todo({ todo }) {
    const { id , title  , completed} = todo;

    const h1 = <h1>{title}</h1>
    const text = completed ? <stike>{h1}</stike> : h1;
    return <div data-testid ={`todo-${id}`}>{ text }</div>
}


export default Todo;