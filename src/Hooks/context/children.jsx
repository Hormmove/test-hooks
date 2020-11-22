import React,{useContext} from 'react';
import {context} from './context1'
function Demo104 (){
    return (
        <div>
            {useContext(context)}
        </div>
    )
}

export default Demo104