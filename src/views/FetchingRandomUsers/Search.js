import React from 'react'
import TextField from 'material-ui/TextField'

const Search = (props) => (
    <div>
        <TextField
            placeholder={'Search'}
            fullWidth={true}
            onChange={props.krowa}
            value={props.value}
        />
    </div>

)
export default Search