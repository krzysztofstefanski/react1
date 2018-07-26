import React from 'react'

import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'

const User = (props) => {
    const name = props.user.name.first + ' ' + props.user.name.last

    return (
        < ListItem
            primaryText={name}
            secondaryText={props.user.email}
            leftAvatar={<Avatar src={props.user.picture.thumbnail} />}
        />
    )
}

export default User