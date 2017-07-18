import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

export function blankLayout({children}) {
  return (
    <div>
      {children}
    </div>
  )
}

blankLayout.propTypes = {
  children: PropTypes.any,
}

export default connect()(blankLayout)
