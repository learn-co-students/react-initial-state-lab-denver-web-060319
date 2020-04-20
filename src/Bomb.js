import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    secondsTillBoom() {
        const { secondsLeft } = this.state
        if (secondsLeft > 0) {
            return `${secondsLeft} seconds left before I go boom!`
        } else {
            return 'Boom!'
        }
    }
    
    render() {
        return (
            <div>
                {this.secondsTillBoom()} 
            </div>
        )
    }
}

export default Bomb;
