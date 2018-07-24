import React from 'react'

const SingingButton = (props) => {

const defaultMakeSound = () => alert(props.sound)


return(
    <div>
        <button
            onClick={props.makeSound || defaultMakeSound} 
        >
            {props.label}
     </button>
    </div>
)
}

export default SingingButton