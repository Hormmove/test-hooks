import React, { useState, useReducer } from 'react';

const initialState = { count: 0 };
function reducer(state = initialState, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }

    }
}


export default function Demo102() {
    // const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <p>{ state.count }</p>
            <button onClick={ () => dispatch({ type: 'increment' }) }>+</button>
            <button onClick={ () => dispatch({ type: 'decrement' }) }>-</button>
        </>
    )
}