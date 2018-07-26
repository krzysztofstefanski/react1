import React from 'react'

class Counter extends React.Component {
    state = {
        number: this.props.number
    }

    componentDidMount() {
        console.log('componentDidMount')

        const lastState = JSON.parse(localStorage.getItem('jfddl5-app-counter-state'))

        if(lastState === null) return

        this.setState(lastState)
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')

        localStorage.setItem('jfddl5-app-counter-state', JSON.stringify(this.state))
    }

    incHandler = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    decHandler = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    render() {
        console.log('render')

        return (
            <div>
                <h1>{this.state.number}</h1>
                <button
                    onClick={this.incHandler}
                >
                    +
                </button>
                <button
                    onClick={this.decHandler}
                >
                    -
                </button>
            </div>
        )
    }
}

export default Counter