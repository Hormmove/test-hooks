import React, { useState } from 'react'
import TodoList from '../Todo/TodoFrom'
const Todo = () => {
    const [todos, setTodos] = useState([])

    function setvalue(text) {

        setTodos([{ text }, ...todos])

    }
    return (
        <div>
            <TodoList sendMsg={ setvalue } />
            <div>
                {
                    todos.map((ele, index) => {
                        return (
                            <p key={ index }>{ ele.text }</p>
                        )
                    })
                }
            </div>
            <button onClick={()=>{setTodos([])}}>clear</button>
        </div>
    )
}
export default Todo