import React from 'react'
import routes from './routes'
import { Router } from 'react-router'
import { ReduxAsyncConnect } from 'redux-connect'
import './app.scss'
import 'isomorphic-fetch'

const App = ({ history }) => (
  <Router history={history} render={(props) => <ReduxAsyncConnect {...props} />}>
    {routes}
  </Router>
)
App.propTypes = {
  history: React.PropTypes.object.isRequired
}

export default App
