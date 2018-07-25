import React from 'react'

import Task from './Task'
import PaperRefined from '../components/PaperRefined'

const List = (props) => (
    <PaperRefined>
        {
            props.tasksList.map(
                task => (
                    <Task
                        key={task.key}
                        task={task}
                    />
                )
            )
        }
    </PaperRefined>
)

export default List