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
        serviceURL: process.env.IDM_BASE_URL,
      },
      game: {
        label: 'game',
        value: 'game',
        serviceURL: process.env.GAME_BASE_URL,
      },
    }
    this.serviceOptions = Object.keys(this.services).map(key => {
      return {
        label: this.services[key].label,
        value: this.services[key].value,
      }
    })
    this.state = {service: 'idm'}
    this.handleSelectService = this.handleSelectService.bind(this)
  }

  handleSelectService(e) {
    const service = e.target.value
    this.setState({service})
  }

  render() {
    const {dispatch, auth} = this.props
    const {service} = this.state
    const {serviceURL} = this.services[service]

    return (
      <HomeComponent
        fetcher={getGraphQLFetcher(dispatch, serviceURL, auth, false)}
        service={service}
        services={this.serviceOptions}
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
