import React from 'react'

import {ListItem} from 'material-ui/List'

const Task = (props) => (
    <div>
        {props.task.text}
    </div>
)

export default Task