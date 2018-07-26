import React from 'react'
const DisplayArray = (props) => (

    <div>{
        <ul>
            {
                props.listOfNames.map((name, index) => <li key={index}>{name}</li>)
            }
        </ul>

    }
    </div>
)
export default DisplayArray