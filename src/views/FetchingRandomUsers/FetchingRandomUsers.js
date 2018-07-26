import React from 'react'

class FetchingRandomUsers extends React.Component {

    state = {
        randomUserData :null
    }

    componentDidMount(){
        fetch('https://randomuser.me/api?results=10')
    .then (response => response.json())
    .then (dataFromResponse => {
        this.setState({
            randomUserData: dataFromResponse.results
        })
    })
    }

    render(){
        return(
<div>
{
this.state.randomUserData
&&
this.state.randomUserData
.map(user => (
<div
key={user.loginuuid}
>
{user.name.first}</div>
))
}
</div>

        )
    }
}
export default FetchingRandomUsers