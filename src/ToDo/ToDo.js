import React from 'react'

import List from './List'
import Forms from './Forms'

class ToDo extends React.Component {
    state = {
        tasks: [
            { isCompleted: false, text: 'Wynieś śmieci', key: '123' },
            { isCompleted: false, text: 'Zmyj gary', key: '654' }
        ],
        newTaskText: ''
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


    onNewTaskTextChanged = (event, value) => {
        this.setState({
            newTaskText: value
        })
    }

    onAddNewTaskClickHandler = () => {
        if (this.state.newTaskText === '') {
            return
        }

        const newTasks = this.state.tasks.concat({
            isCompleted: false,
            text: this.state.newTaskText,
            key: Date.now()
        })

        this.setState({
            tasks: newTasks,
            newTaskText: ''
        })
    }

    render() {
        return (
            <div>
                <Forms
                    newTaskText={this.state.newTaskText}
                    onNewTaskTextChanged={this.onNewTaskTextChanged}
                    onAddNewTaskClickHandler={this.onAddNewTaskClickHandler}
                />
                <List
                    tasksList={this.state.tasks}
                />
            </div>
        )
    }
}
export default ToDo