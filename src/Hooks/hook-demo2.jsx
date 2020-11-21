import React, { useState, useEffect } from 'react';

class TokenFrom extends React.Component {
    handele = (e) => {
        const { setToken } = this.props;
        e.preventDefault();
        let token = this.getInput.value;
        if (token) {
            setToken(token)
        }

    }
    render() {
        return (
            <div>
                <form onSubmit={ this.handele }>
                    <input type="text" name="token" placeholder="请输入数据"
                        ref={ input => { this.getInput = input } }
                    />

                </form>
            </div>
        )
    }
}

// export default class TokenGet extends React.Component {
//     state = {
//         token: null
//     }
//     componentDidMount() {
//         this.setState({
//             token: sessionStorage.getItem('token')
//         }) 
//     }
//     gethandle = (token) => {

//         sessionStorage.setItem('token', token);
//         this.setState({ token })
//     }

//     render() {
//         const {token} =this.state
//         return (
//             <div>
//                 <span>{token}</span>
//                 {token ? token : <TokenFrom setToken={ this.gethandle } /> }
//             </div>
//         )
//     }
// } 

const TokenGet = () => {
    const [token, setToken] = useState(sessionStorage.getItem('token'))
    useEffect(() => {
        sessionStorage.setItem('token', token);
    })
    return (
        <>
            <h1>{ token }</h1>
            {token ? token : <TokenFrom setToken={setToken } /> }
        </>
    )
}

export default TokenGet