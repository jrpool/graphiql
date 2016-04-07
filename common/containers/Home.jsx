import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import HomeComponent from '../components/Home'
import {getGraphQLFetcher} from '../util'

import 'graphiql/graphiql.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.services = {
      idm: {
        label: 'idm',
        value: 'idm',
        serviceUrls: {
          development: 'http://idm.learnersguild.dev',
          production: 'https://idm.learnersguild.org',
        },
      },
      game: {
        label: 'game',
        value: 'game',
        serviceUrls: {
          development: 'http://game.learnersguild.dev',
          production: 'https://game.learnersguild.org',
        },
      },
    }
    this.state = {service: 'idm'}
    this.handleSelectService = this.handleSelectService.bind(this)
  }

  handleSelectService(e) {
    const service = e.target.value
    this.setState({service})
  }

  render() {
    const {dispatch, auth} = this.props
    const services = Object.keys(this.services).map(key => {
      const {label, value} = this.services[key]
      return {label, value}
    })
    const {service} = this.state
    const {serviceUrls} = this.services[service]

    return (
      <HomeComponent
        fetcher={getGraphQLFetcher(dispatch, serviceUrls, auth, false)}
        service={service}
        services={services}
        onSelectService={this.handleSelectService}
        />
    )
  }
}

Home.propTypes = {
  auth: PropTypes.shape({
    isBusy: PropTypes.bool.isRequired,
    currentUser: PropTypes.object,
  }),
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Home)
