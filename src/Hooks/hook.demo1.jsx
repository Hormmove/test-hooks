import React, { useState } from 'react';
const stateMsg = ['张三', '李四', '王五', '孙二娘']

export default () => {
    const [user, setUser] = useState(stateMsg[0]);
    const getInfo = ()=>{
        let index = Math.floor(Math.random() * stateMsg.length);
        let indexNuber = stateMsg[index];
        setUser(indexNuber)
    }
    return (
        <>
            <span>{ user }</span>
            <button onClick={ getInfo }>Add</button>
        </>
    )
}
// export default class Holss extends React.Component{
//      state={
//          user:stateMsg[0]
//      }
//      handle=()=>{
//          let reandoeIndex=Math.floor(Math.random()*stateMsg.length),
//          renderNunber=stateMsg[reandoeIndex];
//          this.setState({
//             user:renderNunber
//          })


//      }
//      render(){
//          return(
//              <div>
//                  <span>{this.state.user}</span>
//                  <button onClick={this.handle}>切换</button>
//              </div>
//          )
//      }
// }

