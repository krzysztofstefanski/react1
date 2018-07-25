import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'

import BasicComponents from './BasicComponents'
import Dashboard from './Dashboard'
import PassingParameters from './PassingParameters'
import SideBar from './SideBar'
import Counter from './Counter'

const App = () => (
  <div>
    <Router>
      <div>
        <AppBar
          title={'JFDDL5 APP'}
        />

        <SideBar />

        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/dashboard'} component={Dashboard} />
        <Route path={'/basic-components'} component={BasicComponents} />
        <Route path={'/passing-parameters/:parameterName'} component={PassingParameters} />
        <Route path={'/counter'} component={Counter} />
      </div>
    </Router>
  </div>
)

export default App