import React from 'react'

const string = 'Ala ma kota'
const number = 123
const bool = true
const undefinedVar = undefined
const nullVar = null
const emptyArray = []
const arrWithStrings = ['Ala', 'Ela','Ilona']


const WhatReactRenders = () => (

    <div>
{string}
<br />
{number}
<br />
{bool}
<br />
{undefinedVar}
<br />
{nullVar}
<br />
{emptyArray}
<br />
{arrWithStrings}
<br />
{arrWithStrings[0]}{arrWithStrings[1]}{arrWithStrings[2]}

<ul>
{
    arrWithStrings.map((string,index) => <li key={index}>{string}</li>)
}
    </ul>

    </div>
)

export default WhatReactRenders