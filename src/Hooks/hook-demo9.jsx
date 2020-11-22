import React,{useState,useCallback} from 'react'


const Demo12 =()=>{
    const [count,setCount] =useState(0)
    const [count1,setCount1] =useState(0)

    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>Add</button>


            <p>{count1}</p>
            <button onClick={useCallback(()=>{setCount1(count1+1)},[count])}>Add</button>
        </div>
    )
}

export default Demo12