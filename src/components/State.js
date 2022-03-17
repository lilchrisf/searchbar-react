import React from 'react'
import { Component } from 'react/cjs/react.production.min';

class State extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage() {
            this.setState({
                message: 'thanks for subcribing'
            })
        }

    change1Message() {
        this.setState({
            message: 'whats popping'
        })
    }
    
    render () {
        return( 
        <div className='div'>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
            <button onClick={() => this.change1Message()}>Touch</button>
        </div>
        )
    }
}

export default State 