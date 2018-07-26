import React from 'react'

class FetchingRandomUsers extends React.Component {

    state = {
        randomUserData :null
    }

    componentDidMount(){
        fetch('https://randomuser.me/api')
    .then (response => response.json())
    .then (dataFromResponse => {
        this.setState({
            randomUserData: dataFromResponse
        })
    })
    }

    render(){
        return(
<div>
{this.state.randomUserData !== null ? this.state.randomUserData.results[0].name.first + ' ' + this.state.randomUserData.results[0].name.last : ''  }


</div>

        )
    }
}
export default FetchingRandomUsers