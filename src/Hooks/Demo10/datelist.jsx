import React from 'react'
import Demo101 from './children'

export default class Demo10 extends React.Component {
    state = {
        time: new Date()
    }
    componentDidMount() {
        this.time = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    render() {
        console.log('1');
        return (
            <>
                <Demo101 seccends={1}/>
                <p>{ this.state.time.toString() }</p>
            </>
        )
    }
}