import React from 'react';
import ContextChildren from './children.jsx'
import ContextChildren1 from './list'

export const context = React.createContext()
function Demo103() {
    return (
        <context.Provider value="you must message to me to  ">
            <ContextChildren />
            <ContextChildren1 />
        </context.Provider>
    )
}

export default Demo103