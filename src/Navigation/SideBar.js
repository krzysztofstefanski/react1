import React from 'react'
import Drawer from 'material-ui/Drawer'

import SideBarItem from './SideBarItem'

class SideBar extends React.Component {
    render() {
        return (
            <Drawer
                open={this.props.isSideBarOpen}
                docked={false}
                onRequestChange={this.props.toggleSideBar}
            >
                <SideBarItem
                    to={'/dashboard'}
                    label={'Dashboard'}
                    toggleSidebar={this.props.toggleSideBar}
                />
                <SideBarItem
                    to={'/basic-components'}
                    label={'Basic Components'}
                    toggleSidebar={this.props.toggleSideBar}
                />
                <SideBarItem
                    to={'/passing-parameters/cos'}
                    label={'Parameter - coś'}
                    toggleSidebar={this.props.toggleSideBar}
                />
            </Drawer>
        )
    }
}

export default SideBar