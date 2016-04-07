import './graphiQLHacks' // this is terrible, but GraphiQL doesn't support SSR
import React, {Component, PropTypes} from 'react'

import GraphiQL from 'graphiql'

import 'graphiql/graphiql.css'

export default class Home extends Component {
  render() {
    const {service, services, fetcher, onSelectService} = this.props

    return (
      <GraphiQL fetcher={fetcher}>
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
