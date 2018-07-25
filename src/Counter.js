import React from 'react'



class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            number: 0,
           
        }
    }
    render() {
        return (
            <div>
                <h1> {this.state.number}</h1>

                <button>+</button>
                <button>-</button>

            </div>
        )
    }
}
export default Counter