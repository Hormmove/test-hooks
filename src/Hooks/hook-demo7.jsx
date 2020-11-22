import React, { useEffect, useState } from 'react';
const Demo7 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `you must ${count} time`

    })



    return (
        <div>
            <span>{ count }</span>
            <button onClick={ () => { setCount(count + 1) } }>ADD</button>
        </div>
    )
}
export default Demo7