/* eslint new-cap: [2, {"capIsNewExceptions": ["UserAuthWrapper"]}] */
import React from 'react'
import {Route, IndexRoute} from 'react-router'
import {routerActions} from 'react-router-redux'
import {UserAuthWrapper} from 'redux-auth-wrapper'

import App from '../containers/App'
import BlankLayout from '../containers/BlankLayout'
import Home from '../containers/Home'

const userIsAuthenticated = UserAuthWrapper({
  failureRedirectPath: 'https://idm.learnersguild.org/sign-in',
  authSelector: state => state.auth.currentUser,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'userIsAuthenticated',
})

const routes = (
  <Route path="/" component={App}>
    <Route component={BlankLayout}>
      <IndexRoute component={userIsAuthenticated(Home)}/>
    </Route>
  </Route>
)

export default routes
