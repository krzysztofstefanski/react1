import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import BasicComponents from './views/BasicComponents'
import Dashboard from './views/Dashboard'
import PassingParameters from './views/PassingParameters'

import Counter from './views/Counter'
import ToDo from './views/ToDo'
import Navigation from './views/Navigation'
import FetchingRandomUsers from './views/FetchingRandomUsers/FetchingRandomUsers';


const App = () => (
  <div>
    <Router>
      <div>
        <Navigation />

        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/dashboard'} component={Dashboard} />
        <Route path={'/basic-components'} component={BasicComponents} />
        <Route path={'/passing-parameters/:parameterName'} component={PassingParameters} />


        <Route path={'/counter'} component={() => <Counter number={5} />} />
        <Route path={'/todo'} component={ToDo} />
        <Route path={'/fetching-random-users'} component={FetchingRandomUsers} />
      </div>
    </Router>
  </div>
)

export default App