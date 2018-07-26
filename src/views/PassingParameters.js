import React from 'react'
const PassingParameters = (props) => (
    <div>
        {props.match.params.parameterName}
    </div>

)

export default PassingParameters