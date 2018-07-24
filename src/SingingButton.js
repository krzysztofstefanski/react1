import React from 'react'

const SingingButton = (props) => (

    <div>
        <button
            onClick={() => alert(props.sound)}
        >
            {props.label}
     </button>
    </div>
)

export default SingingButton