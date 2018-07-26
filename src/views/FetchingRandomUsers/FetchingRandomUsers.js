import React from 'react'

import User from './User'
import Search from './Search'
import PaperRefined from '../../components/PaperRefined'

class FetchingRandomUsers extends React.Component {
    state = {
        randomUserData: null,
        searchPhrase: ''
    }

    componentDidMount() {
        fetch('https://randomuser.me/api?results=10')
            .then(response => response.json())
            .then(dataFromReposnse => {
                this.setState({
                    randomUserData: dataFromReposnse.results
                })
            })
    }

    searchPhraseChangeHandler = (event) => {

        this.setState({
            searchPhrase: event.target.value
        })


    }

    render() {
        return (
            <div>
                <PaperRefined>
                    <Search
                    krowa={}
                    value={}
                    />
                </PaperRefined>
                <PaperRefined>
                    {
                        this.state.randomUserData
                        &&
                        this.state.randomUserData
                            .map(user => (
                                <User
                                    key={user.login.uuid}
                                    user={user}
                                />
                            ))
                    }
                </PaperRefined>
            </div>
        )
    }
}
export default FetchingRandomUsers