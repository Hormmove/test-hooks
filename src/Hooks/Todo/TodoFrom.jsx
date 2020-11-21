import React, { useState } from 'react'
const UserFrom = (initialvalue) => {
    const [value, setvalue] = useState(initialvalue);
    return {
        value,
        onChange: e => { setvalue(e.target.value) },
        resetValue: () => { setvalue('') }
    }
}


const TodoDemo = ({ sendMsg }) => {
    const { resetValue, ...text } = UserFrom('')
    function onsubmitChange(e) {
        e.preventDefault()
        sendMsg(text.value)
        resetValue()


    }


    return (
        <form onSubmit={ onsubmitChange }>
            <input type="text" { ...text } />
        </form>
    )
}

export default TodoDemo