import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import './Confirmation.css'

const Confirmation = ({ showing, confirm, cancel }) =>
  showing && (
    <div className="confirmation-container">
      <h2> Are you sure? </h2>
      <div className="confirmation-buttons-container">
        <div className="confirmation-button" onClick={confirm}>
          Confirm
        </div>
        <div className="confirmation-button" onClick={cancel}>
          Cancel
        </div>
      </div>
    </div>
  )

const mapStateToProps = state => ({
  showing: state.confirmation.showing,
})

const mapDispatchToProps = {
  confirm: actions.confirm,
  cancel: actions.cancel,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirmation)
