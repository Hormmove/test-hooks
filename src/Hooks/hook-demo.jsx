import React, { useState,useEffect } from 'react';

// class HoolFeno extends React.Component {
//     state = {
//         count: 0
//     }
//     content = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     componentDidMount(){
//         document.title=`这是第${this.state.count}个`
//     }
//     componentDidUpdate(){
//         document.title=`这是第${this.state.count}个`
//     }
//     render() {
//         return (
//             <div>
//                 数量:{this.state.count }
//                 <button onClick={ this.content }>Add</button>
//             </div>
//         )
//     }
// }
// export default HoolFeno


export default () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title=`这是第${count}个`
        // console.log(1);
    })
    return (
        <div>
            数值:{count }
            <button onClick={ () => { setCount(count + 1) } }>Add</button>
        </div>
    )
}

// hook.demo1.jsx