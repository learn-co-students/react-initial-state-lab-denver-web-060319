// your Bomb code here!
import React, {Component} from 'react'

export default class Bomb extends Component{
    constructor(props){
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render(){
        let countdown = this.state.secondsLeft
        if(countdown > 0)
        {
            return(<div>{countdown} seconds left before I go boom!</div>)
        }
        else if(countdown === 0)
        {
            return(<div>Boom!</div>)
        }
    }
}