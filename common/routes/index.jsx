/* eslint new-cap: [2, {"capIsNewExceptions": ["UserAuthWrapper"]}] */
import React from 'react'
import {Route, IndexRoute} from 'react-router'
import {UserAuthWrapper} from 'redux-auth-wrapper'

import App from 'src/common/containers/App'
import BlankLayout from 'src/common/containers/BlankLayout'
import Home from 'src/common/containers/Home'

const userIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth.currentUser,
  redirectAction: () => {
    /* global __CLIENT__ window */
    if (__CLIENT__) {
      window.location.href = `${process.env.IDM_BASE_URL}/sign-in?redirect=${encodeURIComponent(window.location.href)}`
    }
    return {type: 'ignore'}
  },
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
