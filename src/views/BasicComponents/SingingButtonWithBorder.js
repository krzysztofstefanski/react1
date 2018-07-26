import React from 'react'
import Border from './Border'
import SingingButton from './SingingButton'



const SingingButtonWithBorder = (props) =>(
<Border>
    <SingingButton 
    label={props.label}
    sound={props.sound}
    makeSound={props.makeSound}
    
    />
    </Border>

)

export default SingingButtonWithBorder