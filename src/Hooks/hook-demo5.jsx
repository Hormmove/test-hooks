import React, { useState, useEffect } from 'react';
// export default class Demo5 extends React.Component {
//     state = {
//         count: 0,
//         name: '今生'
//     }
//     componentDidMount() {
//         console.log('触发0');
//         document.title = `you must ${this.state.count} time`

//     }
//     componentDidUpdate() {
//         console.log('触发1');
//         document.title = `you must ${this.state.count} time`

//     }
//     handle = () => {
//         this.setState({ count: this.state.count + 1 })
//     }
//     gethandle = () => {
//         this.setState({ name: '打野' })
//     }
//     render() {
//         return (
//             <div>
//                 <p>{`you must ${ this.state.count } time`}</p>
//                 <p>{ this.state.name }</p>
//                 <button onClick={ this.handle }>切换</button>
//                 <button onClick={ this.gethandle }>变换</button>
//             </div>
//         )
//     }
// }

const Demo5 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('jingsheng');
    useEffect(()=>{
        console.log('触发');
        document.title=`you must ${count} time`;
    },[count])
    return (
        <div>
            <p>{ `you must ${count} time` }</p>
            <p>{ name }</p>

            <button onClick={ () => { setCount(count + 1) } }>切换</button>
            <button onClick={ () => { setName('大王') } }>变换</button>
        </div>
    )

}

export default Demo5