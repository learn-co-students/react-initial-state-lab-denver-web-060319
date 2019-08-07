import React from 'react'

class Bomb extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }
    
    boom = () => {
        if (this.state.secondsLeft === 0) {
            return "Boom!"
        } else {
            return this.state.secondsLeft + " seconds left before I go boom!"
        }
    }

    render() {
        return(
            <div className="bomb">
                <h1>{this.boom()}</h1>
            </div>
        )
    }
}

export default Bomb;
