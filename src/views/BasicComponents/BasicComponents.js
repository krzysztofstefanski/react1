import React from 'react'
import DisplayName from './DisplayName'
import DisplayArray from './DisplayArray'
import WhatReactRenders from './WhatReactRenders'
import SingingButtonWithBorder from './SingingButtonWithBorder'
import HelloWorld from './HelloWorld'

const BasicComponents = (props) => (

    <div>
        <h1> Basic Components</h1>
        <hr />
        <HelloWorld />
        <DisplayName
            firstName={'Krzysztof'}
            lastName={'Stefanski'}
        />

        <hr />

        <DisplayArray

            listOfNames={['ola', 'ala', 'ela']}
        />

        <hr />
        <WhatReactRenders />
        <hr />
        <SingingButtonWithBorder
            label={'Make sound'}
            sound={'Wlazł kotek na płotek'}
        />
    </div>

)

export default BasicComponents