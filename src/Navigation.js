import React from 'react'
import SideBar from './SideBar'
import AppBar from 'material-ui/AppBar'

class Navigation extends React.Component {

    state = {
        isOpen: true
    }
    toggleHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <AppBar
                    title={'JFDDL5 APP'}
                    onClick={this.toggleHandler}
                />

                <SideBar
                    isSideBarOpen={this.state.isOpen}
                    toggleSideBar={this.toggleHandler}
                />
            </div>

        )
    }
}

export default Navigation