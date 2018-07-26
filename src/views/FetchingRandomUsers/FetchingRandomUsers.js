import React from 'react'

import User from './User'
import PaperRefined from '../../components/PaperRefined'
import Search from './Search'

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
        const usersList = (
            this.state.randomUserData
            &&
            this.state.randomUserData
                .map(user => (
                    <User
                        key={user.login.uuid}
                        user={user}
                    />
                ))
        )

        const searchResults = (
            this.state.randomUserData
            &&
            this.state.randomUserData
                .filter(user => user.name.first.indexOf(this.state.searchPhrase) !== -1)
                .map(user => (
                    <User
                        key={user.login.uuid}
                        user={user}
                    />
                ))
        )

        return (
            <div>
                <PaperRefined>
                    <Search
                        searchPhraseChangeHandler={this.searchPhraseChangeHandler}
                        searchPhrase={this.state.searchPhrase}
                    />
                </PaperRefined>
                <PaperRefined>
                    {searchResults}
                </PaperRefined>
                <PaperRefined>
                    {usersList}
                </PaperRefined>
            </div>
        )
    }
}
export default FetchingRandomUsers