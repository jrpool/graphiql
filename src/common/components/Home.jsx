/* global __CLIENT__ window */
import './graphiQLHacks' // this is terrible, but GraphiQL doesn't support SSR
import React, {Component, PropTypes} from 'react'

import GraphiQL from 'graphiql'

import 'graphiql/graphiql.css'

class ServiceStorage {
  constructor(service) {
    this.service = service
  }

  serviceKey(key) {
    return `${this.service}:${key}`
  }

  getItem(key) {
    if (__CLIENT__) {
      return window.localStorage.getItem(this.serviceKey(key))
    }
  }

  setItem(key, value) {
    if (__CLIENT__) {
      if (value) {
        return window.localStorage.setItem(this.serviceKey(key), value)
      }
    }
  }
}

export default class Home extends Component {
  render() {
    const {service, services, fetcher, onSelectService} = this.props
    const storage = new ServiceStorage(service)

    // pass the 'key' property so the component will re-mount whenever
    // the service changes
    return (
      <GraphiQL
        key={service}
        fetcher={fetcher}
        storage={storage}
        >
        <GraphiQL.Toolbar>
          <label className="service-label">Service:</label>
          <select onChange={onSelectService} value={service}>
            {
              services.map((svc, i) => (
                <option key={i} value={svc.value}>{svc.label}</option>
              ))
            }
          </select>
        </GraphiQL.Toolbar>
      </GraphiQL>
    )
  }
}

Home.propTypes = {
  service: PropTypes.string.isRequired,
  services: PropTypes.array.isRequired,
  fetcher: PropTypes.func.isRequired,
  onSelectService: PropTypes.func.isRequired,
}
