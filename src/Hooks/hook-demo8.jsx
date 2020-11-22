import React, { useState, useEffect } from 'react';

const MyApI = {
    count: 0,
    subscibe(cb) {
        this.intevid = setInterval(() => {
            this.count += 1;
            cb(this.count)
        }, 1000)
    },
    unsubscibe() {
        clearInterval(this.intevid);
        this.reset()
    },
    reset() {
        this.count = 0;
    }
}

// export default class Demo extends React.Component{
//     state={
//         count:0
//     }
//     componentDidMount(){
//         MyApI.subscibe(count=>{
//             this.setState({
//                 count,
//             })
//         })
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.count}
//             </div>
//         )
//     }

// }

const Demo9 = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        MyApI.subscibe(current => {
            setCount(current)
        })
        return () => {
            MyApI.unsubscibe()
            

        }
    },[])

    return (
        <div>
            {count }
        </div>
    )
}

export default Demo9