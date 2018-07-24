import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const SideBar = (props) => (
    <Drawer
        open={true}
    >
        <Link
            to={'/dashboard'}
            style={{ textDecoration: 'none' }}
        >
            <MenuItem>
                Dashboard
            </MenuItem>
        </Link>
        <Link
            to={'/basic-components'}
            style={{ textDecoration: 'none' }}
        >
            <MenuItem>
                Basic Components
            </MenuItem>
        </Link>
        <Link
            to={'/passing-parameters/cos'}
            style={{ textDecoration: 'none' }}
        >
            <MenuItem>
                Parameter - coś
            </MenuItem>
        </Link>
    </Drawer>
)

export default SideBar
